import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../Header';
import MyCamera from './Camera';
import Modal from './Modal/Modal';

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cameraClicked: false
    }
    this.getPredictions = this.getPredictions.bind(this);
  }


  getPredictions(clarifaiData) {
    this.setState({predictions: clarifaiData})   
  }


  render() {

    let theComponent;
      !this.state.predictions ? 
      theComponent = <MyCamera getPredictions={this.getPredictions} />
      : theComponent = <Modal predictions={this.state.predictions} />

      // if (!this.state.predictions) {
      //   alert("No state of Predictions")
      //   theComponent = <MyCamera getPredictions={this.getPredictions} />
      // } else {  
      //   alert("State!") 
      //   // console.log(this.state.predictions)
      //   theComponent = <Modal predictions={this.state.predictions}/>
      // }



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