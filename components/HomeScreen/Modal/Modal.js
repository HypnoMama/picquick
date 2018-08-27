import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Ingredient from './Ingredient';



export default class Modal extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      deletedRowKey: null,
    }
  }
  
  listItems = this.props.predictions.outputs[0].data.concepts;
  _keyExtractor = (item, index) => item.id;


  renderItems(listItems) {
    return listItems.map(listItem => <Ingredient item={listItem} key={listItem.value} />);    
  }
 
  refreshFlatList(deletedKey) {
    this.setState((prevState) => {
      return {
        deletedRowKey: deletedKey
      }
    })
  } 

  listItems = this.props.predictions.outputs[0].data.concepts;
  
  _keyExtractor = (item, index) => item.id;

  render() {
   

    return (
      <View >
        <FlatList 
          data={this.listItems}
          keyExtractor={this._keyExtractor}
          extraData={this.state}
          renderItem={({item, index}) => (<Ingredient item={item} allItems={this.listItems} index={index} parentFlatList={this} />)}        
        />

      </View>
    )
  }
}
