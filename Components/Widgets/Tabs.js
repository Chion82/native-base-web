/* @flow */
'use strict';

import React from 'react';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import ScrollableTabView from './../vendor/react-native-scrollable-tab-view';

export default class TabNB extends NativeBaseComponent {

    propTypes: {
        style : React.PropTypes.object
    }

    getInitialStyle() {
        return {
            tab: {
                flex: 1
            }
        }
    }

    prepareRootProps() {

        var defaultProps = {
            style: this.getInitialStyle().tab
        };

        return computeProps(this.props, defaultProps);

    }

    changeChildrenStyle() {
        React.Children.forEach(this.props.children, function (child) {
            if (!child.props.tabLabel)
                return;
            if (!child.props.style)
                child.props.style = {};
            if (!child.props.style.width)
                child.props.style.width = Math.round(100/this.props.children.length) + '%';
        }.bind(this));
    }

    render() {
        this.changeChildrenStyle();
        return(
            <ScrollableTabView {...this.prepareRootProps()} >
                {this.props.children}
            </ScrollableTabView>
        );
    }

}
