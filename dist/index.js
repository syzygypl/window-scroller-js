"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.windowScroller = windowScroller;

var _windowScroller = require("./logic/window-scroller");

var _windowScroller2 = _interopRequireDefault(_windowScroller);

var _createConfigurationFromObject = require("./configuration/create-configuration-from-object");

var _createConfigurationFromObject2 = _interopRequireDefault(_createConfigurationFromObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function windowScroller(config) {
    return new _windowScroller2.default((0, _createConfigurationFromObject2.default)(config));
}