'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _platform = require('../../Utils/platform');

var _platform2 = _interopRequireDefault(_platform);

var _NativeBaseComponent2 = require('../Base/NativeBaseComponent');

var _NativeBaseComponent3 = _interopRequireDefault(_NativeBaseComponent2);

var _computeProps = require('../../Utils/computeProps');

var _computeProps2 = _interopRequireDefault(_computeProps);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _View = require('./View');

var _View2 = _interopRequireDefault(_View);

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

var _InputGroup = require('./InputGroup');

var _InputGroup2 = _interopRequireDefault(_InputGroup);

var _Subtitle = require('./Subtitle');

var _Subtitle2 = _interopRequireDefault(_Subtitle);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_NativeBaseComponent) {
    _inherits(Header, _NativeBaseComponent);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'getInitialStyle',
        value: function getInitialStyle() {
            return {
                navbar: {
                    backgroundColor: this.getTheme().toolbarDefaultBg,
                    justifyContent: !Array.isArray(this.props.children) ? 'center' : 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 15,
                    paddingTop: _platform2.default.OS === 'ios' ? 0 : 0,
                    //shadowColor: '#000',
                    //shadowOffset: {width: 0, height: 2},
                    //shadowOpacity: 0.1,
                    //shadowRadius: 1.5,
                    height: this.getTheme().toolbarHeight,
                    //elevation: 3,
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    zIndex: 99
                },
                iosToolbarSearch: {
                    backgroundColor: this.getTheme().toolbarInputColor,
                    borderRadius: this.props.rounded ? 25 : 2,
                    height: 30,
                    borderColor: 'transparent',
                    flex: 1
                },
                androidToolbarSearch: {
                    backgroundColor: '#fff',
                    borderRadius: 2,
                    borderColor: 'transparent',
                    //elevation: 2,
                    flex: 1
                },
                toolbarButton: {
                    paddingHorizontal: 15
                }
            };
        }
    }, {
        key: 'prepareRootProps',
        value: function prepareRootProps() {

            var defaultProps = {
                style: this.getInitialStyle().navbar
            };

            return (0, _computeProps2.default)(this.props, defaultProps);
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            if (!Array.isArray(this.props.children)) {
                return this.props.children;
            } else if (Array.isArray(this.props.children)) {
                var newChildren = [];
                var childrenArray = _react2.default.Children.toArray(this.props.children);

                var buttons = [];
                buttons = _lodash2.default.remove(childrenArray, function (item) {
                    if (item.type == _Button2.default) {
                        return true;
                    }
                });

                var title = [];
                title = _lodash2.default.remove(childrenArray, function (item) {
                    if (item.type == _Title2.default) {
                        return true;
                    }
                });

                var subtitle = [];
                subtitle = _lodash2.default.remove(childrenArray, function (item) {
                    if (item.type == _Subtitle2.default) {
                        return true;
                    }
                });

                var input = [];
                input = _lodash2.default.remove(childrenArray, function (item) {
                    if (item.type == _InputGroup2.default) {
                        return true;
                    }
                });

                if (this.props.searchBar) {
                    if (_platform2.default.OS === 'ios') {
                        newChildren.push(_react2.default.createElement(
                            _View2.default,
                            { key: 'search', style: { flex: 1, alignSelf: 'center', justifyContent: 'flex-start', flexDirection: 'row', marginLeft: -7 } },
                            _react2.default.cloneElement(input[0], { style: this.getInitialStyle().iosToolbarSearch, toolbar: true, key: 'inp' })
                        ));
                        newChildren.push(_react2.default.createElement(
                            _View2.default,
                            { key: 'searchBtn', style: { alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginRight: -14 } },
                            _react2.default.cloneElement(buttons[0], { color: this.getTheme().iosToolbarBtnColor, style: this.getInitialStyle().toolbarButton })
                        ));
                    } else {
                        newChildren.push(_react2.default.createElement(
                            _View2.default,
                            { key: 'search', style: { flex: 1, alignSelf: 'center', justifyContent: 'flex-start', flexDirection: 'row', marginLeft: -8, marginRight: -8 } },
                            _react2.default.cloneElement(input[0], { style: this.getInitialStyle().androidToolbarSearch, atoolbar: true })
                        ));
                    }
                } else {
                    if (_platform2.default.OS === 'ios') {
                        newChildren.push(_react2.default.createElement(
                            _View2.default,
                            { key: 'title', style: { position: 'absolute', left: 0, right: 0, top: 2, bottom: 0, alignSelf: 'center', justifyContent: 'center' } },
                            [title[0], subtitle[0]]
                        ));
                        newChildren.push(_react2.default.createElement(
                            _View2.default,
                            { key: 'btn1', style: { alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', marginLeft: -14 } },
                            _react2.default.cloneElement(buttons[0], { color: this.getTheme().iosToolbarBtnColor, style: this.getInitialStyle().toolbarButton })
                        ));
                        if (buttons.length > 1) {
                            for (var i = 1; i < buttons.length; i++) {
                                newChildren.push(_react2.default.createElement(
                                    _View2.default,
                                    { key: 'btn' + (i + 1), style: { alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', marginRight: -14 } },
                                    _react2.default.cloneElement(buttons[i], { color: this.getTheme().iosToolbarBtnColor, style: this.getInitialStyle().toolbarButton })
                                ));
                            }
                        } else {
                            newChildren.push(_react2.default.createElement(
                                _Button2.default,
                                { key: 'fakeBtn', transparent: true, textStyle: { color: 'transparent' } },
                                'aa'
                            ));
                        }
                    } else {
                        newChildren.push(_react2.default.createElement(
                            _View2.default,
                            { key: 'btn1', style: { alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', marginLeft: -10, marginRight: 12 } },
                            _react2.default.cloneElement(buttons[0], { style: this.getInitialStyle().toolbarButton, header: true, textStyle: { color: this.getTheme().toolbarTextColor } })
                        ));
                        newChildren.push(_react2.default.createElement(
                            _View2.default,
                            { key: 'title', style: { flex: 3, alignSelf: 'stretch', justifyContent: 'center' } },
                            [title[0]]
                        ));
                        for (var _i = 1; _i < buttons.length; _i++) {
                            newChildren.push(_react2.default.createElement(
                                _View2.default,
                                { key: 'btn' + (_i + 1), style: { alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', marginRight: -7 } },
                                _react2.default.cloneElement(buttons[_i], { style: this.getInitialStyle().toolbarButton, header: true, textStyle: { color: this.getTheme().toolbarTextColor } })
                            ));
                        }
                    }
                }
                return newChildren;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _View2.default,
                this.prepareRootProps(),
                this.renderChildren()
            );
        }
    }]);

    return Header;
}(_NativeBaseComponent3.default);

exports.default = Header;