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

    let recipes = this.props.data.hits;
    let recipeList = recipes.map( (each, index) =>

      <Card containerStyle={styles.cardStyle} title={each.recipe.label} key={index}>

        <RecipeIngredients data={each.recipe.ingredients}/>

        <Text>{' '}</Text>

        <Button
          backgroundColor='#006578'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, borderRadius: 8}}
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

const styles = StyleSheet.create ({
  viewStyle: {
    flex: 0,
    backgroundColor: '#1D8295',
    height: '100%',
    width: '100%'
  },
  loadText: {
    fontSize: 30,
  },
  cardStyle: {
    backgroundColor: '#FFFAF0',
    borderRadius: 10,
  }
});

