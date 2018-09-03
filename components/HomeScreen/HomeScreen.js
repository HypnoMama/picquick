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
      user: '',
      uuid: '',
    }
    this.storeData = this.storeData.bind(this);
    this.retrieveData = this.retrieveData.bind(this);
  }

  async storeData(userName, id) {
    try {
      await AsyncStorage.setItem('user', userName);
      await AsyncStorage.setItem('uuid', id);
    } catch (error) {
    }
  }

  async retrieveData(){
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        this.setState({user: value})
      }
     } catch (error) {
     }
  }

  render() {

    this.storeData('Dave', '1234');
    this.retrieveData();
    
    let theComponent;

    if (!this.state.user) {
      theComponent = <OpeningScreen userExist={this.state.userExist} storeData={this.storeData} retrieveData={this.retrieveData}/>
    } else {
      theComponent = <ProfileScreen navigation={this.props.navigation} user={this.state.user}/>
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