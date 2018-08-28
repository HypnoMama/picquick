import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Expo, Font } from 'expo';

export default class LoadingScreen extends React.Component {
  render() {
    return (

        <View style={styles.viewStyle}>
          <Text style={styles.loadText}>Loading</Text>
          <ActivityIndicator size="large" color="#0000ff" />
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
  },
  loadText: {
    fontSize: 30,
  }
});