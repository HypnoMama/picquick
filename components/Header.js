import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>PicQuick</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  textStyle: {
    paddingTop: 20,
    fontSize: 40,
    color: '#A2E4F4',
    backgroundColor: '#025265',
    height: 80,
    textAlign: 'center'
  },
  viewStyle: {
    alignItems: 'stretch',
    justifyContent: 'center',
  }
});