import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { Button } from 'react-native-elements'

export default class ProfileScreen extends React.Component {
  render() {
    return (

      <View style={styles.viewStyle}>
        <Text>PROFILE!</Text>
        <Button 
        title='Button'
        onPress={() => {this.props.navigation.navigate('Camera')}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1D8295',
  },
  imageStyle: {
    height: 300, 
    width: 300,
  },
    imageStyle2: {
    height: 100, 
    width: 200,
  }
});