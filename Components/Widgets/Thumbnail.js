/* @flow */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import _ from 'lodash';

export default class ThumbnailNB extends NativeBaseComponent {

    propTypes: {
        style : PropTypes.object,
        size : PropTypes.number,
        circular : PropTypes.bool,
        square : PropTypes.bool
    }

    getInitialStyle() {
        return {
            thumbnail: {
                borderRadius: this.props.size ? this.props.size/2 : 15,
                width: this.props.size ? this.props.size : 30,
                height: this.props.size ? this.props.size : 30,
                resizeMode: this.props.contain ? 'contain' : undefined
            }
        }
    }

    prepareRootProps() {
        var thumbnailStyle = {};
        if(this.props.circular) {
            thumbnailStyle.width = this.props.size;
            thumbnailStyle.height = this.props.size;
            thumbnailStyle.borderRadius = this.props.size/2;
        }
        else if(this.props.square) {
            thumbnailStyle.width = this.props.size;
            thumbnailStyle.height = this.props.size;
            thumbnailStyle.borderRadius = 0;
        }

        var defaultProps = {
            style: _.merge(this.getInitialStyle().thumbnail, thumbnailStyle)
        };

        return computeProps(this.props, defaultProps);
    }

    render() {
        return(
            <Image {...this.prepareRootProps()}/>
            );
    }
}
