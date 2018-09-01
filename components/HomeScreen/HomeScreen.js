import React from 'react';
import { AsyncStorage, View, Text, ScrollView, StyleSheet } from 'react-native';
import MyCamera from './Camera';
import OpeningScreen from './../OpeningScreen';
import ProfileScreen from './../ProfileScreen';

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      jwt: '',
    }
    this.storeData = this.storeData.bind(this);
    this.retrieveData = this.retrieveData.bind(this);
  }

  async storeData() {
    try {
      await AsyncStorage.setItem('key', 'test');
      console.log('Data stored')
    } catch (error) {
      // Error saving data
    }
  }

  async retrieveData(){
    try {
      const value = await AsyncStorage.getItem('key');
      if (value !== null) {
        // We have data!!
        this.setState({jwt: value})
      }
     } catch (error) {
       // Error retrieving data
     }
  }

  render() {

    //this.storeData();
    //this.retrieveData();
    
    let theComponent;

    if (!this.state.jwt) {
      theComponent = <OpeningScreen userExist={this.state.userExist} storeData={this.storeData} retrieveData={this.retrieveData}/>
    } else {
      theComponent = <ProfileScreen navigation={this.props.navigation}/>
    }

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