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

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _platform = require('../../Utils/platform');

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckBox = function (_NativeBaseComponent) {
    _inherits(CheckBox, _NativeBaseComponent);

    function CheckBox() {
        _classCallCheck(this, CheckBox);

        return _possibleConstructorReturn(this, (CheckBox.__proto__ || Object.getPrototypeOf(CheckBox)).apply(this, arguments));
    }

    _createClass(CheckBox, [{
        key: 'getInitialStyle',
        value: function getInitialStyle() {
            return {
                checkbox: {
                    borderRadius: _platform2.default.OS === 'ios' ? 13 : 2,
                    overflow: 'hidden',
                    width: this.getTheme().checkboxSize,
                    height: this.getTheme().checkboxSize,
                    borderWidth: _platform2.default.OS === 'ios' ? 1 : 2,
                    paddingLeft: _platform2.default.OS === 'ios' ? 0 : 0,
                    paddingBottom: _platform2.default.OS === 'ios' ? 0 : 0,
                    borderColor: this.getTheme().checkboxBgColor,
                    backgroundColor: this.props.checked ? this.getTheme().checkboxBgColor : 'transparent'
                }
            };
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactNativeWebExtended.View,
                { style: this.getInitialStyle().checkbox },
                _react2.default.createElement(_Icon2.default, { name: 'checkmark',
                    style: {
                        color: this.props.checked ? this.getTheme().checkboxTickColor : 'transparent',
                        marginLeft: _platform2.default.OS === 'ios' ? -4 : -5,
                        marginTop: _platform2.default.OS === 'ios' ? 2 : 0
                    },
                    size: _platform2.default.OS === 'ios' ? this.getTheme().checkboxSize / 0.8 : this.getTheme().checkboxSize / 0.8 })
            );
        }
    }]);

    return CheckBox;
}(_NativeBaseComponent3.default);

exports.default = CheckBox;