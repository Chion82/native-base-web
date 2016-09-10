'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var Platform = {
	OS: 'ios',
	setOSTheme: function setOSTheme(os) {
		return Platform.OS = os;
	}
};

exports.default = Platform;