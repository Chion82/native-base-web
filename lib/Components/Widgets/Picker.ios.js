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

var _computeProps = require('../../Utils/computeProps');

var _computeProps2 = _interopRequireDefault(_computeProps);

var _View = require('./View');

var _View2 = _interopRequireDefault(_View);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _List = require('./List');

var _List2 = _interopRequireDefault(_List);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Container = require('./Container');

var _Container2 = _interopRequireDefault(_Container);

var _Content = require('./Content');

var _Content2 = _interopRequireDefault(_Content);

var _ListItem = require('./ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PickerNB = function (_NativeBaseComponent) {
    _inherits(PickerNB, _NativeBaseComponent);

    function PickerNB(props) {
        _classCallCheck(this, PickerNB);

        var _this = _possibleConstructorReturn(this, (PickerNB.__proto__ || Object.getPrototypeOf(PickerNB)).call(this, props));

        _this.state = {
            modalVisible: false,
            current: _this.getSelected().props.label
        };
        return _this;
    }

    _createClass(PickerNB, [{
        key: 'getInitialStyle',
        value: function getInitialStyle() {
            return {
                picker: {
                    // alignItems: 'flex-end'
                },
                pickerItem: {}
            };
        }
    }, {
        key: '_setModalVisible',
        value: function _setModalVisible(visible) {
            this.setState({ modalVisible: visible });
        }
    }, {
        key: 'prepareRootProps',
        value: function prepareRootProps() {

            var defaultProps = {
                style: this.getInitialStyle().picker,
                itemStyle: this.getInitialStyle().pickerItem
            };

            return (0, _computeProps2.default)(this.props, defaultProps);
        }
    }, {
        key: 'getSelected',
        value: function getSelected() {
            var _this2 = this;

            var selected = _lodash2.default.find(this.props.children, function (o) {
                return o.props.value == _this2.props.selectedValue;
            });
            return selected;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                _View2.default,
                null,
                _react2.default.createElement(
                    _Button2.default,
                    { transparent: true, onPress: function onPress() {
                            _this3._setModalVisible(true);
                        } },
                    this.state.current
                ),
                _react2.default.createElement(
                    _reactNative.Modal,
                    { animationType: 'slide',
                        transparent: false,
                        visible: this.state.modalVisible,
                        onRequestClose: function onRequestClose() {
                            _this3._setModalVisible(false);
                        }
                    },
                    _react2.default.createElement(
                        _Container2.default,
                        null,
                        _react2.default.createElement(
                            _Header2.default,
                            null,
                            _react2.default.createElement(
                                _Button2.default,
                                { transparent: true, onPress: function onPress() {
                                        _this3._setModalVisible(false);
                                    } },
                                'Back'
                            ),
                            _react2.default.createElement(
                                _Title2.default,
                                null,
                                this.props.iosHeader
                            ),
                            _react2.default.createElement(
                                _Button2.default,
                                { transparent: true, textStyle: { color: 'transparent' } },
                                'Back'
                            )
                        ),
                        _react2.default.createElement(
                            _Content2.default,
                            null,
                            _react2.default.createElement(_List2.default, { dataArray: this.props.children,
                                renderRow: function renderRow(child) {
                                    return _react2.default.createElement(
                                        _ListItem2.default,
                                        { style: { paddingVertical: 10 }, iconRight: true, button: true, onPress: function onPress() {
                                                _this3._setModalVisible(false);_this3.props.onValueChange(child.props.value);_this3.setState({ current: child.props.label });
                                            } },
                                        _react2.default.createElement(
                                            _Text2.default,
                                            null,
                                            child.props.label
                                        ),
                                        child.props.value === _this3.props.selectedValue ? _react2.default.createElement(_Icon2.default, { name: 'ios-checkmark-outline' }) : _react2.default.createElement(_Icon2.default, { name: 'ios-checkmark-outline', style: { color: 'transparent' } })
                                    );
                                } })
                        )
                    )
                )
            );
        }
    }]);

    return PickerNB;
}(_NativeBaseComponent3.default);

exports.default = PickerNB;


PickerNB.Item = _react2.default.createClass({
    displayName: 'Item',


    render: function render() {
        return _react2.default.createElement(_reactNative.Picker.Item, this.props());
    }
});