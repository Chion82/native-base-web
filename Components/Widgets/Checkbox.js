/* @flow */
'use strict';

import React from 'react';
import {View} from 'react-native-web-extended';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import Icon from './Icon';
import Platform from '../../Utils/platform';

export default class CheckBox extends NativeBaseComponent {

    getInitialStyle() {
        return {
            checkbox: {
                borderRadius: (Platform.OS === 'ios') ? 13 : 2,
                overflow: 'hidden',
                width: this.getTheme().checkboxSize,
                height: this.getTheme().checkboxSize,
                borderWidth: (Platform.OS === 'ios') ? 1 : 2,
                paddingLeft: (Platform.OS === 'ios') ? 0 : 0,
                paddingBottom: (Platform.OS === 'ios') ? 0 : 0,
                borderColor: this.getTheme().checkboxBgColor,
                backgroundColor: this.props.checked ? this.getTheme().checkboxBgColor : 'transparent'
            }
        }
    }

    render() {
        return(
            <View style={this.getInitialStyle().checkbox}>
                <Icon name='checkmark'
                    style={{
                        color:  this.props.checked ? this.getTheme().checkboxTickColor : 'transparent',
                        marginLeft : (Platform.OS === 'ios') ? -4 : -5,
                        marginTop : (Platform.OS === 'ios') ? 2 : 0
                    }}
                    size={(Platform.OS === 'ios') ? this.getTheme().checkboxSize/0.8 : this.getTheme().checkboxSize/0.8} />
            </View>
        );
    }
}
