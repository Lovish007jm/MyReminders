import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class HeaderButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { headerButtonStyle, container } = styles;
        const { isSearch } = this.props;
        const icon = !isSearch ? require('../images/headerButton_hamburgerMenu.png') : require('../images/headerButton_back.png');
        return (
            <View style={container}>
                <TouchableOpacity>
                    <Image style={headerButtonStyle} source={icon} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerButtonStyle: {
        width: 25,
        height: 25,

    },
    container: {
        width: 35,
        height: 35,
    },
});

export default HeaderButton;