import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Ingredient from './Ingredient';



export default class Modal extends React.Component {

  listItems = this.props.predictions.outputs[0].data.concepts;
  _keyExtractor = (item, index) => item.id;


  renderItems(listItems) {
    return listItems.map(listItem => <Ingredient item={listItem} key={listItem.value} />);    
  }

  render() {
   

    return (
      <View >
      
        <Text style={{paddingTop: 50}}>Hello I am a Modal!!!</Text>
        <Text>Booyah</Text>
        <FlatList 
          data={this.listItems}
          keyExtractor={this._keyExtractor}
          extraData={this.state}
          renderItem={({item}) => (<Ingredient item={item} />)}
        
        />
        {/* {this.renderItems(this.listItems)} */}
      </View>
    )
  }
}