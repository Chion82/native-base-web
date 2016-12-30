/* @flow */
'use strict';

import React from 'react';
import { Dimensions } from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import ScrollableTabView from './../vendor/react-native-scrollable-tab-view';
import View from './View';
import _ from 'lodash';

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

    renderTabBarChildren() {
        let children = [];
        React.Children.forEach(this.props.children, function (child, index) {
            let ChildType = child.type;
            let props = _.clone(child.props);
            let style = _.clone(child.props.style || {});
            if (props.style)
                delete props.style;

            style.width = Dimensions.get('window').width;

            children.push(
                <ChildType {...props} style={style} key={index}>
                    {child.props.children}
                </ChildType>);
        }.bind(this));
        return children;
    }

    render() {
        return(
            <View style={{
                width : '100%',
                overflowX : 'hidden'
            }}>
                <ScrollableTabView {...this.prepareRootProps()} >
                    {this.renderTabBarChildren()}
                </ScrollableTabView>
            </View>
        );
    }

}
