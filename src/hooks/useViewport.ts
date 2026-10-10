import { useEffect, useState } from 'react';

// Below this width, windows open full screen and can't be dragged
export const MOBILE_BREAKPOINT = 768;

// Height of the taskbar at the bottom of the desktop
export const TOOLBAR_HEIGHT = 32;

// The layout viewport, not innerWidth: mobile browsers grow innerWidth to
// fit anything that overflows, which would make a phone look like a desktop
export const getViewportSize = () => ({
    width: document.documentElement.clientWidth || window.innerWidth,
    height: document.documentElement.clientHeight || window.innerHeight,
});

const getViewport = () => {
    const { width, height } = getViewportSize();
    return { width, height, isMobile: width < MOBILE_BREAKPOINT };
};

export default function useViewport() {
    const [viewport, setViewport] = useState(getViewport);

    useEffect(() => {
        const onResize = () => setViewport(getViewport());
        window.addEventListener('resize', onResize);
        window.addEventListener('orientationchange', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
            window.removeEventListener('orientationchange', onResize);
        };
    }, []);

    return viewport;
}
