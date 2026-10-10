import { getViewportSize } from './useViewport';

export default function useInitialWindowSize({ margin }: { margin?: number }) {
    let m = margin || 0;

    const { width: winW, height: winH } = getViewportSize();

    let initWidth = winW - m;
    let initHeight = winH - m;

    return { initWidth, initHeight };
}
