/* @flow */
'use strict';

import React from 'react';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';

import variables from '../Themes/light';

export default class IconNB extends NativeBaseComponent {

    setIconFamily(family) {
        switch(family) {
            // case 'Entypo':
            //     this.Icon = Entypo;
            //     break;
            case 'FontAwesome':
                this.Icon = require(`react-icons/lib/fa/${this.props.name}`);
                break;
            // case 'Foundation':
            //     this.Icon = Foundation;
            //     break;
            case 'MaterialIcons':
                this.Icon = require(`react-icons/lib/md/${this.props.name}`);
                break;
            // case 'Octicons':
            //     this.Icon = Octicons;
            //     break;
            // case 'Zocial':
            //     this.Icon = Zocial;
            //     break;
            default:
            case 'Ionicons':
               this.Icon = require(`react-icons/lib/io/${this.props.name.replace(/^md-/, 'android-')}`);
               break;
        }
    }

    propTypes: {
        style : React.PropTypes.object
    }

    getInitialStyle() {
        return {
            icon: {
                fontSize: this.getTheme().iconFontSize,
                color: this.props.color || this.getContextForegroundColor()
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
