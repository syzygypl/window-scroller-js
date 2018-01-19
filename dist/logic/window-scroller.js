"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _scroll = require("./scroll");

var _scroll2 = _interopRequireDefault(_scroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WindowScroller = function () {
    function WindowScroller(configuration) {
        _classCallCheck(this, WindowScroller);

        this.configuration = configuration;
        this.init();
    }

    _createClass(WindowScroller, [{
        key: "init",
        value: function init() {
            var _this = this;

            [].slice.call(this.configuration.getElements()).forEach(function (element) {
                element.addEventListener('click', function () {
                    _this.onClick(element);
                });
            });
        }
    }, {
        key: "onClick",
        value: function onClick(anchorElement) {
            var anchor = this.configuration.getAnchorFromElement(anchorElement);

            if (!anchor) {
                return (0, _scroll2.default)(0, this.configuration);
            }

            var element = this.configuration.getElementByAnchor(anchor);

            if (!element) {
                return (0, _scroll2.default)(0, this.configuration);
            }

            var position = this.configuration.getElementPosition(element);

            if (!position) {
                return (0, _scroll2.default)(0, this.configuration);
            }

            (0, _scroll2.default)(position, this.configuration);
        }
    }]);

    return WindowScroller;
}();

exports.default = WindowScroller;