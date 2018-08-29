import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Expo, Font } from 'expo';
import { Header, Icon } from 'react-native-elements';

export default class TheHeader extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: false,
      backButtonVisible: false,
    };
    this.goneBack1 = this.goneBack1.bind(this)
  
  }

  screen = this.props.screen
  
  async componentDidMount() {
    await Font.loadAsync({
      'header-font': require('./../assets/fonts/JosefinSans-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  toggleBackVisible = (visible) => {
    this.setState({backButtonVisible: visible})
  }

 goneBack1 = (screen) => {

  //  this.props.goneBackToCamera ? this.props.goneBackToCamera() : this.props.goBackToModalScreen()
  // this.props.goBacktoModalScreen() ? this.props.goBacktoModalScreen() : this.props.goneBackToCamera()
  screen === 'camera' ?
  this.props.goneBackToCamera()
  : this.props.goBackToModalScreen()
 }


  render() {


    return (
      

      <View >

      
      {this.state.fontLoaded ? 
    
        (<Header
          statusBarProps={{ barStyle: 'light-content', hidden: true }}
          leftComponent={<Icon name='chevron-left' type='entypo' paddingTop='0' onPress={() => {this.goneBack1(this.screen)} }/> }
          // leftComponent={{icon: 'arrow-bold-left', type: 'entypo', style: {margin: 20 }}}
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
    paddingTop: 25,
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