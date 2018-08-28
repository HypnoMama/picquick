import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Expo, Font } from 'expo';

export default class Header extends React.Component {

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'header-font': require('./../assets/fonts/JosefinSans-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={styles.viewStyle}>
      {
        this.state.fontLoaded ? (<Text style={styles.textStyle}>picQuik</Text>) : null
      }
      </View>
    )
  }

}

const styles = StyleSheet.create({
  textStyle: {
    paddingTop: 20,
    fontSize: 40,
    color: '#A2E4F4',
    backgroundColor: '#025265',
    height: 80,
    textAlign: 'center',
    fontFamily: 'header-font',
  },
  viewStyle: {
    alignItems: 'stretch',
    justifyContent: 'center',
  }
});