import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { Expo, Font } from 'expo';

export default class LoadingScreen extends React.Component {
  render() {
    return (

      <View style={styles.viewStyle}>
        <Image source={require('./../assets/logo.png')} />
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  viewStyle: {
    flex: 1, 
    padding: 20, 
    alignItems: 'center',
    backgroundColor: '#A2E5F4',
  }
});