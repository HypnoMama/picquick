import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import MyCamera from './Camera';

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      predictions: [],
    }
    this.getPredictions = this.getPredictions.bind(this);
  }


  getPredictions(clarifaiData) {
    this.setState({predictions: clarifaiData})
    
  }


  render() {
    return (
      <View style={styles.container}>
      
        <MyCamera getPredictions={this.getPredictions} />
        
      </View>
  )}
}

const styles = StyleSheet.create ({
  container: {
    width: '100%',
    height: '100%', 
  }

})