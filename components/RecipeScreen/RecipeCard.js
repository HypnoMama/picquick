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

    console.log(this.props.data)

    let text = `${this.props.data.hits[0].recipe.ingredients[0].text}`

    return(

    <View>

      <Card title={this.props.data.hits[0].recipe.label}>

        <Text style={{marginBottom: 10}}>
          {text}
        </Text>

        <Button
          icon={<Icon name='code' color='#ffffff' />}
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='View Recipe' 
        />

        <Review />

      </Card>

    </View>

    )

  }

}