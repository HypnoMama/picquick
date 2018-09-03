import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class ProfileScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      recipes: []
    }
  }

  async retrieveId(){
    try {
      const id = await AsyncStorage.getItem('uuid');
      if (id !== null) {
        this.setState({uuid: id});
        console.log("the uuid is Profile: ", id)
      }
     } catch (error) {
     }
  }

  async retrieveUser(){
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        this.setState({user: value});
        console.log(value)
      }
     } catch (error) {
     }
  }

  setTheState() {

    this.getSavedRecipes(this.props.uuid)
  }

  getSavedRecipes(userId) {
    
    fetch(`https://picquick.herokuapp.com/user/${userId}/recipes`, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log("response from recipes: ", responseJson.Response[0].recipes);
      this.setState({recipes: responseJson.Response[0].recipes})
      console.log(this.state.recipes)

    })
    .catch((error) => {
      console.error(error);
    });
  }

  componentDidMount() {
   
    this.setState({uuid: this.props.uuid})
    // alert(this.state.uuid)
    this.setTheState()
  }

  render() {
    
    this.setTheState()
    console.log("uuid profile", this.props.uuid)

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
              title='Button'
              onPress={() => {this.props.navigation.navigate('Camera')}}
              />
            </Col>

            <Col style={styles.profileStyle}>
              <Button 
              title='Logout'
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