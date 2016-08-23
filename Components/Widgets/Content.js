/* @flow */
'use strict';

import React from 'react';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import { ScrollView } from 'react-native';

export default class Content extends NativeBaseComponent {

	propTypes: {
        padder : React.PropTypes.bool,
		style : React.PropTypes.object
    }

	prepareRootProps() {

		var type = {
			backgroundColor: (this.props.style && this.props.style.backgroundColor) || 'white',
			flex: 1
		}

		var defaultProps = {
			style: type
		}

		return computeProps(this.props, defaultProps);
	}

	render() {
		const contentContainerStyle = this.props.contentContainerStyle || {};
		contentContainerStyle.padding = (this.props.padder) ? this.getTheme().contentPadding : 0;
		return(
			<ScrollView resetScrollToCoords={{x:0,y:0}} {...this.prepareRootProps()} contentContainerStyle={contentContainerStyle}>{this.props.children}</ScrollView>
		);
	}
}
