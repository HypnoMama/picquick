import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, ListItem, Button, Icon, Rating } from 'react-native-elements';
import Header from '../Header';

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
        <Rating
          showRating
          type="star"
          fractions={1}
          startingValue={3.6}
          readonly
          imageSize={40}
          onFinishRating={this.ratingCompleted}
          style={{ paddingVertical: 10 }}
        />
      </Card>
    </View>

    )

  }

}