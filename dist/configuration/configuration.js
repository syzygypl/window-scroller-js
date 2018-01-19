"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Configuration = function () {
    function Configuration(object) {
        _classCallCheck(this, Configuration);

        this.getElements = object.getElements;
        this.getAnchorFromElement = object.getAnchorFromElement;
        this.getElementByAnchor = object.getElementByAnchor;
        this.getElementPosition = object.getElementPosition;
        this.getScrollPosition = object.getScrollPosition;
        this.scrollDuration = object.scrollDuration;
        this.scrollPeriod = object.scrollPeriod;
    }

    _createClass(Configuration, [{
        key: "getScrollPeriod",
        value: function getScrollPeriod() {
            return this.scrollPeriod;
        }
    }, {
        key: "getScrollDuration",
        value: function getScrollDuration() {
            return this.scrollDuration;
        }
    }]);

    return Configuration;
}();

exports.default = Configuration;