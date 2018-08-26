import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-swipeable';

export default class Ingredient extends React.Component {

  itemName = this.props.item
  

  filterValues(item) {
    return item.value > 0.7 ?
   <Text style={styles.container}>{item.name}:  {item.value}</Text>
    : null
  }

  render () {

    return (

      <View >
        <Swipeable>
        {this.filterValues(this.itemName)}
        </Swipeable>
        
        
      </View>
    )

  }

  
}

const styles = StyleSheet.create({
  container: {   
    width: '25%',
    height: 50,
    backgroundColor: '#68BED9',
    borderColor: '#4292A8',
    margin: 10,
    borderWidth: 1,
    borderRadius: 2,
    borderBottomWidth: 0,
    padding: 6,
    textAlign: 'center',
    shadowColor: '#2E302D',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,



  }
})



