"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createConfigurationFromObject;

var _windowUtils = require("../logic/window-utils");

var _configuration = require("./configuration");

var _configuration2 = _interopRequireDefault(_configuration);

var _windowUtils2 = require("../../dist/logic/window-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createConfigurationFromObject(object) {
    var configuration = {};

    configuration.getElements = object.elementsResolver || createDefaultGetElementByAnchor(object.selector || '.window-scroller');

    configuration.getAnchorFromElement = object.elementAnchorResolver || createDefaultGetAnchorFromElementFunction(object.anchorAttribute || 'data-scroll-to');

    configuration.getElementByAnchor = object.elementByAnchorResolver || defaultGetElementByAnchor;
    configuration.getElementPosition = object.elementPositionResolver || defaultGetElementPosition;
    configuration.getScrollPosition = object.scrollPositionResolver || defaultGetScrollPosition;

    configuration.scrollDuration = object.duration || 1000;
    configuration.scrollPeriod = object.period || 10;

    return new _configuration2.default(configuration);
}

function createDefaultGetElementsFunction(value) {
    return function () {
        return [].splice(document.querySelectorAll(value));
    };
}

function createDefaultGetAnchorFromElementFunction(value) {
    return function (element) {
        return element.getAttribute(value);
    };
}

function createOrGetResolverFunction(defaultValue, value, resolverFunction) {
    if (resolverFunction && typeof resolverFunction === "function") {
        return resolverFunction;
    }

    var resultValue = value || defaultValue;

    return function () {
        return resultValue;
    };
}

function defaultGetElementByAnchor(anchor) {
    return document.getElementById(anchor);
}

function defaultGetElementPosition(element) {
    var result = (0, _windowUtils2.getWindowPosition)() + element.getBoundingClientRect().top;

    if (result < 0) {
        return 0;
    }

    return result;
}

function defaultGetScrollPosition(spentTime, startPoint, difference, duration) {
    spentTime /= duration / 2;
    if (spentTime < 1) {
        return difference / 2 * spentTime * spentTime + startPoint;
    }
    spentTime--;
    return -difference / 2 * (spentTime * (spentTime - 2) - 1) + startPoint;
}