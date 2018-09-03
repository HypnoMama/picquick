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
    this.storeUser = this.storeUser.bind(this);
    this.retrieveUser = this.retrieveUser.bind(this);
    this.storeId = this.storeId.bind(this);
    this.retrieveId = this.retrieveId.bind(this);
    this.logout = this.logout.bind(this);

  }

  async storeUser(userName) {
    try {
      await AsyncStorage.setItem('user', userName);
      
    } catch (error) {
    }
  }

  async storeId(uuid) {
    try {
      await AsyncStorage.setItem('uuid', uuid);     
    } catch (error) {
    }
  }


  async retrieveUser(){
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        console.log("value: ", value)
        this.setState({user: value})
        this.setState({uuid: id})
      }
     } catch (error) {
     }
  }


  async retrieveId(){
    try {
      const id = await AsyncStorage.getItem('uuid');
      if (id !== null) {
        console.log("id": id)
        this.setState({uuid: id})
      }
     } catch (error) {
     }
  }

  async logout() {
    try {
      await AsyncStorage.removeItem('uuid');
      this.setState({uuid: ''})
    } catch(error) {
      console.log("WHoops something went wrong")
    }
    try {
      await AsyncStorage.removeItem('user');
      this.setState({user: ''})
    } catch(error){
      console.log('there"s an error!')
    }
  }

  render() {

  
    this.storeUser()
    this.storeId()
    this.retrieveUser(this.state.userName);
    this.retrieveId(this.state.uuid);
    
    let theComponent;

    if (!this.state.user) {
      theComponent = <OpeningScreen userExist={this.state.userExist} storeId={this.storeId} storeUser={this.storeUser} retrieveId={this.retrieveId}  retrieveUser={this.retrieveUser}/>
    } else {
      theComponent = <ProfileScreen uuid={this.state.uuid} logout={this.logout} user={this.state.user} navigation={this.props.navigation} retrieveUser={this.retrieveUser} user={this.state.user}/>
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