'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NativeBaseComponent2 = require('../../Base/NativeBaseComponent');

var _NativeBaseComponent3 = _interopRequireDefault(_NativeBaseComponent2);

var _reactNativeWebExtended = require('react-native-web-extended');

var _DefaultTabBar = require('./DefaultTabBar');

var _DefaultTabBar2 = _interopRequireDefault(_DefaultTabBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var deviceWidth = _reactNativeWebExtended.Dimensions.get('window').width;

var ScrollableTabView = function (_NativeBaseComponent) {
  _inherits(ScrollableTabView, _NativeBaseComponent);

  function ScrollableTabView(props) {
    _classCallCheck(this, ScrollableTabView);

    var _this = _possibleConstructorReturn(this, (ScrollableTabView.__proto__ || Object.getPrototypeOf(ScrollableTabView)).call(this, props));

    var currentPage = _this.props.initialPage || 0;
    _this.state = {
      currentPage: currentPage,
      scrollValue: new _reactNativeWebExtended.Animated.Value(currentPage)
    };
    return _this;
  }

  _createClass(ScrollableTabView, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      //var release = (e, gestureState) => {
      //   var relativeGestureDistance = gestureState.dx / deviceWidth,
      //       lastPageIndex = this.props.children.length - 1,
      //       vx = gestureState.vx,
      //       newPage = this.state.currentPage;
      //
      //   if (relativeGestureDistance < -0.5 || (relativeGestureDistance < 0 && vx <= -0.5)) {
      //     newPage = newPage + 1;
      //   } else if (relativeGestureDistance > 0.5 || (relativeGestureDistance > 0 && vx >= 0.5)) {
      //     newPage = newPage - 1;
      //   }
      //
      //   this.props.hasTouch && this.props.hasTouch(false);
      //   this.goToPage(Math.max(0, Math.min(newPage, this.props.children.length - 1)));
      // }

      // this._panResponder = PanResponder.create({
      //   // Claim responder if it's a horizontal pan
      //   onMoveShouldSetPanResponder: (e, gestureState) => {
      //     if (Math.abs(gestureState.dx) > Math.abs(gestureState.dy)) {
      //       if ((gestureState.moveX <= this.props.edgeHitWidth ||
      //           gestureState.moveX >= deviceWidth - this.props.edgeHitWidth) &&
      //             this.props.locked !== true) {
      //         this.props.hasTouch && this.props.hasTouch(true);
      //         return true;
      //       }
      //     }
      //   },
      //
      //   // Touch is released, scroll to the one that you're closest to
      //   onPanResponderRelease: release,
      //   onPanResponderTerminate: release,
      //
      //   // Dragging, move the view with the touch
      //   onPanResponderMove: (e, gestureState) => {
      //     var dx = gestureState.dx;
      //     var lastPageIndex = this.props.children.length - 1;
      //
      //     // This is awkward because when we are scrolling we are offsetting the underlying view
      //     // to the left (-x)
      //     var offsetX = dx - (this.state.currentPage * deviceWidth);
      //     this.state.scrollValue.setValue(-1 * offsetX / deviceWidth);
      //   },
      // });
    }
  }, {
    key: 'goToPage',
    value: function goToPage(pageNumber) {
      this.props.onChangeTab && this.props.onChangeTab({
        i: pageNumber, ref: this.props.children[pageNumber]
      });

      this.setState({
        currentPage: pageNumber
      });

      _reactNativeWebExtended.Animated.spring(this.state.scrollValue, { toValue: pageNumber, friction: this.props.springFriction, tension: this.props.springTension }).start();
    }
  }, {
    key: 'renderTabBar',
    value: function renderTabBar(props) {
      if (this.props.renderTabBar === false) {
        return null;
      } else if (this.props.renderTabBar) {
        return _react2.default.cloneElement(this.props.renderTabBar(), props);
      } else {
        return _react2.default.createElement(_DefaultTabBar2.default, props);
      }
    }
  }, {
    key: 'render',
    value: function render() {

      deviceWidth = _reactNativeWebExtended.Dimensions.get('window').width;

      var sceneContainerStyle = {
        width: deviceWidth * this.props.children.length,
        flex: 1,
        flexDirection: 'row'
      };

      var translateX = this.state.scrollValue.interpolate({
        inputRange: [0, 1], outputRange: [0, -deviceWidth]
      });

      var tabBarProps = {
        goToPage: this.goToPage.bind(this),
        tabs: this.props.children.map(function (child) {
          return child.props.tabLabel;
        }),
        activeTab: this.state.currentPage,
        scrollValue: this.state.scrollValue
      };

      return _react2.default.createElement(
        _reactNativeWebExtended.View,
        { style: { flex: 1 } },
        this.props.tabBarPosition === 'top' ? this.renderTabBar(tabBarProps) : null,
        _react2.default.createElement(
          _reactNativeWebExtended.Animated.View,
          { style: [sceneContainerStyle, { transform: [{ translateX: translateX }] }] },
          this.props.children
        ),
        this.props.tabBarPosition === 'bottom' ? this.renderTabBar(tabBarProps) : null
      );
    }
  }]);

  return ScrollableTabView;
}(_NativeBaseComponent3.default);

ScrollableTabView.defaultProps = _extends({}, _NativeBaseComponent3.default.defaultProps, {
  tabBarPosition: 'top',
  edgeHitWidth: 30,
  springTension: 50,
  springFriction: 10
});
exports.default = ScrollableTabView;