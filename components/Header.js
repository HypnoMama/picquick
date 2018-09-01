import React from 'react';
import { View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native';
import { Expo, Font } from 'expo';
import { Header, Icon } from 'react-native-elements';

export default class TheHeader extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: false,
    }
  }
  
  async componentDidMount() {
    await Font.loadAsync({
      'header-font': require('./../assets/fonts/JosefinSans-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {

    const { navigation } = this.props;

    return (
      
      
      <View>

        {this.state.fontLoaded ? <Text style={styles.textStyle}></Text> : null}
        
      </View>

    )
  }
}

const styles = StyleSheet.create({
  textStyle: {
    paddingBottom: 35,
    fontSize: 39,
    color: '#A2E4F4',
    backgroundColor: '#1b8295',
    fontFamily: 'header-font',
    margin: 80,
  },
});
