import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, ListItem, Button, Icon, Rating } from 'react-native-elements';
import Review from './Rating';

const users = [
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
]

export default class RecipeCard extends React.Component {

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

    )

  }

}