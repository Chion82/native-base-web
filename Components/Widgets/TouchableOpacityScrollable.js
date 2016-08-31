/* Author: @Chion82 */
'use strict';

import React from 'react';
import { View, Animated } from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import _ from 'lodash';

export default class TouchableOpacityScrollable extends NativeBaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            ignoreMouseEvent : false,
            fadeAnim : new Animated.Value(1)
        };
    }

    handlePressIn() {
        Animated.timing(this.state.fadeAnim, {
            toValue: this.props.activeOpacity || 0.2
        }).start();
    }

    handlePressOut() {
        Animated.timing(this.state.fadeAnim, {
            toValue: 1
        }).start();
    }

    prepareRootProps() {
        let props = _.clone(this.props);
        if (props.onPress) {
            props.onClick = props.onPress;
            delete props.onPress;
        }

        let onPressIn = props.onPressIn || (() => {});
        props.onMouseDown = (e) => {
            if (this.state.ignoreMouseEvent)
                return;
            this.handlePressIn();
            return onPressIn(e);
        }
        props.onTouchStart = (e) =>{
            this.setState({
                ignoreMouseEvent : true
            });
            this.handlePressIn();
            return onPressIn(e)
        }
        delete props.onPressIn;


        let onPressOut = props.onPressOut || (() => {});
        props.onMouseUp = (e) => {
            if (this.state.ignoreMouseEvent)
                return;
            this.handlePressOut();
            return onPressOut(e);
        }
        props.onTouchEnd = (e) =>{
            this.setState({
                ignoreMouseEvent : true
            });
            this.handlePressOut();
            return onPressOut(e)
        }
        delete props.onPressOut;

        if (props.style)
            delete props.style;

        return props;
    }

    render() {
        return (
            <Animated.View {...this.prepareRootProps()} style={{
                ...(this.props.style || {}),
                opacity : this.state.fadeAnim
            }}>
                {this.props.children}
            </Animated.View>
        );
    }

}
