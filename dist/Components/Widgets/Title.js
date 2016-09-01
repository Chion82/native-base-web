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

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _View = require('./View');

var _View2 = _interopRequireDefault(_View);

var _computeProps = require('../../Utils/computeProps');

var _computeProps2 = _interopRequireDefault(_computeProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = function (_NativeBaseComponent) {
	_inherits(Title, _NativeBaseComponent);

	function Title() {
		_classCallCheck(this, Title);

		return _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).apply(this, arguments));
	}

	_createClass(Title, [{
		key: 'prepareRootProps',
		value: function prepareRootProps() {

			var type = {
				color: this.getTheme().toolbarTextColor,
				fontSize: this.getTheme().titleFontSize,
				fontFamily: this.getTheme().btnFontFamily,
				fontWeight: _reactNativeWebExtended.Platform.OS === 'ios' ? '500' : undefined,
				alignSelf: _reactNativeWebExtended.Platform.OS === 'ios' ? 'center' : 'flex-start'
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
				_View2.default,
				{ style: { justifyContent: 'center' } },
				_react2.default.createElement(
					_Text2.default,
					this.prepareRootProps(),
					this.props.children
				)
			);
		}
	}]);

	return Title;
}(_NativeBaseComponent3.default);

exports.default = Title;