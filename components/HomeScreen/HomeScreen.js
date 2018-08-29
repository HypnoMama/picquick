
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import TheHeader from '../Header';
import MyCamera from './Camera';
import ModalScreen from './Modal/Modal';
import RecipeScreen from './../RecipeScreen/RecipeScreen';

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cameraClicked: false,
      goneBack: false
    }
    this.getPredictions = this.getPredictions.bind(this);
    this.goneBack = this.goneBack.bind(this);
  }

  getPredictions(clarifaiData) {
    this.setState({predictions: clarifaiData})   
  }

  goneBack() {

    this.setState({goneBack: true, predictions: false})
  }

  render() {

    let theComponent;
      !this.state.predictions || this.state.goneBack ? 
      theComponent = <MyCamera getPredictions={this.getPredictions} />
      : theComponent = <ModalScreen predictions={this.state.predictions} goneBackToCamera={this.goneBack} />

    return (
      <View style={styles.container}>

        {/* <TheHeader goneBackToCamera={this.goneBack} /> */}

        {theComponent} 
    
      </View>
  )}
}

const styles = StyleSheet.create ({
  container: {
    width: '100%',
    height: '100%', 
  }
})