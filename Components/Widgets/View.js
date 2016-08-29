/* Original author: @flow */
/* Modified by: @Chion82 */
'use strict';

import React from 'react';
import _ from 'lodash';
import {View} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';


export default class ViewNB extends NativeBaseComponent {
	propTypes: {
        style : React.PropTypes.object,
        padder : React.PropTypes.bool
    }
	render() {

        let props = _.clone(this.props);
        if (props.cardBody)
            delete props.cardBody

		return(
			<View style={{padding: (this.props.padder) ? this.getTheme().contentPadding : 0, flex: 1}} {...props}></View>
			);
	}
}
