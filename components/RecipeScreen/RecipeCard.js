import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image, Alert } from 'react-native';
import { Card, ListItem, Button, Icon, Rating } from 'react-native-elements';
import Review from './Rating';
import ApiKeys from '../../ApiKeys';

export default class RecipeCard extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    // console.log("RECIPE CARD: ", this.props.data.hits[0].recipe.ingredients) //array of objects - ingredients

    let recipes = this.props.data.hits;
    let recipeList = recipes.map( (each, index) => 
      
     
      
      <Card title={each.recipe.label} key={index}>

        <RecipeIngredients data={each.recipe.ingredients}/>
        {/* <Text>Hey ya</Text> */}
        <Button
          icon={<Icon name='code' color='#ffffff' />}
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='View Recipe' 
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

