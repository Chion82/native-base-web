'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNativeWebExtended = require('react-native-web-extended');

var _platform = require('../../Utils/platform');

var _platform2 = _interopRequireDefault(_platform);

var _NativeBaseComponent2 = require('../Base/NativeBaseComponent');

var _NativeBaseComponent3 = _interopRequireDefault(_NativeBaseComponent2);

var _computeProps = require('../../Utils/computeProps');

var _computeProps2 = _interopRequireDefault(_computeProps);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_NativeBaseComponent) {
    _inherits(Button, _NativeBaseComponent);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: 'getInitialStyle',
        value: function getInitialStyle() {
            return {
                button: {
                    paddingVertical: this.getTheme().buttonPadding,
                    paddingHorizontal: this.getTheme().buttonPadding + 2,
                    justifyContent: this.props.block ? 'center' : 'space-around',
                    flexDirection: 'row',
                    alignSelf: 'center',
                    alignItems: 'center',
                    backgroundColor: this.getTheme().btnPrimaryBg
                }
            };
        }
    }, {
        key: 'prepareRootProps',
        value: function prepareRootProps() {

            var type = {
                backgroundColor: this.props.primary ? this.getTheme().btnPrimaryBg : this.props.transparent || this.props.bordered ? 'rgba(0,0,0,0)' : this.props.success ? this.getTheme().btnSuccessBg : this.props.danger ? this.getTheme().btnDangerBg : this.props.warning ? this.getTheme().btnWarningBg : this.props.info ? this.getTheme().btnInfoBg : this.props.backgroundColor ? this.props.backgroundColor : this.props.disabled ? this.getTheme().btnDisabledBg : this.getInitialStyle().button.backgroundColor,
                borderRadius: this.props.rounded ? this.getTheme().borderRadiusLarge : this.getTheme().borderRadiusBase,
                borderWidth: this.props.bordered ? 1 : 0,
                borderColor: this.props.primary ? this.getTheme().primary : this.props.success ? this.getTheme().btnSuccessBg : this.props.danger ? this.getTheme().btnDangerBg : this.props.warning ? this.getTheme().btnWarningBg : this.props.info ? this.getTheme().btnInfoBg : this.getInitialStyle().button.backgroundColor,
                height: this.props.large ? 60 : this.props.small ? 35 : 38,
                alignSelf: this.props.block ? 'stretch' : 'flex-start'
            };

            var addedProps = _lodash2.default.merge(this.getInitialStyle().button, type);

            var defaultProps = {
                style: addedProps
            };

            return (0, _computeProps2.default)(this.props, defaultProps);
        }
    }, {
        key: 'getTextStyle',
        value: function getTextStyle() {

            var mergedStyle = {};
            var btnType = {
                fontFamily: this.getTheme().btnFontFamily,
                marginLeft: this.iconPresent() && !this.props.iconRight ? this.getTheme().iconMargin : 0,
                marginRight: this.iconPresent() && this.props.iconRight ? this.getTheme().iconMargin : 0,
                color: this.props.bordered && this.props.primary ? this.getTheme().btnPrimaryBg : this.props.bordered && this.props.success ? this.getTheme().btnSuccessBg : this.props.bordered && this.props.danger ? this.getTheme().btnDangerBg : this.props.bordered && this.props.warning ? this.getTheme().btnWarningBg : this.props.bordered && this.props.info ? this.getTheme().btnInfoBg : this.props.bordered ? this.getTheme().btnPrimaryBg : this.props.color ? this.props.color : this.props.transparent ? this.getContextForegroundColor() : this.getTheme().inverseTextColor,

                fontSize: this.props.large ? this.getTheme().btnTextSizeLarge : this.props.small ? this.getTheme().btnTextSizeSmall : this.getTheme().btnTextSize,

                lineHeight: this.props.large ? 29 : this.props.small ? 16 : this.getTheme().btnLineHeight,

                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            };

            return _lodash2.default.merge(mergedStyle, btnType, this.props.textStyle);
        }
    }, {
        key: 'getIconProps',
        value: function getIconProps(icon) {

            var defaultStyle = {
                color: this.props.bordered && this.props.primary ? this.getTheme().btnPrimaryBg : this.props.bordered && this.props.success ? this.getTheme().btnSuccessBg : this.props.bordered && this.props.danger ? this.getTheme().btnDangerBg : this.props.bordered && this.props.warning ? this.getTheme().btnWarningBg : this.props.bordered && this.props.info ? this.getTheme().btnInfoBg : this.props.bordered ? this.getTheme().btnPrimaryBg : this.props.color ? this.props.color : this.props.header ? this.getTheme().toolbarTextColor : this.props.transparent ? this.getContextForegroundColor() : this.getTheme().inverseTextColor,

                fontSize: this.props.large ? this.getTheme().iconSizeLarge : this.props.small ? this.getTheme().iconSizeSmall : this.props.inputButton ? this.getTheme().toolbarIconSize : this.getTheme().iconFontSize - 5,
                lineHeight: this.props.large ? 52 : this.props.small || this.props.inputButton ? 22 : this.getTheme().iconLineHeight - 9
            };

            var defaultProps = {
                style: defaultStyle
            };

            return (0, _computeProps2.default)(icon.props, defaultProps);
        }
    }, {
        key: 'iconPresent',
        value: function iconPresent() {
            var iconComponentPresent = false;
            _react2.default.Children.forEach(this.props.children, function (child) {
                if (child.type == _Icon2.default) iconComponentPresent = true;
            });
            return iconComponentPresent;
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            if (typeof this.props.children == 'string') {
                return _react2.default.createElement(
                    _Text2.default,
                    { style: _extends({}, this.getTextStyle(), { width: '100%', textAlign: 'center' }) },
                    _platform2.default.OS === 'ios' ? this.props.children : this.props.children.toUpperCase()
                );
            } else if (this.props.children.type == _Icon2.default) {
                return _react2.default.cloneElement(this.props.children, this.getIconProps(this.props.children));
            } else if (Array.isArray(this.props.children)) {
                var newChildren = [];

                var childrenArray = _react2.default.Children.toArray(this.props.children);

                var iconElement = [];
                iconElement = _lodash2.default.remove(childrenArray, function (item) {
                    if (item.type == _Icon2.default) {
                        return true;
                    }
                });
                if (this.props.iconRight) {
                    newChildren.push(_react2.default.createElement(
                        _Text2.default,
                        { key: 'label', style: this.getTextStyle() },
                        _platform2.default.OS === 'ios' ? childrenArray[0] : childrenArray[0].toUpperCase()
                    ));
                    newChildren.push(_react2.default.createElement(
                        _Text2.default,
                        { key: 'icon' },
                        _react2.default.cloneElement(iconElement[0], this.getIconProps(iconElement[0]))
                    ));
                } else if (this.props.iconLeft || iconElement) {
                    newChildren.push(_react2.default.createElement(
                        _Text2.default,
                        { key: 'icon' },
                        _react2.default.cloneElement(iconElement[0], this.getIconProps(iconElement[0]))
                    ));
                    newChildren.push(_react2.default.createElement(
                        _Text2.default,
                        { key: 'label', style: this.getTextStyle() },
                        _platform2.default.OS === 'ios' ? childrenArray[0] : childrenArray[0].toUpperCase()
                    ));
                }

                return newChildren;
            } else return _react2.default.cloneElement(this.props.children);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactNativeWebExtended.TouchableOpacity,
                this.prepareRootProps(),
                this.renderChildren()
            );
        }
    }]);

    return Button;
}(_NativeBaseComponent3.default);

exports.default = Button;