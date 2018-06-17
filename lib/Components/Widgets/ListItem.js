'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

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

var _View = require('./View');

var _View2 = _interopRequireDefault(_View);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Badge = require('./Badge');

var _Badge2 = _interopRequireDefault(_Badge);

var _Thumbnail = require('./Thumbnail');

var _Thumbnail2 = _interopRequireDefault(_Thumbnail);

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Radio = require('./Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _InputGroup = require('./InputGroup');

var _InputGroup2 = _interopRequireDefault(_InputGroup);

var _TouchableOpacityScrollable = require('./TouchableOpacityScrollable');

var _TouchableOpacityScrollable2 = _interopRequireDefault(_TouchableOpacityScrollable);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItemNB = function (_NativeBaseComponent) {
    _inherits(ListItemNB, _NativeBaseComponent);

    function ListItemNB() {
        _classCallCheck(this, ListItemNB);

        return _possibleConstructorReturn(this, (ListItemNB.__proto__ || Object.getPrototypeOf(ListItemNB)).apply(this, arguments));
    }

    _createClass(ListItemNB, [{
        key: 'getInitialStyle',
        value: function getInitialStyle() {

            return {
                listItem: {
                    borderBottomWidth: this.getTheme().borderWidth,
                    marginLeft: 15,
                    padding: this.inputPresent() ? 0 : this.getTheme().listItemPadding,
                    paddingLeft: 2,
                    justifyContent: this.props.iconRight && !this.props.iconLeft || this.props.iconRight && this.props.iconLeft ? 'space-between' : 'flex-start',
                    flexDirection: this.stackedPresent() ? 'column' : 'row',
                    alignItems: 'center',
                    borderColor: this.props.hideBorder ? 'transparent' : this.inputPresent() && !this.inlinePresent() ? 'transparent' : this.getTheme().listBorderColor
                },
                listItemDivider: {
                    borderBottomWidth: this.getTheme().borderWidth,
                    padding: this.getTheme().listItemPadding,
                    backgroundColor: this.getTheme().listDividerBg,
                    justifyContent: this.buttonPresent() ? 'space-between' : 'flex-start',
                    flexDirection: 'row',
                    borderColor: this.getTheme().listBorderColor
                },
                itemText: {
                    fontSize: 16,
                    marginLeft: this.props.iconLeft ? 10 : 0,
                    color: this.getContextForegroundColor()
                },
                dividerItemText: {
                    fontSize: 16,
                    fontWeight: '500'
                },
                itemIcon: {
                    fontSize: this.getTheme().iconFontSize,
                    color: this.getContextForegroundColor(),
                    lineHeight: _platform2.default.OS === 'ios' ? 34 : undefined
                },
                itemNote: {
                    fontSize: this.getTheme().listNoteSize,
                    color: this.getTheme().listNoteColor,
                    alignSelf: 'center',
                    fontWeight: '100',
                    flex: 1,
                    textAlign: 'right'
                },
                itemSubNote: {
                    fontSize: this.getTheme().listNoteSize,
                    color: this.getTheme().listNoteColor,
                    lineHeight: 16
                },
                thumbnail: {
                    alignSelf: 'center'
                },
                fullImage: {
                    width: 300,
                    height: 300
                },
                itemButton: {}

            };
        }
    }, {
        key: 'getRightStyle',
        value: function getRightStyle() {
            return {
                right: {
                    flex: 1,
                    paddingLeft: 10

                },
                right2: {
                    flex: 1,
                    flexDirection: 'row',
                    paddingLeft: 10,
                    alignItems: 'center',
                    justifyContent: 'space-between'

                },
                right3: {
                    flex: 1,
                    flexDirection: 'column',
                    paddingLeft: 10,
                    alignSelf: 'flex-start'

                }
            };
        }
    }, {
        key: 'thumbnailPresent',
        value: function thumbnailPresent() {
            var thumbnailComponentPresent = false;
            _react2.default.Children.forEach(this.props.children, function (child) {
                if (child.type == _Thumbnail2.default) thumbnailComponentPresent = true;
            });

            return thumbnailComponentPresent;
        }
    }, {
        key: 'checkBoxPresent',
        value: function checkBoxPresent() {
            var checkBoxComponentPresent = false;
            _react2.default.Children.forEach(this.props.children, function (child) {
                if (child.type == _Checkbox2.default) checkBoxComponentPresent = true;
            });

            return checkBoxComponentPresent;
        }
    }, {
        key: 'radioPresent',
        value: function radioPresent() {
            var radioComponentPresent = false;
            _react2.default.Children.forEach(this.props.children, function (child) {
                if (child.type == _Radio2.default) radioComponentPresent = true;
            });

            return radioComponentPresent;
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
        key: 'badgePresent',
        value: function badgePresent() {
            var badgeComponentPresent = false;
            _react2.default.Children.forEach(this.props.children, function (child) {
                if (child.type == _Badge2.default) badgeComponentPresent = true;
            });

            return badgeComponentPresent;
        }
    }, {
        key: 'inputPresent',
        value: function inputPresent() {
            var inputComponentPresent = false;
            _react2.default.Children.forEach(this.props.children, function (child) {
                if (child.type == _InputGroup2.default) inputComponentPresent = true;
            });
            return inputComponentPresent;
        }
    }, {
        key: 'buttonPresent',
        value: function buttonPresent() {
            var buttonComponentPresent = false;
            _react2.default.Children.forEach(this.props.children, function (child) {
                if (child.type == _Button2.default) buttonComponentPresent = true;
            });

            return buttonComponentPresent;
        }
    }, {
        key: 'getChildProps',
        value: function getChildProps(child) {
            var defaultProps = {};

            if (child.type == _reactNative.Image && !Array.isArray(this.props.children)) {
                defaultProps = {
                    resizeMode: 'stretch',
                    style: this.getInitialStyle().fullImage
                };
            } else if (child.type == _Button2.default) {
                defaultProps = {
                    small: true,
                    style: this.getInitialStyle().itemButton
                };
            } else if (child.type == _InputGroup2.default) {

                defaultProps = {
                    style: {
                        borderColor: this.props.children.props.success ? this.getTheme().inputSuccessBorderColor : this.props.children.props.error ? this.getTheme().inputErrorBorderColor : this.getTheme().listBorderColor
                    }
                    //foregroundColor: this.getContextForegroundColor()
                };
            } else if (child.type == _Text2.default) {
                if (this.props.itemDivider) {
                    defaultProps = {
                        style: this.getInitialStyle().dividerItemText
                    };
                } else {
                    if (child.props.note && this.thumbnailPresent()) {
                        defaultProps = {
                            style: this.getInitialStyle().itemSubNote
                        };
                    } else if (child.props.note) {
                        defaultProps = {
                            style: this.getInitialStyle().itemNote
                        };
                    } else {
                        defaultProps = {
                            style: this.getInitialStyle().itemText
                        };
                    }
                }
            } else if (child.type == _Icon2.default) {
                defaultProps = {
                    style: this.getInitialStyle().itemIcon
                };
            } else if (child.type == _Thumbnail2.default) {
                defaultProps = {
                    style: this.getInitialStyle().thumbnail
                };
            } else {
                defaultProps = {
                    //foregroundColor: this.getContextForegroundColor()
                };
            }
            return (0, _computeProps2.default)(child.props, defaultProps);
        }
    }, {
        key: 'prepareRootProps',
        value: function prepareRootProps() {
            var defaultProps = {};

            if (this.props.itemDivider) {
                defaultProps = {
                    style: this.getInitialStyle().listItemDivider
                };
            } else {
                defaultProps = {
                    style: this.getInitialStyle().listItem
                };
            }

            return (0, _computeProps2.default)(this.props, defaultProps);
        }
    }, {
        key: 'notePresent',
        value: function notePresent() {

            var notePresent = false;
            _react2.default.Children.forEach(this.props.children, function (child) {
                if (child.type == _Text2.default && child.props.note) notePresent = true;
            });
            return notePresent;
        }
    }, {
        key: 'insetPresent',
        value: function insetPresent() {

            var insetPresent = false;
            _react2.default.Children.forEach(this.props.children, function (child) {
                if (child.type == _InputGroup2.default && child.props.inset) insetPresent = true;
            });

            return insetPresent;
        }
    }, {
        key: 'inlinePresent',
        value: function inlinePresent() {
            var inlineComponentPresent = false;
            if (this.inputPresent()) {
                if (this.props.children.props.children.props && this.props.children.props.children.props.inlineLabel) {
                    inlineComponentPresent = true;
                } else inlineComponentPresent = false;
            }
            return inlineComponentPresent;
        }
    }, {
        key: 'stackedPresent',
        value: function stackedPresent() {
            var stackedComponentPresent = false;
            if (this.inputPresent()) {
                if (this.props.children.props.children.props && this.props.children.props.children.props.stackedLabel) {
                    stackedComponentPresent = true;
                } else stackedComponentPresent = false;
            }

            return stackedComponentPresent;
        }
    }, {
        key: 'squareThumbs',
        value: function squareThumbs() {
            var squareThumbs = false;
            if (this.thumbnailPresent()) {
                _react2.default.Children.forEach(this.props.children, function (child) {
                    if (child.props.square) squareThumbs = true;
                });
            }
            return squareThumbs;
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var _this2 = this;

            var newChildren = [];
            if (!Array.isArray(this.props.children) && !this.inlinePresent() && !this.stackedPresent() && !this.insetPresent()) {
                newChildren.push(_react2.default.createElement(
                    _View2.default,
                    { key: 'listItem', style: { alignSelf: 'stretch', flex: 1 } },
                    _react2.default.cloneElement(this.props.children, this.getChildProps(this.props.children))
                ));
            } else {
                var childrenArray = _react2.default.Children.toArray(this.props.children);
                var iconElement = [];

                if (this.props.iconLeft && !this.props.iconRight) {

                    iconElement = _lodash2.default.remove(childrenArray, function (item) {
                        if (item.type == _Icon2.default) {
                            return true;
                        }
                    });
                    newChildren.push(_react2.default.cloneElement(iconElement[0], _extends({}, this.getChildProps(iconElement[0]), { key: 'listItem0' })));
                    newChildren.push(_react2.default.createElement(
                        _View2.default,
                        { key: 'listItem1', style: { flexDirection: 'row', justifyContent: 'space-between', flex: 1 } },
                        childrenArray.map(function (child, i) {
                            return _react2.default.cloneElement(child, _extends({}, _this2.getChildProps(child), { key: i }));
                        })
                    ));
                } else if (this.props.iconRight && !this.props.iconLeft) {

                    iconElement = _lodash2.default.remove(childrenArray, function (item) {
                        if (item.type == _Icon2.default) {
                            return true;
                        }
                    });

                    newChildren.push(_react2.default.createElement(
                        _View2.default,
                        { key: 'listItem0' },
                        childrenArray.map(function (child, i) {
                            return _react2.default.cloneElement(child, _extends({}, _this2.getChildProps(child), { key: i }));
                        })
                    ));
                    newChildren.push(_react2.default.cloneElement(iconElement[0], _extends({}, this.getChildProps(iconElement[0]), { key: 'listItem1' })));
                } else if (this.badgePresent()) {

                    var badgeElement = _lodash2.default.remove(childrenArray, function (item) {
                        if (item.type == _Badge2.default) {
                            return true;
                        }
                    });

                    newChildren.push(_react2.default.createElement(
                        _View2.default,
                        { key: 'listItem0' },
                        childrenArray.map(function (child, i) {
                            return _react2.default.cloneElement(child, _extends({}, _this2.getChildProps(child), { key: i }));
                        })
                    ));
                    newChildren.push(_react2.default.cloneElement(badgeElement[0], _extends({}, this.getChildProps(badgeElement[0]), { key: 'listItem1' })));
                } else if (this.props.iconRight && this.props.iconLeft) {

                    iconElement = _lodash2.default.filter(childrenArray, function (item) {
                        if (item.type == _Icon2.default) {
                            return true;
                        }
                    });

                    newChildren.push(_react2.default.createElement(
                        _View2.default,
                        { key: 'listItem0', style: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' } },
                        childrenArray.slice(0, 2).map(function (child, i) {
                            return _react2.default.cloneElement(child, _extends({}, _this2.getChildProps(child), { key: i }));
                        })
                    ));
                    newChildren.push(_react2.default.cloneElement(iconElement[1], _extends({}, this.getChildProps(iconElement[1]), { key: 'listItem1' })));
                } else if (this.thumbnailPresent()) {

                    iconElement = _lodash2.default.remove(childrenArray, function (item) {
                        if (item.type == _Thumbnail2.default) {
                            return true;
                        }
                    });
                    newChildren.push(_react2.default.cloneElement(iconElement[0], _extends({}, this.getChildProps(iconElement[0]), { key: 'listItem0' })));
                    newChildren.push(_react2.default.createElement(
                        _View2.default,
                        { key: 'listItem1', style: { flexDirection: 'column', paddingLeft: 15, alignSelf: this.squareThumbs() ? 'flex-start' : 'center', flex: 1 } },
                        childrenArray.map(function (child, i) {
                            return _react2.default.cloneElement(child, _extends({}, _this2.getChildProps(child), { key: i }));
                        })
                    ));
                } else if (this.checkBoxPresent()) {

                    iconElement = _lodash2.default.remove(childrenArray, function (item) {
                        if (item.type == _Checkbox2.default) {
                            return true;
                        }
                    });
                    newChildren.push(_react2.default.cloneElement(iconElement[0], this.getChildProps(iconElement[0])));
                    newChildren.push(_react2.default.createElement(
                        _View2.default,
                        { key: 'listItem1', style: { flexDirection: 'column', paddingLeft: 15, alignSelf: this.squareThumbs() ? 'flex-start' : 'center', flex: 1 } },
                        childrenArray.map(function (child) {
                            return _react2.default.cloneElement(child, _this2.getChildProps(child));
                        })
                    ));
                } else if (this.radioPresent()) {

                    iconElement = _lodash2.default.remove(childrenArray, function (item) {
                        if (item.type == _Radio2.default) {
                            return true;
                        }
                    });
                    newChildren.push(_react2.default.createElement(
                        _View2.default,
                        { key: 'listItem1', style: { flexDirection: 'column', alignSelf: this.squareThumbs() ? 'flex-start' : 'center', flex: 1 } },
                        childrenArray.map(function (child) {
                            return _react2.default.cloneElement(child, _this2.getChildProps(child));
                        })
                    ));
                    newChildren.push(_react2.default.cloneElement(iconElement[0], this.getChildProps(iconElement[0])));
                } else if (this.inputPresent() && !this.inlinePresent() && !this.stackedPresent() && !this.insetPresent()) {

                    newChildren.push(_react2.default.createElement(
                        _View2.default,
                        { key: 'listItem0', style: { flexDirection: 'column', alignSelf: 'center', flex: 1 } },
                        childrenArray.map(function (child, i) {
                            return _react2.default.cloneElement(child, _extends({}, _this2.getChildProps(child), { key: i }));
                        })
                    ));
                } else if (this.inlinePresent()) {

                    newChildren.push(_react2.default.createElement(
                        _View2.default,
                        { key: 'listItem0', style: { flexDirection: 'row', justifyContent: 'center', flex: 1, borderColor: this.getTheme().listBorderColor, alignItems: 'center', height: this.getTheme().inputHeightBase } },
                        _react2.default.createElement(
                            _Text2.default,
                            { style: { color: this.getTheme().inputColorPlaceholder } },
                            this.props.children.props.children.props.label
                        )
                    ));
                    newChildren.push(_react2.default.createElement(
                        _View2.default,
                        { key: 'listItem1', style: { flexDirection: 'column', alignSelf: 'center', flex: 2.2 } },
                        childrenArray.map(function (child, i) {
                            return _react2.default.cloneElement(child, _extends({}, _this2.getChildProps(child), { key: i, style: { borderWidth: 0 } }));
                        })
                    ));
                } else if (this.stackedPresent()) {

                    newChildren.push(_react2.default.createElement(
                        _View2.default,
                        { key: 'listItem0', style: { flexDirection: 'row', justifyContent: 'flex-start', alignSelf: 'stretch', alignItems: 'center', height: this.getTheme().inputHeightBase, paddingLeft: 10 } },
                        _react2.default.createElement(
                            _Text2.default,
                            { style: { color: this.getTheme().inputColorPlaceholder, textAlign: 'left', fontSize: 15 } },
                            this.props.children.props.children.props.label
                        )
                    ));
                    newChildren.push(_react2.default.createElement(
                        _View2.default,
                        { key: 'listItem1', style: { flexDirection: 'row', alignSelf: 'stretch', flex: 1, padding: 0 } },
                        childrenArray.map(function (child, i) {
                            return _react2.default.cloneElement(child, _extends({}, _this2.getChildProps(child), { key: i, style: { flex: 1 } }));
                        })
                    ));
                } else if (this.insetPresent()) {

                    newChildren.push(_react2.default.createElement(
                        _View2.default,
                        { key: 'listItem0', style: { flexDirection: 'row', alignSelf: 'stretch', flex: 1, padding: 0 } },
                        childrenArray.map(function (child, i) {
                            return _react2.default.cloneElement(child, _extends({}, _this2.getChildProps(child), { key: i }));
                        })
                    ));
                    newChildren.push(_react2.default.createElement(
                        _View2.default,
                        { key: 'listItem1', style: { flexDirection: 'row', alignSelf: 'stretch', flex: 1, padding: 0 } },
                        childrenArray.map(function (child, i) {
                            return _react2.default.cloneElement(child, _extends({}, _this2.getChildProps(child), { key: i }));
                        })
                    ));
                }
            }

            return newChildren;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            if (this.props.menuItem) {
                return _react2.default.createElement(
                    _View2.default,
                    { style: {
                            backgroundColor: this.isItemPressIn ? '#eee' : 'white'
                        } },
                    _react2.default.createElement(
                        _TouchableOpacityScrollable2.default,
                        _extends({}, this.prepareRootProps(), { activeOpacity: this.props.button ? 0.2 : 1,
                            onPressIn: function onPressIn() {
                                _this3.isItemPressIn = true;
                                _this3.forceUpdate();
                            },
                            onPressOut: function onPressOut() {
                                _this3.isItemPressIn = false;
                                _this3.forceUpdate();
                            } }),
                        this.renderChildren()
                    )
                );
            } else if (this.stackedPresent()) {
                return _react2.default.createElement(
                    _View2.default,
                    this.prepareRootProps(),
                    this.renderChildren()
                );
            } else {
                return _react2.default.createElement(
                    _TouchableOpacityScrollable2.default,
                    _extends({}, this.prepareRootProps(), { activeOpacity: this.props.button ? 0.2 : 1 }),
                    this.renderChildren()
                );
            }
        }
    }]);

    return ListItemNB;
}(_NativeBaseComponent3.default);

exports.default = ListItemNB;