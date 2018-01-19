import scrollToPosition from "./scroll";

export default class WindowScroller {
    constructor(configuration) {
        this.configuration = configuration;
        this.init();
    }

    init() {
        [].slice.call(this.configuration.getElements()).forEach((element) => {
                element.addEventListener('click', () => {
                    this.onClick(element);
                });
            }
        );
    }

    onClick(anchorElement) {
        const anchor = this.configuration.getAnchorFromElement(anchorElement);

        if (!anchor) {
            return scrollToPosition(0, this.configuration);
        }

        const element = this.configuration.getElementByAnchor(anchor);

        if (!element) {
            return scrollToPosition(0, this.configuration);
        }

        const position = this.configuration.getElementPosition(element);

        if (!position) {
            return scrollToPosition(0, this.configuration);
        }

        scrollToPosition(position, this.configuration);
    }

}