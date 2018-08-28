import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { Expo, Font } from 'expo';

export default class LoadingScreen extends React.Component {
  render() {
    return (

      <View style={styles.viewStyle}>
        <Image source={require('./../assets/logo.png')} />
        <Text style={styles.loadText}>Welcome!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  viewStyle: {
    flex: 1, 
    padding: 20, 
    alignItems: 'center'
  },
  loadText: {
    fontSize: 30,
  }
});