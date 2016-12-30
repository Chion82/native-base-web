'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _NativeBaseComponent2 = require('../Base/NativeBaseComponent');

var _NativeBaseComponent3 = _interopRequireDefault(_NativeBaseComponent2);

var _platform = require('../../Utils/platform');

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Subtitle = function (_NativeBaseComponent) {
	_inherits(Subtitle, _NativeBaseComponent);

	function Subtitle() {
		_classCallCheck(this, Subtitle);

		return _possibleConstructorReturn(this, (Subtitle.__proto__ || Object.getPrototypeOf(Subtitle)).apply(this, arguments));
	}

	_createClass(Subtitle, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_reactNative.View,
				null,
				_react2.default.createElement(
					_reactNative.Text,
					{ style: { color: this.getTheme().subtitleColor, fontSize: this.getTheme().subTitleFontSize, alignSelf: _platform2.default.OS === 'ios' ? 'center' : 'flex-start' } },
					this.props.children
				)
			);
		}
	}]);

	return Subtitle;
}(_NativeBaseComponent3.default);

exports.default = Subtitle;