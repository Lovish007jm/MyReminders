import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

class HeaderCenterComp extends Component {
    constructor(props, context) {
        super(props);
    }

    render() {
        const { titleStyle, container } = styles;
        const { isSearch } = this.props;
        const element = isSearch ? <TextInput style={titleStyle} placeholder="Type here to search!" /> : <Text style={titleStyle}>Reminder</Text>
        return (
            <View style={container}>
                {element}
            </View>
        );

    }
}

const styles = StyleSheet.create({
    titleStyle: {
        color: '#FFFFFF',
        fontSize: 15,
        flex: 1

    },
    container: {
        borderWidth: 2,
        borderColor: '#FFFFFF',
        flex: 2,
        paddingLeft: 8,
        paddingRight: 8,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 3
    },
});

export default HeaderCenterComp;