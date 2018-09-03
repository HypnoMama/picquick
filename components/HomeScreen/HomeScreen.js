import React from 'react';
import { AsyncStorage, View, Text, ScrollView, StyleSheet } from 'react-native';
import MyCamera from './Camera';
import OpeningScreen from './../OpeningScreen';
import ProfileScreen from './../ProfileScreen';

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      uuid: '',
    }
    this.storeUser = this.storeUser.bind(this);
    this.storeId = this.storeId.bind(this);
    this.retrieveUser = this.retrieveUser.bind(this);
    this.retrieveId = this.retrieveId.bind(this);
    this.logout = this.logout.bind(this);
    this.loggedIn = this.loggedIn.bind(this);
  }

  async storeUser(userName) {
    try {
      await AsyncStorage.setItem('user', userName);
    } catch (error) {
    }
  }

  async storeId(id) {
    try {
      await AsyncStorage.setItem('uuid', id);
    } catch (error) {
    }
  }

  async retrieveUser(){
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        this.setState({user: value});
      }
     } catch (error) {
     }
  }

  async retrieveId(){
    try {
      const id = await AsyncStorage.getItem('uuid');
      if (id !== null) {
        this.setState({uuid: id});
        console.log("set state Id ", this.state.uuid)
      }
     } catch (error) {
     }
  }

  async logout() {
    try {
      await AsyncStorage.removeItem('user');
      this.setState({user: ''})
    } catch(error){
      console.log('there"s an error!')
    }
    try {
      await AsyncStorage.removeItem('uuid');
      this.setState({uuid: ''})
    } catch(error) {
      console.log("Whoops something went wrong")
    }
  }

  componentDidMount() {
    this.retrieveUser();
  }

  loggedIn(uuid, user) {
    this.setState({user: user})
    this.setState({uuid: uuid})
    console.log(this.state.user)
  }

  render() {
    
    console.log("HomeScreens ", this.state.uuid)
    
    let theComponent;

    if (!this.state.user) {
      theComponent = <OpeningScreen userExist={this.state.userExist} loggedIn={this.loggedIn} storeUser={this.storeUser} storeId={this.storeId}retrieveUser={this.retrieveUser} retrieveId={this.retrieveId} />
    } else {
      theComponent = <ProfileScreen uuid={this.state.uuid} navigation={this.props.navigation} user={this.state.user} userExist={this.state.userExist} storeUser={this.storeUser} storeId={this.storeId}retrieveUser={this.retrieveUser} retrieveId={this.retrieveId} logout={this.logout}/>
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