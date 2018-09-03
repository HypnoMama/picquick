
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import TheHeader from '../Header';
import MyCamera from './Camera';
import ModalScreen from './Modal/Modal';
import RecipeScreen from './../RecipeScreen/RecipeScreen';
import OpeningScreen from './../OpeningScreen'

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cameraClicked: false,
      goneBack: false,
      isLoading: true,
      goneBackToModal: false,
    }
    this.getPredictions = this.getPredictions.bind(this);
    this.goneBack = this.goneBack.bind(this);
    this.goneToModal = this.goneToModal.bind(this);
  }

  getPredictions(clarifaiData) {
    this.setState({predictions: clarifaiData})   
  }

  goneBack() {
    this.setState({goneBack: !this.state.goneBack, predictions: false})    
  }

  goneToModal() {
    this.setState({goneBackToModal: false, goneBack: true, predictions: this.state.predictions})
    // alert(this.state.)
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
        (!this.state.predictions && !this.state.goneBack) && !this.state.goneBackToModal ? 
        theComponent = <MyCamera getPredictions={this.getPredictions} goneBackToCamera={this.goneBack} />
        : theComponent = <ModalScreen predictions={this.state.predictions} goBackToModalScreen={this.goneToModal} goneBackToCamera={this.goneBack} />
      )

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