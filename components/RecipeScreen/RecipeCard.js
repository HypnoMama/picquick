import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image, Alert, Linking } from 'react-native';
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

        <Image source={{uri: each.recipe.image }} style={{width: 300, height: 300, borderWidth: 1}}/>
        
        <Text>{' '}</Text>

        <RecipeIngredients data={each.recipe.ingredients}/>

        <Text>{' '}</Text>

        <Button
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, borderRadius: 8, borderWidth: 1, backgroundColor: '#006578'}}
          title='View Recipe'
          onPress = { ()=>{ Linking.openURL(each.recipe.url)} }
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

