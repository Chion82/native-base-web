/* Original author: @flow */
/* Modified by: @Chion82 */
'use strict';

import React from 'react';
import {View} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import Text from './Text';


export default class BadgeNB extends NativeBaseComponent {

    propTypes: {
        style : React.PropTypes.object
    }

    prepareRootProps() {

        var type = {

            backgroundColor:this.props.primary ?
                            this.getTheme().brandPrimary :
                            this.props.success ?
                            this.getTheme().brandSuccess :
                            this.props.info ?
                            this.getTheme().brandInfo :
                            this.props.warning ?
                            this.getTheme().brandWarning :
                            this.props.danger ?
                            this.getTheme().brandDanger :
                            this.getTheme().badgeBg,
            padding: 3,
            paddingHorizontal: 10,
            alignSelf: 'flex-start',
            borderRadius: 13.5,
            height: 27

        }

        var defaultProps = {
            style: type
        }

        return computeProps(this.props, defaultProps);

    }
    render() {
        let viewProps = this.prepareRootProps();
        if (viewProps.primary)
            delete viewProps.primary;
        if (viewProps.success)
            delete viewProps.success;
        if (viewProps.info)
            delete viewProps.info;
        if (viewProps.warning)
            delete viewProps.warning;
        if (viewProps.danger)
            delete viewProps.danger;

        return(
            <View {...viewProps}>
                <Text style={{ color: (this.props.textStyle && this.props.textStyle.color) ? this.props.textStyle.color : this.getTheme().badgeColor,
                                fontSize: this.getTheme().fontSizeBase,
                                lineHeight: this.getTheme().lineHeight-1,
                                textAlign: 'center'}}>{this.props.children}
                </Text>
            </View>
        );
    }

}
