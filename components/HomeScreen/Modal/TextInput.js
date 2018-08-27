import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default class AddItemText extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        text: ''
      }
    }

  render() {


    return(

      <View style={styles.container}>
        <TextInput onChangeText={(text) => this.setState({text})}>
        <Text>
          {this.state.text}
        </Text>
        </TextInput>
      </View>


    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#4292A8',
    height: 60,
  }
})