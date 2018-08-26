import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import MyCamera from './Camera';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       

        <MyCamera  />
        
      </View>
  )}
}

const styles = StyleSheet.create ({
  container: {
    width: '100%',
    height: '100%', 
  }

})