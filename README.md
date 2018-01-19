# Window Scroller

Window Scroller is JS library that provides scrolling to specific element on anchor click functionality.

## Installation

Npm:
``npm install syzygy-window-scroller-js``

Yarn:
``yarn add syzygy-window-scroller-js``

## Examples

ES6 Import:

```js
import {windowScroller} from 'syzygy-window-scroller-js';
```

Node require:

```js
const windowScroller = require('syzygy-window-scroller-js');
```

Example without resolvers:

```js
windowScroller({
    selector: '.window-scroller',           //selector by which elements are chosen
    anchorAttribute: 'data-scroll-to',      //anchor attribute of element
    scrollDuration: 1000,                   //duration of scroll animation (in ms)
    scrollPeriod: 20,                       //timeout between every scroll position update (in ms)
});
```

Custom resolvers example:

```js
windowScroller({
    elementsResolver: () => {
        console.log('custom elements resolver');
        return Array.prototype.slice.call(document.querySelectorAll('[data-scroll-to="#main"],[data-scroll-to="#konkurs"]'));
    },

    elementAnchorResolver: (element) => {
        console.log('custom elementAnchor resolver');
        return element.getAttribute('data-scroll-to').substr(1);
    },

    elementByAnchorResolver: (element) => {
        console.log('custom element by anchor resolver');
        return document.getElementById(element);
    },

    elementPositionResolver: (element) => {
        console.log('custom element position resolver');
        const result = window.document.scrollingElement.scrollTop
            + element.getBoundingClientRect().top;

        if (result < 0) {
            return 0;
        }

        return result;
    },

    scrollPositionResolver: () => {
        console.log('(spentTime, startPoint, difference, duration');
        return 0;
    },
});
```

## Parameters

Name | Description | Default behaviour
--- | --- | ---
`selector: string` | Selector by which anchor elements are chosen | equals `'.window-scroller'`
`anchorAttribute: string` | Anchor attribute of element | equals `data-scroll-to`
`duration: number` | Duration of scroll animation (in ms) | equals `5000`
`period: number` | Timeout between every scroll position update (in ms) | equals `20`
`elementsResolver: () => Elements[]` | Resolver of anchor elements (overrides `selector`) | uses `selector` to find elements
`elementAnchorResolver: (el: Element) => string` | Resolves given element anchor (overrides `anchorAttribute`) | uses `attribute` to resolve anchor
`elementByAnchorResolver: (anchor: string) => Element` | Resolves element by anchor | Resolves element by id as given anchor
`elementPositionResolver: (el: Element) => number` | Resolves position to scroll by element | gets elements top position and subtracts offset
`scrollPositionResolver: (spentTime: number, startPoint: number, difference: number, duration: number) =>  number` | Resolves position to scroll in specified time | uses `easeInOutQuad` function
