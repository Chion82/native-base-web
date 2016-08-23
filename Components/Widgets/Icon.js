/* @flow */
'use strict';

import React from 'react';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';

import variables from '../Themes/light';

// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Entypo from 'react-native-vector-icons/Entypo';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Foundation from 'react-native-vector-icons/Foundation';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Octicons from 'react-native-vector-icons/Octicons';
// import Zocial from 'react-native-vector-icons/Zocial';
import { Text } from 'react-native';

export default class IconNB extends NativeBaseComponent {

    setIconFamily(family) {
        switch(family) {
            // case 'Ionicons':
            //     this.Icon = Ionicons;
            //     break;
            // case 'Entypo':
            //     this.Icon = Entypo;
            //     break;
            // case 'FontAwesome':
            //     this.Icon = FontAwesome;
            //     break;
            // case 'Foundation':
            //     this.Icon = Foundation;
            //     break;
            // case 'MaterialIcons':
            //     this.Icon = MaterialIcons;
            //     break;
            // case 'Octicons':
            //     this.Icon = Octicons;
            //     break;
            // case 'Zocial':
            //     this.Icon = Zocial;
            //     break;
            default:
                this.Icon = Text;
        }
    }

    propTypes: {
        style : React.PropTypes.object
    }

    getInitialStyle() {
        return {
            icon: {
                fontSize: this.getTheme().iconFontSize,
                color: this.getContextForegroundColor()
            }
        }
    }
    prepareRootProps() {
        var defaultProps = {
            style: this.getInitialStyle().icon
        };

        return computeProps(this.props, defaultProps);

    }

    render() {
        if (this.props.family) {
            this.setIconFamily(this.props.family);
        } else {
            this.setIconFamily(variables.iconFamily)
        }
        return(
            <this.Icon {...this.prepareRootProps()}/>
        );
    }
}
