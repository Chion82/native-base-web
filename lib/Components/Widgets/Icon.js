'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _NativeBaseComponent2 = require('../Base/NativeBaseComponent');

var _NativeBaseComponent3 = _interopRequireDefault(_NativeBaseComponent2);

var _computeProps = require('../../Utils/computeProps');

var _computeProps2 = _interopRequireDefault(_computeProps);

var _TabBarItem = require('./TabBarItem');

var _TabBarItem2 = _interopRequireDefault(_TabBarItem);

var _light = require('../Themes/light');

var _light2 = _interopRequireDefault(_light);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconNB = function (_NativeBaseComponent) {
    _inherits(IconNB, _NativeBaseComponent);

    function IconNB() {
        _classCallCheck(this, IconNB);

        return _possibleConstructorReturn(this, (IconNB.__proto__ || Object.getPrototypeOf(IconNB)).apply(this, arguments));
    }

    _createClass(IconNB, [{
        key: 'setIconFamily',
        value: function setIconFamily(family) {
            switch (family) {
                // case 'Entypo':
                //     this.Icon = Entypo;
                //     break;
                case 'FontAwesome':
                    this.Icon = require('react-icons/lib/fa/' + this.props.name);
                    break;
                // case 'Foundation':
                //     this.Icon = Foundation;
                //     break;
                case 'MaterialIcons':
                    this.Icon = require('react-icons/lib/md/' + this.props.name);
                    break;
                // case 'Octicons':
                //     this.Icon = Octicons;
                //     break;
                // case 'Zocial':
                //     this.Icon = Zocial;
                //     break;
                default:
                case 'Ionicons':
                    this.Icon = require('react-icons/lib/io/' + this.props.name.replace(/^md-/, 'android-'));
                    break;
            }
        }
    }, {
        key: 'getInitialStyle',
        value: function getInitialStyle() {
            return {
                icon: {
                    fontSize: this.getTheme().iconFontSize,
                    color: this.props.color || this.getContextForegroundColor()
                }
            };
        }
    }, {
        key: 'prepareRootProps',
        value: function prepareRootProps() {
            var defaultProps = {
                style: this.getInitialStyle().icon
            };

            return (0, _computeProps2.default)(this.props, defaultProps);
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.family) {
                this.setIconFamily(this.props.family);
            } else {
                this.setIconFamily(_light2.default.iconFamily);
            }
            return _react2.default.createElement(this.Icon, this.prepareRootProps());
        }
    }]);

    return IconNB;
}(_NativeBaseComponent3.default);

IconNB.TabBarItem = _TabBarItem2.default;
exports.default = IconNB;