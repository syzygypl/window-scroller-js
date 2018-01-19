import Configuration from "./configuration";
import {getWindowPosition} from "../logic/window-utils";

export default function createConfigurationFromObject(object) {
    let configuration = {};

    configuration.getElements = object.elementsResolver ||
        createDefaultGetElementsFunction(object.selector || '.window-scroller');

    configuration.getAnchorFromElement = object.elementAnchorResolver ||
        createDefaultGetAnchorFromElementFunction(object.anchorAttribute || 'data-scroll-to');

    configuration.getElementByAnchor = object.elementByAnchorResolver || defaultGetElementByAnchor;
    configuration.getElementPosition = object.elementPositionResolver || defaultGetElementPosition;
    configuration.getScrollPosition = object.scrollPositionResolver || defaultGetScrollPosition;

    configuration.scrollDuration = object.duration || 1000;
    configuration.scrollPeriod = object.period || 10;

    return new Configuration(configuration);
}


function createDefaultGetElementsFunction(value) {
    return () => {
        return [].splice(document.querySelectorAll(value));
    }
}

function createDefaultGetAnchorFromElementFunction(value) {
    return (element) => {
        return element.getAttribute(value);
    }
}

function defaultGetElementByAnchor(anchor) {
    return document.getElementById(anchor);
}

function defaultGetElementPosition(element) {
    const result = getWindowPosition()
        + element.getBoundingClientRect().top;

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