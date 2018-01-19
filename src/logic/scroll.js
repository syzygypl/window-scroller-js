import {getWindowPosition, setWindowPosition} from "./window-utils";

export default function scrollToPosition(position, configuration) {
    const startPosition = getWindowPosition();
    const difference = position - startPosition;
    const period = configuration.getScrollPeriod();
    const duration = configuration.getScrollDuration();
    const positionResolver = configuration.getScrollPosition;

    setTimeout(createRecursiveScrollingFunction(startPosition, difference, period, duration, positionResolver), period);
}

function createRecursiveScrollingFunction(startPosition, difference, period, duration, positionResolver) {
    let spentTime = 0;

    return function recursiveScroller() {
        spentTime += period;
        setWindowPosition(positionResolver(spentTime, startPosition, difference, duration));

        if (spentTime < duration) {
            setTimeout(recursiveScroller, period);
        }
    }
}