import React from 'react';
import { View, Text, TextInput, StyleSheet, ActivityIndicator, Image } from 'react-native';
import  Modal   from 'react-native-modal';
import { Button }  from 'react-native-elements';

export default class OpeningScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      email: '',
      password: '',
      newUserName: '',
      newUserEmail: '',
      newUserPass: '',
      confirmNewUserPass: '',
    }
    this.toggleModal=this.toggleModal.bind(this);
    this.userExist = this.userExist.bind(this);
    this.passMatch = this.passMatch.bind(this);
  }

  users = [
    {
      userName: 'Sarah',
      email: 'test@test.com',
      password: 'test',
      passwordConfirm: 'test'
    },
    {
      userName: 'Sam',
      email: 'sam@sam.com',
      password: 'test',
      password: 'test'
    }
  ]

  toggleModal() {
    this.setState( { isModalVisible: !this.state.isModalVisible })
  }

  userExist() {
    return fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        newUserName: this.state.newUserName,
        newUserEmail: this.state.newUserEmail,
        newUserPass: this.state.newUserPass,
        confirmNewUserPass: this.state.confirmNewUserPass,
    })
    .then((response) => response.json())
    .then((responseJson) => {
      return console.log('we got a response!')
    })  
    .catch((error) => {
      return console.log("error!!")
    })
    
  })
    this.users.forEach((user) => {
      user.email === this.state.newUserEmail 
      ? alert('You already have an account: Please Log In or Create New Account')
      : alert('thank you for signing up!')
      
    // })
    this.toggleModal()
  }

  passMatch() {

    !this.state.newUserPass || !this.state.confirmNewUserPass
    ? alert('Password fields cannot be blank')
    : this.state.newUserPass != this.state.confirmNewUserPass 
    ? alert('Passwords must match!')
    : this.userExist()
  }

  sendData() {
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

         <Button
            title='Sign Up'
            onPress = {() => {             
             this.toggleModal()
            }}
          >            
         </Button>

          <Modal
            style={styles.modalStyle}
            isVisible = {this.state.isModalVisible}
            animationIn={'slideInLeft'}
            animationOut={'slideOutRight'}
            backdropColor={'white'}
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
              placeholder="Username"
              onChangeText={(text) => this.setState({ newUserName: text }) }
             />
            
             <TextInput 
              placeholder="Email"
              onChangeText={(text) => this.setState({ newUserEmail: text }) }
             />

              <TextInput 
              placeholder="Password"
              onChangeText={(text) => this.setState({ newUserPass: text }) }
             />

              <TextInput 
              placeholder="Confirm Password"
              onChangeText={(text) => this.setState({ confirmNewUserPass: text }) }
             />

            

              <Button
                title='Sign Up'
                onPress = {() => {
                  this.passMatch()
                  
                  
                }}
              >            
              </Button>

          </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
  },
  modalStyle: {
    shadowRadius: 10,
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
});