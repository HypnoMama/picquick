import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class ProfileScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user:  '',
      uuid: '',
      recipes: []
    }
  }

  getSavedRecipes() {
    fetch(`https://picquick.herokuapp.com/user/${this.state.uuid}/recipes`, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({recipes: responseJson.recipes})
      console.log(responseJson)
    })
    .catch((error) => {
      console.error(error);
    });
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

  async retrieveUser(){
    try {
      const value = await AsyncStorage.getItem('uuid');
      if (value !== null) {
        console.log("user": value)
        this.setState({user: value})
      }
     } catch (error) {
     }
  }


    componentDidMount() {
      this.retrieveUser();
      this.retrieveId();
      if(this.user) {
        this.getSavedRecipes()
      }
    }
  


  render() {

    

    return (

      <View style={styles.viewStyle}>
        <Grid>

          <Row size={1}>

            <Col size={1}>
              <Image style={styles.imageStyle} source={require('./../assets/logo.png')} />
            </Col>

            <Col size={1}>
              <Text style={styles.textStyle}>{this.props.user}</Text>
            </Col>

          </Row>

          <Row size ={3}>

            <Col style={styles.profileStyle}>
              <Button 
              title='Take a pic'
              onPress={() => {this.props.navigation.navigate('Camera')}}
              />

              <Button 
              title='Log Out'
              onPress={() => {this.props.logout()}}
              />
            </Col>

          </Row>
        </Grid>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  viewStyle: {
    flex: 1,
    backgroundColor: '#1D8295',
  },
  imageStyle: {
    borderWidth: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#1D8295',
  },
  textStyle: {
    borderWidth: 1,
  },
  profileStyle: {
    borderWidth: 1,
  },
  avatarStyle: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
  }
});