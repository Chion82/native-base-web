'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNativeWebExtended = require('react-native-web-extended');

var _NativeBaseComponent2 = require('../Base/NativeBaseComponent');

var _NativeBaseComponent3 = _interopRequireDefault(_NativeBaseComponent2);

var _computeProps = require('../../Utils/computeProps');

var _computeProps2 = _interopRequireDefault(_computeProps);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BadgeNB = function (_NativeBaseComponent) {
    _inherits(BadgeNB, _NativeBaseComponent);

    function BadgeNB() {
        _classCallCheck(this, BadgeNB);

        return _possibleConstructorReturn(this, (BadgeNB.__proto__ || Object.getPrototypeOf(BadgeNB)).apply(this, arguments));
    }

    _createClass(BadgeNB, [{
        key: 'prepareRootProps',
        value: function prepareRootProps() {

            var type = {

                backgroundColor: this.props.primary ? this.getTheme().brandPrimary : this.props.success ? this.getTheme().brandSuccess : this.props.info ? this.getTheme().brandInfo : this.props.warning ? this.getTheme().brandWarning : this.props.danger ? this.getTheme().brandDanger : this.getTheme().badgeBg,
                padding: 3,
                paddingHorizontal: 10,
                alignSelf: 'flex-start',
                borderRadius: 13.5,
                height: 27

            };

            var defaultProps = {
                style: type
            };

            return (0, _computeProps2.default)(this.props, defaultProps);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactNativeWebExtended.View,
                this.prepareRootProps(),
                _react2.default.createElement(
                    _Text2.default,
                    { style: { color: this.props.textStyle && this.props.textStyle.color ? this.props.textStyle.color : this.getTheme().badgeColor,
                            fontSize: this.getTheme().fontSizeBase,
                            lineHeight: this.getTheme().lineHeight - 1,
                            textAlign: 'center' } },
                    this.props.children
                )
            );
        }
    }]);

    return BadgeNB;
}(_NativeBaseComponent3.default);

exports.default = BadgeNB;