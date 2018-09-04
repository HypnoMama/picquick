import React from 'react';
import { AsyncStorage, View, Text, ActivityIndicator, StyleSheet, Image, Alert, Linking } from 'react-native';
import { Card, ListItem, Button, Icon, Rating } from 'react-native-elements';
import Review from './Rating';
import ApiKeys from '../../ApiKeys';

export default class RecipeCard extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      user: '',
      uuid: '',
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
      }
     } catch (error) {
     }
  }

  onPressFunc(url, label, image) {
    this.retrieveUser();
    this.retrieveId();
    this.saveRecipe(url, label, image);
  }

  saveRecipe(url, label, image) {
    fetch(`https://picquick.herokuapp.com/user/${this.state.uuid}/recipes`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: this.state.user,
        url: url, 
        label: label,
        image: image,
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      alert('Recipe Saved')
    })
    .catch((error) => {
      console.error(error);
    });
  }

  componentDidMount() {
    AsyncStorage.getItem("uuid").then((value) => {
      this.setState({"uuid": value});
    }).done();
    AsyncStorage.getItem("user").then((value) => {
      this.setState({"user": value});
    }).done();
  }

  render() {
    let recipes = this.props.data.hits;
    let recipeList = recipes.map( (each, index) => 

      <Card containerStyle={styles.cardStyle} title={each.recipe.label} key={index}>

        <Image source={{uri: each.recipe.image }} style={{width: 300, height: 300, borderWidth: 1}}/>
        
        <Text>{' '}</Text>

        <RecipeIngredients data={each.recipe.ingredients}/>

        <Text>{' '}</Text>

        <Button
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, borderRadius: 8, borderWidth: 1, backgroundColor: '#006578'}}
          title='View Recipe'
          onPress = { ()=>{ Linking.openURL(each.recipe.url)} }
        />

        <Text>{' '}</Text>

        <Button
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, borderRadius: 8, borderWidth: 1, backgroundColor: '#006578'}}
          title='Save Recipe'
          onPress = {() => this.onPressFunc(each.recipe.url, each.recipe.label, each.recipe.image)
           
          }
        />
        
      </Card>
      );

    return(

      <View>

        {recipeList}

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
    flex: 0,
    backgroundColor: '#1D8295',
    height: '100%',
    width: '100%'
  },
  cardStyle: {
    backgroundColor: '#FFFAF0',
    borderRadius: 10,
  }
});

