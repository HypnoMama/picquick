import React from 'react';
import { View, Text } from 'react-native';

export default class Ingredient extends React.Component {

  itemName = this.props.item
  

  filterValues(item) {
    return item.value > 0.7 ?
    <Text>{item.name}:  {item.value}</Text>
    : null
    
    // return <Text>{itemName}</Text>
  }

  render () {

    return (

      <View>
        {this.filterValues(this.itemName)}
        
      </View>
    )

  }

  
}



