'use strict';

var _reactNativeDrawer = require('./Components/vendor/react-native-drawer');

var _reactNativeDrawer2 = _interopRequireDefault(_reactNativeDrawer);

var _Header = require('./Components/Widgets/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Components/Widgets/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Title = require('./Components/Widgets/Title');

var _Title2 = _interopRequireDefault(_Title);

var _Container = require('./Components/Widgets/Container');

var _Container2 = _interopRequireDefault(_Container);

var _Content = require('./Components/Widgets/Content');

var _Content2 = _interopRequireDefault(_Content);

var _Button = require('./Components/Widgets/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Text = require('./Components/Widgets/Text');

var _Text2 = _interopRequireDefault(_Text);

var _Switch = require('./Components/Widgets/Switch');

var _Switch2 = _interopRequireDefault(_Switch);

var _Picker = require('./Components/Widgets/Picker');

var _Picker2 = _interopRequireDefault(_Picker);

var _List = require('./Components/Widgets/List');

var _List2 = _interopRequireDefault(_List);

var _ListItem = require('./Components/Widgets/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _CardItem = require('./Components/Widgets/CardItem');

var _CardItem2 = _interopRequireDefault(_CardItem);

var _CardSwiper = require('./Components/Widgets/CardSwiper');

var _CardSwiper2 = _interopRequireDefault(_CardSwiper);

var _DeckSwiper = require('./Components/Widgets/DeckSwiper');

var _DeckSwiper2 = _interopRequireDefault(_DeckSwiper);

var _H = require('./Components/Widgets/H1');

var _H2 = _interopRequireDefault(_H);

var _H3 = require('./Components/Widgets/H2');

var _H4 = _interopRequireDefault(_H3);

var _H5 = require('./Components/Widgets/H3');

var _H6 = _interopRequireDefault(_H5);

var _View = require('./Components/Widgets/View');

var _View2 = _interopRequireDefault(_View);

var _Input = require('./Components/Widgets/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Textarea = require('./Components/Widgets/Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

var _InputGroup = require('./Components/Widgets/InputGroup');

var _InputGroup2 = _interopRequireDefault(_InputGroup);

var _Icon = require('./Components/Widgets/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Thumbnail = require('./Components/Widgets/Thumbnail');

var _Thumbnail2 = _interopRequireDefault(_Thumbnail);

var _Checkbox = require('./Components/Widgets/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Radio = require('./Components/Widgets/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _Card = require('./Components/Widgets/Card');

var _Card2 = _interopRequireDefault(_Card);

var _Badge = require('./Components/Widgets/Badge');

var _Badge2 = _interopRequireDefault(_Badge);

var _Spinner = require('./Components/Widgets/Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _reactNativeEasyGrid = require('./Components/vendor/react-native-easy-grid');

var _Tabs = require('./Components/Widgets/Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _TouchableOpacityScrollable = require('./Components/Widgets/TouchableOpacityScrollable');

var _TouchableOpacityScrollable2 = _interopRequireDefault(_TouchableOpacityScrollable);

var _platform = require('./Utils/platform');

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Suppress unknown prop warnings

// import ProgressBar from './Components/Widgets/ProgressBar';
var logFunction = console.error;
console.error = function () {
				if (arguments[0] && arguments[0].indexOf('Warning: Unknown prop') !== -1) {
								return;
				}
				logFunction.apply(console, arguments);
};

module.exports = {
				Header: _Header2.default,
				Footer: _Footer2.default,
				Title: _Title2.default,
				Container: _Container2.default,
				Content: _Content2.default,
				Button: _Button2.default,
				Text: _Text2.default,
				Switch: _Switch2.default,
				Picker: _Picker2.default,
				List: _List2.default,
				ListItem: _ListItem2.default,
				CardItem: _CardItem2.default,
				H1: _H2.default,
				H2: _H4.default,
				H3: _H6.default,
				View: _View2.default,
				Row: _reactNativeEasyGrid.Row,
				Col: _reactNativeEasyGrid.Col,
				Grid: _reactNativeEasyGrid.Grid,
				InputGroup: _InputGroup2.default,
				Input: _Input2.default,
				Textarea: _Textarea2.default,
				Icon: _Icon2.default,
				Thumbnail: _Thumbnail2.default,
				Card: _Card2.default,
				CardSwiper: _CardSwiper2.default,
				DeckSwiper: _DeckSwiper2.default,
				Badge: _Badge2.default,
				Spinner: _Spinner2.default,
				CheckBox: _Checkbox2.default,
				Radio: _Radio2.default,
				// ProgressBar: ProgressBar,
				Drawer: _reactNativeDrawer2.default,
				Tabs: _Tabs2.default,
				TouchableOpacityScrollable: _TouchableOpacityScrollable2.default,
				//Utils
				OSTheme: _platform2.default
};