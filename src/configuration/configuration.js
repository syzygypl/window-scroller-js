export default class Configuration {

    constructor(object) {
        this.getElements = object.getElements;
        this.getAnchorFromElement = object.getAnchorFromElement;
        this.getElementByAnchor = object.getElementByAnchor;
        this.getElementPosition = object.getElementPosition;
        this.getScrollPosition = object.getScrollPosition;
        this.scrollDuration = object.scrollDuration;
        this.scrollPeriod = object.scrollPeriod;
    }

    getScrollPeriod() {
        return this.scrollPeriod;
    }

    getScrollDuration() {
        return this.scrollDuration;
    }
}