import React from 'react';
import { AsyncStorage, View, Text, StyleSheet, ActivityIndicator, Image, ScrollView, Linking } from 'react-native';
import { Card, ListItem, Button, Icon, Rating } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class ProfileScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  getSavedRecipes(userId) {    
    fetch(`https://picquick.herokuapp.com/user/${userId}/recipes`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({recipes: responseJson.Response})
      console.log(this.state.recipes)
    })
    .catch((error) => {
      console.error(error);
    });
  }

  componentWillMount() {
    AsyncStorage.getItem("uuid").then((value) => {
      this.setState({"uuid": value});
      this.getSavedRecipes(value);
    }).done();
    AsyncStorage.getItem('user').then((user) => {
      this.setState({'user': user})
    })
  }

  retrieveUser(){
    try {
      const value = AsyncStorage.getItem('user');
      if (value !== null) {
        this.setState({user: value});
      }
     } catch (error) {
     }
  }

  render() {


    let recipeList;

    if (this.state.recipes) {
      let recipe = this.state.recipes;
      recipeList = recipe.map( (each, index) => 

        <Card containerStyle={styles.cardStyle} title={each.label} key={index}>

          <Image source={{uri: each.image }} style={{width: 100, height: 100, borderWidth: 1}}/>
          
          <Text>{' '}</Text>

          <Button
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, borderRadius: 8, borderWidth: 1, backgroundColor: '#006578'}}
            title='View Recipe'
            onPress = { ()=>{ Linking.openURL(each.recipes)} }
          />
        </Card>
      );
    }

    return (

      
      <View style={styles.viewStyle}>
        <Grid>
  
          <Row size={1}>

            <Col size={1}>
              <Image style={styles.imageStyle} source={require('./../assets/logo.png')} />
            </Col>

            <Col size={1}>
              <Text style={styles.textStyle}>{this.state.user}</Text>
            </Col>

          </Row>

          <Row size ={3}>

            <Col style={styles.profileStyle}>
              <ScrollView>
                {recipeList}
              </ScrollView>
            </Col>

            <Col style={styles.profileStyle}>

              <Button 
              title='Button'
              onPress={() => {this.props.navigation.navigate('Camera')}}
              />

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

export class RecipeIngredients extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    let ingredientList = this.props.data;
    let ingredientItem = ingredientList.map( (each, index) => {
      return <Text key={index}>{each.text}</Text>
    });

    return (

      <View>

        {ingredientItem}

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