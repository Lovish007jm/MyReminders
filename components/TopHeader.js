import  React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class TopHeader extends Component{

render(){
  const { headerStyle } = styles;
      return(
        <View style={ headerStyle }>
          <Text> Title </Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  headerStyle:{
    height:50,
    backgroundColor: '#EEEEEE',
    elevation:2,
  },
});

export default TopHeader;
