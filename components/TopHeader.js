import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import HeaderButton from './HeaderButton';
import HeaderCenterComp from './HeaderCenterComp';

class TopHeader extends Component {

    constructor(props, context) {
        this.state = {
            showSearch: false,
        };
        this.onClickSearch = this.onClickSearch.bind(this);
    }

    onClickSearch() {
        const { showSearch } = this.state;
        this.setState({ showSearch: !showSearch });
    }

    render() {
        const { headerStyle, searchBtnStyle } = styles;
        const { onClickSearch } = this;
        const { showSearch } = this.state;

        return (

            <View style={headerStyle}>
                <HeaderButton isSearch={showSearch} />
                <HeaderCenterComp isSearch={showSearch} />
                <TouchableOpacity onClick={onClickSearch}>
                    <Image style={searchBtnStyle} source={require('../images/search.png')} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        height: 45,
        backgroundColor: '#252728',
        elevation: 2,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    searchBtnStyle: {
        width: 25,
        height: 25
    }
});

export default TopHeader;
