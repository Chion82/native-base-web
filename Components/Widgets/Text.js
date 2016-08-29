/* Original author: @flow */
/* Modified by: @Chion82 */
'use strict';

import React from 'react';
import {Text} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';


export default class TextNB extends NativeBaseComponent {

	propTypes: {
        style : React.PropTypes.object
    }

	prepareRootProps() {

		var type = {
			color: this.getContextForegroundColor(),
			fontSize: this.getTheme().fontSizeBase,
			lineHeight: this.getTheme().lineHeight,
			fontFamily: this.getTheme().fontFamily
		}

		var defaultProps = {
			style: type
		}

		let computedProps = computeProps(this.props, defaultProps);
        if (computedProps.note)
            delete computedProps.note;
        return computedProps;

	}
	render() {
		return(
			<Text {...this.prepareRootProps()}>{this.props.children}</Text>
		);
	}

}
