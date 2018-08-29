import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';

export default class LoadingScreen extends React.Component {
  render() {
    return (

      <View style={styles.viewStyle}>
        <Image style={styles.imageStyle} source={require('./../assets/logo.png')} />
        <Image style={styles.imageStyle2} source={require('./../assets/logo-full.png')} />
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A2E5F4',
  },
  imageStyle: {
    height: 300, 
    width: 300,
  },
    imageStyle2: {
    height: 100, 
    width: 200,
  }
});