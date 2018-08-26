import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../Header';

export default class Modal extends React.Component {

  listItems = this.props.predictions.outputs[0].data.concepts


  renderItems(listItems) {;
    return listItems.map(listItem => <Text>{listItem.name}</Text>);    
  }

  render() {

    // {console.log(listItems)}

    // const renderItems = (listItems) = {
    //   listItems.map((listItem) => {
    //     return <Ingredient name={listItem.name} value={listItem.value} />
    //   });
    // }

   

    return (
      <View >
      
        <Text style={{paddingTop: 50}}>Hello I am a Modal!!!</Text>
        <Text>Booll</Text>
        {this.renderItems(this.listItems)}
        {/* <Text>{console.log({this.props.predictions})</Text> */}
      </View>
    )
  }
}