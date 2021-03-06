/* @flow */
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import {View, TextInput} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';

export default class Input extends NativeBaseComponent {

    propTypes: {
        style : PropTypes.object
    }

    getInitialStyle() {
        return {
            input: {
                height: this.getTheme().inputHeightBase,
                color: this.getTheme().inputColor,
                paddingLeft: 5,
                paddingRight: 5,
                fontSize: this.getTheme().inputFontSize,
                lineHeight: this.getTheme().inputLineHeight
            }
        }
    }

    prepareRootProps() {
        var defaultProps = {
            style: this.getInitialStyle().input
        }

        return computeProps(this.props, defaultProps);
    }
    render() {

        return (
            <View style={{ flex: 1}}>
                <TextInput {...this.prepareRootProps()} placeholderTextColor={ this.props.placeholderTextColor ? this.props.placeholderTextColor : this.getTheme().inputColorPlaceholder } underlineColorAndroid='rgba(0,0,0,0)' />
            </View>
        );
    }

}
