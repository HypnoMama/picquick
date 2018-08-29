import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import MyCamera from './Camera';
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
  }

  componentDidMount() {
    setTimeout( () => {this.setState({isLoading: false})}, 5000);
  }

  render() {
    
    let theComponent;

    this.state.isLoading ?
      theComponent = <OpeningScreen />
      :  theComponent = <MyCamera navigation={this.props.navigation}/>

    return (
      <View style={styles.container}>

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