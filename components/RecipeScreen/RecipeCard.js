import React from 'react';
import { View, TouchableOpacity, Text, ScrollView, StyleSheet, Image, Alert } from 'react-native';
import { Card, ListItem, Button, Icon, Rating } from 'react-native-elements';
import Review from './Rating';
import ApiKeys from '../../ApiKeys';

export default class RecipeCard extends React.Component {

    handlePress = async () => {
    let response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=4`
    )
    .then( (response) => response.json())
    .then( (responseJson) => {
      Alert.alert("Recipes: " + responseJson.hits[0].recipe.label);
      })

    .catch((error) => {
      //Render an error page instead
      console.error(error);
  });
}

  render() {

    return(

    <View>
      <Card
        title='I am a recipe!'>
        <Text style={{marginBottom: 10}}>
          These are recipe ingredient!
        </Text>
        <Button
          icon={<Icon name='code' color='#ffffff' />}
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='Visit site' 
        />

        <Review />

      </Card>
    </View>

          <View style={{paddingTop: 50, paddingLeft: 50 }}>
        <Text> Edamam Test </Text>
        <TouchableOpacity onPress={this.handlePress.bind(this)}>
          <Text style={{paddingTop: 50, paddingLeft: 50, color: '#FF0000'}}> Click me for recipes</Text>
        </TouchableOpacity>
      </View> 
    );

    )

  }

}