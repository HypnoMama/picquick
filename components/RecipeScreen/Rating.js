import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Rating } from 'react-native-elements';

export default class RecipeCard extends React.Component {

  render() {

    return(

      <View>

        <Rating
          showRating
          type="star"
          fractions={1}
          startingValue={0}
          imageSize={20}
          onFinishRating={this.ratingCompleted}
          style={{ paddingVertical: 10 }}
        />

      </View>
    )
  }
}