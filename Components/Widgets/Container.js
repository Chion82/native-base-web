/* @flow */
'use strict';

import React from 'react';
import {View, Image, Dimensions} from 'react-native-web-extended';
import ViewNB from './View';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import _ from 'lodash';
import computeProps from '../../Utils/computeProps';

export default class Container extends NativeBaseComponent {

  propTypes: {
    style : React.PropTypes.object
  }

  isHeaderPresent() {
    let headerPresent = false;
    React.Children.forEach(this.props.children, function (child) {
      if(child.type == Header)
          headerPresent = true;
    })
    return headerPresent;
  }

  renderHeader() {
    if(Array.isArray(this.props.children)) {
      return _.find(this.props.children, function(item) {
        if(item && item.type == Header) {
          return true;
        }
      });
    }

    else {
      if(this.props.children && this.props.children.type == Header) {
        return this.props.children;
      }
    }
  }

  getBottomTabBarHeight() {
    const tabBars = document.getElementsByClassName('tabbarios-tabbar-container');
    if (tabBars.length === 0) {
      return 0;
    }
    const tabBar = tabBars[0];
    if (!(tabBar.clientWidth !== 0 && tabBar.clientHeight !== 0 && tabBar.style.opacity !== 0 && tabBar.style.visibility !== 'hidden')) {
      return 0;
    }
    return tabBars[0].clientHeight;
  }

  renderContent() {
    let contentNode = null;
    const defaultContentStyle = {
      height : Dimensions.get('window').height - (this.isHeaderPresent() ? this.getTheme().toolbarHeight : 0) - this.getBottomTabBarHeight()
    };

    if(Array.isArray(this.props.children)) {

      contentNode = _.find(this.props.children, function(item) {
        if(item && (item.type == ViewNB || item.type == Content || item.type == Image || item.type == View)) {

          return true;
        }
      });
    }

    else {
      if(this.props.children && (this.props.children.type == Content || this.props.children.type == ViewNB || this.props.children.type == View || this.props.children.type == Image)) {
        contentNode = this.props.children;
      }
    }
    return (
      <contentNode.type {...contentNode.props} style={_.assign(defaultContentStyle, contentNode.props.style || {})}>
        {contentNode.props.children}
      </contentNode.type>
    )
  }
  renderFooter() {
    if(Array.isArray(this.props.children)) {
      return _.find(this.props.children, function(item) {
        if(item && item.type == Footer) {
          return true;
        }
      });
    }

    else {
      if(this.props.children && this.props.children.type == Footer) {
        return this.props.children;
      }
    }
  }
  prepareRootProps() {

    var type = {
      flex: 1
    }

    var defaultProps = {
      style: type
    }

    return computeProps(this.props, defaultProps);
  }
  render() {
    if (!this._delayRerendered) {
      // Schedule a delayed update to wait for TabBarIOS
      this._delayRerendered = true;
      setTimeout((() => this.forceUpdate()).bind(this));
      return (<View />);
    }
    return(
      <View {...this.prepareRootProps()}>

        <View>
          {this.renderHeader()}
        </View>


        <View style={{
              flex:1,
              paddingTop : this.isHeaderPresent() ? this.getTheme().toolbarHeight : 0
            }}>
          {this.renderContent()}
        </View>

        <View>
          {this.renderFooter()}
        </View>
      </View>
    );

  }

}
