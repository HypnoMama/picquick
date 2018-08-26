import React from 'react';
import { View, Text } from 'react-native';

const Ingredient = (props) => {
  return (

    <View>
      <Text>{props.item.name}</Text>
      <Text>{props.item.value}</Text>
    </View>
  )
}

export default Ingredient;