'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NativeBaseComponent2 = require('../Base/NativeBaseComponent');

var _NativeBaseComponent3 = _interopRequireDefault(_NativeBaseComponent2);

var _computeProps = require('../../Utils/computeProps');

var _computeProps2 = _interopRequireDefault(_computeProps);

var _reactNativeScrollableTabView = require('./../vendor/react-native-scrollable-tab-view');

var _reactNativeScrollableTabView2 = _interopRequireDefault(_reactNativeScrollableTabView);

var _View = require('./View');

var _View2 = _interopRequireDefault(_View);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabNB = function (_NativeBaseComponent) {
    _inherits(TabNB, _NativeBaseComponent);

    function TabNB() {
        _classCallCheck(this, TabNB);

        return _possibleConstructorReturn(this, (TabNB.__proto__ || Object.getPrototypeOf(TabNB)).apply(this, arguments));
    }

    _createClass(TabNB, [{
        key: 'getInitialStyle',
        value: function getInitialStyle() {
            return {
                tab: {
                    flex: 1
                }
            };
        }
    }, {
        key: 'prepareRootProps',
        value: function prepareRootProps() {

            var defaultProps = {
                style: this.getInitialStyle().tab
            };

            return (0, _computeProps2.default)(this.props, defaultProps);
        }
    }, {
        key: 'renderTabBarChildren',
        value: function renderTabBarChildren() {
            var children = [];
            _react2.default.Children.forEach(this.props.children, function (child, index) {
                var ChildType = child.type;
                var props = _lodash2.default.clone(child.props);
                var style = _lodash2.default.clone(child.props.style || {});
                if (props.style) delete props.style;

                style.width = Math.round(100 / this.props.children.length) + '%';

                children.push(_react2.default.createElement(
                    ChildType,
                    _extends({}, props, { style: style, key: index }),
                    child.props.children
                ));
            }.bind(this));
            return children;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _View2.default,
                { style: {
                        width: '100%',
                        overflowX: 'hidden'
                    } },
                _react2.default.createElement(
                    _reactNativeScrollableTabView2.default,
                    this.prepareRootProps(),
                    this.renderTabBarChildren()
                )
            );
        }
    }]);

    return TabNB;
}(_NativeBaseComponent3.default);

exports.default = TabNB;