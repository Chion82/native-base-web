/* @flow */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {View} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';


export default class ViewNB extends NativeBaseComponent {
	propTypes: {
        style : PropTypes.object,
        padder : PropTypes.bool
    }
	render() {
		return(
			<View style={{padding: (this.props.padder) ? this.getTheme().contentPadding : 0, flex: 1}} {...this.props}></View>
			);
	}
}
