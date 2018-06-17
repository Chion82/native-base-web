'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var _NativeBaseComponent2 = require('../Base/NativeBaseComponent');

var _NativeBaseComponent3 = _interopRequireDefault(_NativeBaseComponent2);

var _computeProps = require('../../Utils/computeProps');

var _computeProps2 = _interopRequireDefault(_computeProps);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ThumbnailNB = function (_NativeBaseComponent) {
    _inherits(ThumbnailNB, _NativeBaseComponent);

    function ThumbnailNB() {
        _classCallCheck(this, ThumbnailNB);

        return _possibleConstructorReturn(this, (ThumbnailNB.__proto__ || Object.getPrototypeOf(ThumbnailNB)).apply(this, arguments));
    }

    _createClass(ThumbnailNB, [{
        key: 'getInitialStyle',
        value: function getInitialStyle() {
            return {
                thumbnail: {
                    borderRadius: this.props.size ? this.props.size / 2 : 15,
                    width: this.props.size ? this.props.size : 30,
                    height: this.props.size ? this.props.size : 30,
                    resizeMode: this.props.contain ? 'contain' : undefined
                }
            };
        }
    }, {
        key: 'prepareRootProps',
        value: function prepareRootProps() {
            var thumbnailStyle = {};
            if (this.props.circular) {
                thumbnailStyle.width = this.props.size;
                thumbnailStyle.height = this.props.size;
                thumbnailStyle.borderRadius = this.props.size / 2;
            } else if (this.props.square) {
                thumbnailStyle.width = this.props.size;
                thumbnailStyle.height = this.props.size;
                thumbnailStyle.borderRadius = 0;
            }

            var defaultProps = {
                style: _lodash2.default.merge(this.getInitialStyle().thumbnail, thumbnailStyle)
            };

            return (0, _computeProps2.default)(this.props, defaultProps);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_reactNative.Image, this.prepareRootProps());
        }
    }]);

    return ThumbnailNB;
}(_NativeBaseComponent3.default);

exports.default = ThumbnailNB;