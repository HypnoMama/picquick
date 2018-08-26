import React from 'react';
import { View, Text } from 'react-native';
import Ingredient from './Ingredient';


export default class Modal extends React.Component {

  listItems = this.props.predictions.outputs[0].data.concepts


  renderItems(listItems) {
    return listItems.map(listItem => <Ingredient item={listItem} key={listItem.value} />);    
  }

  render() {
   

    return (
      <View >
      
        <Text style={{paddingTop: 50}}>Hello I am a Modal!!!</Text>
        <Text>Booyah</Text>
        {this.renderItems(this.listItems)}
      </View>
    )
  }
}
