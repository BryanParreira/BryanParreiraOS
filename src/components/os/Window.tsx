import React, { useEffect, useRef, useState } from 'react';
import { IconName } from '../../assets/icons';
import colors from '../../constants/colors';
import Colors from '../../constants/colors';
import Icon from '../general/Icon';
import Button from './Button';
import DragIndicator from './DragIndicator';
import ResizeIndicator from './ResizeIndicator';
import useViewport, { TOOLBAR_HEIGHT } from '../../hooks/useViewport';

const MIN_WIDTH = 520;
const MIN_HEIGHT = 220;

// Keeps enough of the title bar on screen to drag the window back
const TITLE_BAR_GRAB = 120;

type Frame = { width: number; height: number; top: number; left: number };

const fitFrame = (
    frame: Frame,
    viewportWidth: number,
    viewportHeight: number
): Frame => {
    const width = Math.min(frame.width, viewportWidth);
    const height = Math.min(frame.height, viewportHeight);
    const left = Math.min(
        Math.max(frame.left, TITLE_BAR_GRAB - width),
        viewportWidth - TITLE_BAR_GRAB
    );
    const top = Math.min(Math.max(frame.top, 0), viewportHeight - 40);
    return { width, height, top, left };
};

export interface WindowProps {
    closeWindow: () => void;
    minimizeWindow: () => void;
    onInteract: () => void;
    width: number;
    height: number;
    top: number;
    left: number;
    windowTitle?: string;
    bottomLeftText?: string;
    rainbow?: boolean;
    windowBarColor?: string;
    windowBarIcon?: IconName;
    onWidthChange?: (width: number) => void;
    onHeightChange?: (height: number) => void;
}

const Window: React.FC<WindowProps> = (props) => {
    const windowRef = useRef<any>(null);
    const dragRef = useRef<any>(null);
    const contentRef = useRef<any>(null);

    const dragProps = useRef<{
        dragStartX: number;
        dragStartY: number;
        baseLeft: number;
        baseTop: number;
    }>();

    const resizeRef = useRef<any>(null);

    const viewport = useViewport();

    const [top, setTop] = useState(props.top);
    const [left, setLeft] = useState(props.left);

    const lastClickInside = useRef(false);

    const [width, setWidth] = useState(props.width);
    const [height, setHeight] = useState(props.height);

    const [contentWidth, setContentWidth] = useState(props.width);
    const [contentHeight, setContentHeight] = useState(props.height);

    const [windowActive, setWindowActive] = useState(true);

    const [isMaximized, setIsMaximized] = useState(false);

    const [isDragging, setIsDragging] = useState(false);
    const [isResizing, setIsResizing] = useState(false);

    // Phones always get a full screen window; elsewhere the window is
    // shrunk to fit the screen and kept where its title bar can be grabbed
    const isFullscreen = isMaximized || viewport.isMobile;
    const desktopHeight = viewport.height - TOOLBAR_HEIGHT;
    const frame = isFullscreen
        ? { width: viewport.width, height: desktopHeight, top: 0, left: 0 }
        : fitFrame(
              { width, height, top, left },
              viewport.width,
              desktopHeight
          );

    // Pointer events so dragging and resizing also work with touch. Default
    // isn't prevented, so the mousedown that brings the window forward fires
    const startResize = () => {
        if (isFullscreen) return;
        setIsResizing(true);
        window.addEventListener('pointermove', onResize, false);
        window.addEventListener('pointerup', stopResize, false);
    };

    const onResize = ({ clientX, clientY }: PointerEvent) => {
        const curWidth = clientX - frame.left;
        const curHeight = clientY - frame.top;
        if (curWidth > MIN_WIDTH)
            resizeRef.current.style.width = `${curWidth}px`;
        if (curHeight > MIN_HEIGHT)
            resizeRef.current.style.height = `${curHeight}px`;
        resizeRef.current.style.opacity = 1;
    };

    const stopResize = () => {
        setIsResizing(false);
        setWidth(parseFloat(resizeRef.current.style.width));
        setHeight(parseFloat(resizeRef.current.style.height));
        resizeRef.current.style.opacity = 0;
        window.removeEventListener('pointermove', onResize, false);
        window.removeEventListener('pointerup', stopResize, false);
    };

    const startDrag = (event: React.PointerEvent) => {
        if (isFullscreen) return;
        const { clientX, clientY } = event;
        setIsDragging(true);
        dragProps.current = {
            dragStartX: clientX,
            dragStartY: clientY,
            baseLeft: frame.left,
            baseTop: frame.top,
        };
        window.addEventListener('pointermove', onDrag, false);
        window.addEventListener('pointerup', stopDrag, false);
    };

    const onDrag = ({ clientX, clientY }: PointerEvent) => {
        let { x, y } = getXYFromDragProps(clientX, clientY);
        dragRef.current.style.transform = `translate(${x}px, ${y}px)`;
        dragRef.current.style.opacity = 1;
    };

    const stopDrag = ({ clientX, clientY }: PointerEvent) => {
        setIsDragging(false);
        const { x, y } = getXYFromDragProps(clientX, clientY);
        setTop(y);
        setLeft(x);
        window.removeEventListener('pointermove', onDrag, false);
        window.removeEventListener('pointerup', stopDrag, false);
    };

    const getXYFromDragProps = (
        clientX: number,
        clientY: number
    ): { x: number; y: number } => {
        if (!dragProps.current) return { x: 0, y: 0 };
        const { dragStartX, dragStartY, baseLeft, baseTop } =
            dragProps.current;

        const x = clientX - dragStartX + baseLeft;
        const y = clientY - dragStartY + baseTop;

        return { x, y };
    };

    useEffect(() => {
        dragRef.current.style.transform = `translate(${frame.left}px, ${frame.top}px)`;
    });

    useEffect(() => {
        props.onWidthChange && props.onWidthChange(contentWidth);
    }, [props.onWidthChange, contentWidth]); // eslint-disable-line

    useEffect(() => {
        props.onHeightChange && props.onHeightChange(contentHeight);
    }, [props.onHeightChange, contentHeight]); // eslint-disable-line

    useEffect(() => {
        setContentWidth(contentRef.current.getBoundingClientRect().width);
    }, [frame.width]);

    useEffect(() => {
        setContentHeight(contentRef.current.getBoundingClientRect().height);
    }, [frame.height]);

    const maximize = () => {
        setIsMaximized(!isMaximized);
    };

    const onCheckClick = () => {
        if (lastClickInside.current) {
            setWindowActive(true);
        } else {
            setWindowActive(false);
        }
        lastClickInside.current = false;
    };

    useEffect(() => {
        window.addEventListener('mousedown', onCheckClick, false);
        return () => {
            window.removeEventListener('mousedown', onCheckClick, false);
        };
    }, []);

    const onWindowInteract = () => {
        props.onInteract();
        setWindowActive(true);
        lastClickInside.current = true;
    };

    return (
        <div onMouseDown={onWindowInteract} style={styles.container}>
            <div
                style={Object.assign({}, styles.window, frame)}
                ref={windowRef}
            >
                <div style={styles.windowBorderOuter}>
                    <div style={styles.windowBorderInner}>
                        {!isFullscreen && (
                            <div
                                style={styles.dragHitbox}
                                onPointerDown={startDrag}
                                onDoubleClick={maximize}
                            ></div>
                        )}
                        <div
                            className={props.rainbow ? 'rainbow-wrapper' : ''}
                            style={Object.assign(
                                {},
                                styles.topBar,
                                viewport.isMobile && styles.topBarMobile,
                                props.windowBarColor && {
                                    backgroundColor: props.windowBarColor,
                                },
                                !windowActive && {
                                    backgroundColor: Colors.darkGray,
                                }
                            )}
                        >
                            <div style={styles.windowHeader}>
                                {props.windowBarIcon ? (
                                    <Icon
                                        icon={props.windowBarIcon}
                                        style={Object.assign(
                                            {},
                                            styles.windowBarIcon,
                                            !windowActive && { opacity: 0.5 }
                                        )}
                                        size={16}
                                    />
                                ) : (
                                    <div style={{ width: 16 }} />
                                )}
                                <p
                                    style={
                                        windowActive
                                            ? {}
                                            : { color: colors.lightGray }
                                    }
                                    className="showcase-header"
                                >
                                    {props.windowTitle}
                                </p>
                            </div>
                            <div
                                style={Object.assign(
                                    {},
                                    styles.windowTopButtons,
                                    viewport.isMobile &&
                                        styles.windowTopButtonsMobile
                                )}
                            >
                                <Button
                                    icon="minimize"
                                    onClick={props.minimizeWindow}
                                />
                                {!viewport.isMobile && (
                                    <Button icon="maximize" onClick={maximize} />
                                )}
                                <div style={{ paddingLeft: 2 }}>
                                    <Button
                                        icon="close"
                                        onClick={props.closeWindow}
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            style={Object.assign({}, styles.contentOuter, {
                                // zIndex: isDragging || isResizing ? 0 : 100,
                            })}
                        >
                            <div style={styles.contentInner}>
                                <div style={styles.content} ref={contentRef}>
                                    {props.children}
                                </div>
                            </div>
                        </div>
                        {!isFullscreen && (
                            <div
                                onPointerDown={startResize}
                                style={styles.resizeHitbox}
                            ></div>
                        )}
                        <div style={styles.bottomBar}>
                            <div
                                style={Object.assign({}, styles.insetBorder, {
                                    flex: 5 / 7,
                                    alignItems: 'center',
                                })}
                            >
                                <p
                                    style={{
                                        fontSize: 12,
                                        marginLeft: 4,
                                        fontFamily: 'MSSerif',
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                    }}
                                >
                                    {props.bottomLeftText}
                                </p>
                            </div>
                            <div
                                style={Object.assign(
                                    {},
                                    styles.insetBorder,
                                    styles.bottomSpacer
                                )}
                            />
                            <div
                                style={Object.assign(
                                    {},
                                    styles.insetBorder,
                                    styles.bottomSpacer
                                )}
                            />
                            <div
                                style={Object.assign(
                                    {},
                                    styles.insetBorder,
                                    styles.bottomResizeContainer
                                )}
                            >
                                <div
                                    style={{
                                        alignItems: 'flex-end',
                                    }}
                                >
                                    <Icon size={12} icon="windowResize" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                style={
                    !isResizing
                        ? {
                              zIndex: -10000,
                              pointerEvents: 'none',
                          }
                        : {
                              zIndex: 1000,
                              cursor: 'nwse-resize',
                              mixBlendMode: 'difference',
                          }
                }
            >
                <ResizeIndicator
                    top={frame.top}
                    left={frame.left}
                    width={frame.width}
                    height={frame.height}
                    resizeRef={resizeRef}
                />
            </div>
            <div
                style={
                    !isDragging
                        ? {
                              zIndex: -10000,
                              pointerEvents: 'none',
                          }
                        : {
                              zIndex: 1000,
                              cursor: 'move',
                              mixBlendMode: 'difference',
                          }
                }
            >
                <DragIndicator
                    width={frame.width}
                    height={frame.height}
                    dragRef={dragRef}
                />
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    window: {
        backgroundColor: Colors.lightGray,
        position: 'absolute',
    },
    dragHitbox: {
        position: 'absolute',
        width: 'calc(100% - 70px)',
        height: 48,
        zIndex: 10000,
        top: -8,
        left: -4,
        cursor: 'move',
        touchAction: 'none',
    },
    windowBorderOuter: {
        border: `1px solid ${Colors.black}`,
        borderTopColor: colors.lightGray,
        borderLeftColor: colors.lightGray,
        flex: 1,
    },
    windowBorderInner: {
        border: `1px solid ${Colors.darkGray}`,
        borderTopColor: colors.white,
        borderLeftColor: colors.white,
        flex: 1,
        padding: 2,

        flexDirection: 'column',
    },
    resizeHitbox: {
        position: 'absolute',
        width: 60,
        height: 60,
        bottom: -20,
        right: -20,
        cursor: 'nwse-resize',
        touchAction: 'none',
    },
    topBar: {
        backgroundColor: Colors.blue,
        width: '100%',
        height: 20,

        alignItems: 'center',
        paddingRight: 2,
        boxSizing: 'border-box',
    },
    topBarMobile: {
        height: 28,
    },
    contentOuter: {
        border: `1px solid ${Colors.white}`,
        borderTopColor: colors.darkGray,
        borderLeftColor: colors.darkGray,
        flexGrow: 1,

        marginTop: 8,
        marginBottom: 8,
        overflow: 'hidden',
    },
    contentInner: {
        border: `1px solid ${Colors.lightGray}`,
        borderTopColor: colors.black,
        borderLeftColor: colors.black,
        flex: 1,
        overflow: 'hidden',
    },
    content: {
        flex: 1,

        position: 'relative',
        // overflow: 'scroll',
        overflowX: 'hidden',
        backgroundColor: Colors.white,
    },
    bottomBar: {
        flexShrink: 1,
        width: '100%',
        height: 20,
    },
    bottomSpacer: {
        width: 16,
        marginLeft: 2,
    },
    insetBorder: {
        border: `1px solid ${Colors.white}`,
        borderTopColor: colors.darkGray,
        borderLeftColor: colors.darkGray,
        padding: 2,
    },
    bottomResizeContainer: {
        flex: 2 / 7,

        justifyContent: 'flex-end',
        padding: 0,
        marginLeft: 2,
    },
    windowTopButtons: {
        // zIndex: 10000,

        alignItems: 'center',
    },
    windowTopButtonsMobile: {
        transform: 'scale(1.4)',
        transformOrigin: 'right center',
    },
    windowHeader: {
        flex: 1,
        minWidth: 0,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    windowBarIcon: {
        paddingLeft: 4,
        paddingRight: 4,
    },
};

export default Window;
