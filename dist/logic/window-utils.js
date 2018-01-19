"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getWindowScrollingElement = getWindowScrollingElement;
exports.getWindowPosition = getWindowPosition;
exports.setWindowPosition = setWindowPosition;
function getWindowScrollingElement() {
    var windowScrollingElement = window.document.scrollingElement || window.document.documentElement;

    if (!windowScrollingElement) {
        throw new Error("Window scrolling element is not found");
    }

    return windowScrollingElement;
}

function getWindowPosition() {
    return getWindowScrollingElement().scrollTop;
}

function setWindowPosition(position) {
    getWindowScrollingElement().scrollTop = position;
}