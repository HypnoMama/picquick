
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../Header';
import MyCamera from './Camera';
import ModalScreen from './Modal/Modal';
import RecipeScreen from './../RecipeScreen/RecipeScreen';
import OpeningScreen from './../OpeningScreen'

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cameraClicked: false,
      isLoading: true,
    }
    this.getPredictions = this.getPredictions.bind(this);
  }

  getPredictions(clarifaiData) {
    this.setState({predictions: clarifaiData})   
  }

  componentDidMount() {
    setTimeout( () => {this.setState({isLoading: false})}, 5000);
  }

  render() {

    let theComponent;

    this.state.isLoading ?
      theComponent = <OpeningScreen />
      :
      (
       !this.state.predictions ? 
        theComponent = <MyCamera getPredictions={this.getPredictions} />
        : 
        theComponent = <ModalScreen predictions={this.state.predictions} />
      )

    return (
      <View style={styles.container}>
      <Header />

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