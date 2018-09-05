import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { Expo, Font } from 'expo';

export default class LoadingScreen extends React.Component {
  render() {
    return (

        <View style={styles.viewStyle}>
          <Text style={styles.loadText}>Loading</Text>
          <ActivityIndicator size="large" color="#FFFAF0"/>
          {/* <Image style={{flex: 1, width: 100}} source={require('../assets/Clarifai_Logo_FC.png')} resizeMode='contain'/> */}

          <Image style={{flex: 1, width: 250}} source={require('../assets/edamam.png')} resizeMode='contain'/>

        </View>
    )
  }
}

const styles = StyleSheet.create ({
  viewStyle: {
    flex: 0,
    padding: 20, 
    alignItems: 'center',
    backgroundColor: '#1D8295',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
  loadText: {
    fontSize: 30,
    color: '#FFFAF0'
  }
});