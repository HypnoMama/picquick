import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Expo, Font } from 'expo';

export default class LoadingScreen extends React.Component {
  render() {
    return (

        <View style={styles.viewStyle}>
          <Text style={styles.loadText}>Loading</Text>
          <ActivityIndicator size="large" color="#FFFAF0" />
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