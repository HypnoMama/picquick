import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import Swipeout from 'react-native-swipeout';

export default class Ingredient extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      activeRowKey: null,
    }
  }

 
  itemName = this.props.item
 
  filterValues(item) {
    return item.value > 0.8 ?
   <Text style={styles.container}>{item.name}</Text>
    : null
  }

  render () {

    const swipeSettings = {
      autoClose: true,
      onClose: (secId, rowId, direction) => {
        if(this.state.activeRowKey != null){
          this.setState({ activeRowKey: null })
        }
      },
      onOpen: (secId, rowId, direction) => {
        this.setState({ activeRowKey: this.props.item.key})
      },
      right: [
        {
          
          onPress: () => {
            const deletingRow = this.state.activeRowKey;
            Alert.alert(
              'Alert', 
              'Are you sure you want to delete?',
              [
                {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'Yes', onPress: () => {
                  
                  this.props.allItems.splice(this.props.index, 1);
                  this.props.parentFlatList.refreshFlatList(deletingRow);
                  
                }
                  
                },
              ],
              { cancelable: true }
            );
          },
          text: 'Delete',
          type: 'delete',
        }
      ],
      rowId: this.props.index,
      sectionId: 1
    }

    return (

      <Swipeout {...swipeSettings} >
        <View >        
          {this.filterValues(this.itemName)}
        </View>
      </Swipeout>
    )
  }
}


const styles = StyleSheet.create({
  flexStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  container: {   
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
    alignItems: 'stretch',

  }
})


