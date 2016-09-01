'use strict';
'use_strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _ReactNativePropRegistry = require('react/lib/ReactNativePropRegistry');

var _ReactNativePropRegistry2 = _interopRequireDefault(_ReactNativePropRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// For compatibility with RN 0.25
// import ReactNativePropRegistry from "react-native/Libraries/ReactNative/ReactNativePropRegistry";
module.exports = function (incomingProps, defaultProps) {
    // External props has a higher precedence
    var computedProps = {};

    incomingProps = _lodash2.default.clone(incomingProps);
    delete incomingProps.children;

    var incomingPropsStyle = incomingProps.style;
    delete incomingProps.style;

    // console.log(defaultProps, incomingProps);
    if (incomingProps) {
        if (incomingProps.refreshControl) {
            _lodash2.default.assign(computedProps, defaultProps, incomingProps);
        } else {
            try {
                _lodash2.default.merge(computedProps, defaultProps, incomingProps);
            } catch (exception) {
                console.log('Warning: Call stack size exceeded when merging props, falling back to shallow merge.');
                _lodash2.default.assign(computedProps, defaultProps, incomingProps);
            }
        }
    } else computedProps = defaultProps;
    // Pass the merged Style Object instead
    if (incomingPropsStyle) {

        var computedPropsStyle = {};
        computedProps.style = {};
        if (Array.isArray(incomingPropsStyle)) {
            _lodash2.default.forEach(incomingPropsStyle, function (style) {
                if (typeof style == 'number') {
                    _lodash2.default.merge(computedPropsStyle, _ReactNativePropRegistry2.default.getByID(style));
                } else {
                    _lodash2.default.merge(computedPropsStyle, style);
                }
            });
        } else {
            if (typeof incomingPropsStyle == 'number') {
                computedPropsStyle = _ReactNativePropRegistry2.default.getByID(incomingPropsStyle);
            } else {
                computedPropsStyle = incomingPropsStyle;
            }
        }

        _lodash2.default.merge(computedProps.style, defaultProps.style, computedPropsStyle);
    }
    // console.log("computedProps ", computedProps);
    return computedProps;
};