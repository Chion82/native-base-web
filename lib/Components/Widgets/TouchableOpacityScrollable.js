/* Author: @Chion82 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _NativeBaseComponent2 = require('../Base/NativeBaseComponent');

var _NativeBaseComponent3 = _interopRequireDefault(_NativeBaseComponent2);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TouchableOpacityScrollable = function (_NativeBaseComponent) {
    _inherits(TouchableOpacityScrollable, _NativeBaseComponent);

    function TouchableOpacityScrollable(props) {
        _classCallCheck(this, TouchableOpacityScrollable);

        var _this = _possibleConstructorReturn(this, (TouchableOpacityScrollable.__proto__ || Object.getPrototypeOf(TouchableOpacityScrollable)).call(this, props));

        _this.state = {
            ignoreMouseEvent: false,
            fadeAnim: new _reactNative.Animated.Value(1)
        };
        return _this;
    }

    _createClass(TouchableOpacityScrollable, [{
        key: 'handlePressIn',
        value: function handlePressIn() {
            _reactNative.Animated.timing(this.state.fadeAnim, {
                toValue: this.props.activeOpacity || 0.2
            }).start();
        }
    }, {
        key: 'handlePressOut',
        value: function handlePressOut() {
            _reactNative.Animated.timing(this.state.fadeAnim, {
                toValue: 1
            }).start();
        }
    }, {
        key: 'prepareRootProps',
        value: function prepareRootProps() {
            var _this2 = this;

            var props = _lodash2.default.clone(this.props);
            if (props.onPress) {
                props.onClick = props.onPress;
                delete props.onPress;
            }

            var onPressIn = props.onPressIn || function () {};
            props.onMouseDown = function (e) {
                if (_this2.state.ignoreMouseEvent) return;
                _this2.handlePressIn();
                return onPressIn(e);
            };
            props.onTouchStart = function (e) {
                _this2.setState({
                    ignoreMouseEvent: true
                });
                _this2.handlePressIn();
                return onPressIn(e);
            };
            delete props.onPressIn;

            var onPressOut = props.onPressOut || function () {};
            props.onMouseUp = function (e) {
                if (_this2.state.ignoreMouseEvent) return;
                _this2.handlePressOut();
                return onPressOut(e);
            };
            props.onTouchEnd = function (e) {
                _this2.setState({
                    ignoreMouseEvent: true
                });
                _this2.handlePressOut();
                return onPressOut(e);
            };
            delete props.onPressOut;

            if (props.style) delete props.style;

            return props;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactNative.Animated.View,
                _extends({}, this.prepareRootProps(), { style: _extends({}, this.props.style || {}, {
                        opacity: this.state.fadeAnim
                    }) }),
                this.props.children
            );
        }
    }]);

    return TouchableOpacityScrollable;
}(_NativeBaseComponent3.default);

exports.default = TouchableOpacityScrollable;