"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = scrollToPosition;

var _windowUtils = require("./window-utils");

function scrollToPosition(position, configuration) {
    var startPosition = (0, _windowUtils.getWindowPosition)();
    var difference = position - startPosition;
    var period = configuration.getScrollPeriod();
    var duration = configuration.getScrollDuration();
    var positionResolver = configuration.getScrollPosition;

    setTimeout(createRecursiveScrollingFunction(startPosition, difference, period, duration, positionResolver), period);
}

function createRecursiveScrollingFunction(startPosition, difference, period, duration, positionResolver) {
    var spentTime = 0;

    return function recursiveScroller() {
        spentTime += period;
        (0, _windowUtils.setWindowPosition)(positionResolver(spentTime, startPosition, difference, duration));

        if (spentTime < duration) {
            setTimeout(recursiveScroller, period);
        }
    };
}