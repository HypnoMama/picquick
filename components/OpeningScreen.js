import React from 'react';
import { View, Text, TextInput, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { Modal } from 'react-native-modal';
import { Button } from 'react-native-elements';

export default class OpeningScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isModalVisible: false,
      email: '',
      password: '',
    }
    this.toggleModal=this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState( { isModalVisible: !this.state.isModalVisible })
  }

  sendData(){
    //Send data to server
    this.toggleModal();
  }

  render() {
    return (

      <View>
        <Image style={styles.imageStyle} source={require('./../assets/logo.png')} />
        <TextInput 
          placeholder="Email"
          onChangeText={(text) => this.setState({ email: text }) }
        />
        <TextInput 
          placeholder="Password"
          onChangeText={(text) => this.setState({ password: text }) }
        />

          <Modal
            isVisible = {this.state.isModalVisible}
            animationIn={'slideInLeft'}
            animationOut={'slideOutRight'}
            backdropColor={'black'}
            backdropOpacity={0.9}
            animationInTiming={1000}
            animationOutTiming={1000}
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={1000}
            onRequestClose = {() => {
              console.log("closed!")
          }}
          >
            
             <TextInput 
              placeholder="Add item"
              onChangeText={(text) => this.setState({ newItemName: text }) }
             />

              <Button
                title='Add'
                onPress = {() => {             
                  console.log('Hello')
                }}
              >            
              </Button>

          </Modal>
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