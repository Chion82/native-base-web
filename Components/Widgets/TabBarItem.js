import React, { Component, PropTypes } from 'react';
import { TabBarIOS } from 'react-native';
import Icon from './Icon';

class TabBarItem extends Component {

    static propTypes = {
        iconName : PropTypes.string.isRequired,
        selectedIconName : PropTypes.string,
        iconSize : PropTypes.number,
        iconColor : PropTypes.string,
        selectedIconColor : PropTypes.string
    }

    getIconNode() {
        return (
            <Icon name={ (this.props.selected && this.props.selectedIconName) ? this.props.selectedIconName : this.props.iconName}
                family={this.props.family}
                size={this.props.iconSize || 30}
                color={(this.props.selected && this.props.selectedIconColor) ? this.props.selectedIconColor : this.props.iconColor}
                style={{
                    marginBottom : -2
                }} />
        );
    }

    render() {
        return (
            <TabBarIOS.Item
                {...this.props}
                iconComponent={this.getIconNode()} />
        )
    }

}

export default TabBarItem;
