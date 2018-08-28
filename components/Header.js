import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Expo, Font } from 'expo';
import { Header, Icon } from 'react-native-elements';

export default class TheHeader extends React.Component {

  state = {
    fontLoaded: false,
    backButtonVisible: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'header-font': require('./../assets/fonts/JosefinSans-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  toggleBackVisible = (visible) => {
    this.setState({backButtonVisible: visible})
  }


  render() {


    return (
      // <View style={styles.viewStyle}>
      // {
      //   this.state.fontLoaded ? (<Text style={styles.textStyle}>picQuik</Text>) : null
      // }

      // {
      //   this.toggleBackVisible(this.props.backVisible)
      // }
      // {this.state.backButtonVisible &&
      //  <View><Text>X</Text></View>
      
      // }
      // </View>

      <View >

      
      {this.state.fontLoaded ? 
    
        (<Header
          leftComponent={<Icon name='chevron-left' type='entypo'/>}
          centerComponent={{ text: 'picQuick', style: styles.textStyle }}
          outerContainerStyles={{ backgroundColor: '#025265', justifyContent: 'center'}}
        />)
        : null
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