import React from 'react';
import { View, Text, TextInput, StyleSheet, ActivityIndicator, Image } from 'react-native';
import  Modal from 'react-native-modal';
import { Button }  from 'react-native-elements';

export default class OpeningScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      showLogin: false,
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

  toggleModal() {
    this.setState({ isModalVisible: !this.state.isModalVisible })
  }

  sendData() {
    this.toggleModal();
  }

  userExist() {
    fetch('https://picquick.herokuapp.com/register', {
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
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.props.storeUser(this.state.newUserName);
      this.props.storeId(responseJson.Response)
      this.props.retrieveUser();
      this.props.retrieveId();
    })
    .catch((error) => {
      console.error(error);
    });
    this.setState({ isModalVisible: !this.state.isModalVisible })
  }

  passMatch() {

    !this.state.newUserPass || !this.state.confirmNewUserPass
    ? alert('Password fields cannot be blank')
    : this.state.newUserPass != this.state.confirmNewUserPass 
    ? alert('Passwords must match!')
    : this.userExist()
  }

  userLogin() {
    return fetch('https://picquick.herokuapp.com/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userEmail: this.state.email,
        userPass: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        this.props.storeUser(responseJson.Response[0].userName);
        this.props.storeId(responseJson.Response[0].uuid);
        this.props.retrieveUser();
        this.props.retrieveId();
        // this.props.loggedIn(responseJson.Response[0].uuid, responseJson.Response[0].userName)
      });
  }

  checkLogin() {
    (!this.state.email || !this.state.password) ?
    alert('Fields cannot be blank')
    :
    this.userLogin()
  }

  checkNewUser() {
    (!this.state.newUserEmail || !this.state.newUserName) ?
    alert('Fields cannot be blank')
    :
    this.passMatch();
  }

  render() {

    return (

      <View style={styles.viewStyle}>
        
        <Image style={styles.imageStyle} source={require('./../assets/logo.png')} />

        <TextInput 
          placeholder="Email"
          height={40}
          width={'70%'}
          borderWidth={1}
          marginBottom={8}
          borderRadius={4}
          //backgroundColor={'#fffaf0'}
          textAlign={'center'}
          onChangeText={(text) => this.setState({ email: text }) }
        />

        <TextInput 
          placeholder="Password"
          height={40}
          width={'70%'}
          borderWidth={1}
          marginBottom={8}
          borderRadius={4}
          //backgroundColor={'#fffaf0'}
          textAlign={'center'}
          onChangeText={(text) => this.setState({ password: text }) }
        />

        <Button
          title='Login'
          buttonStyle={styles.buttonStyle}
          onPress = {() => {             
           this.checkLogin();
          }}
          >            
        </Button>

        <Button
          title='Register'
          buttonStyle={styles.buttonStyle}
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
            placeholder="Username"
            height={40}
            borderWidth={1}
            marginBottom={8}
            borderRadius={4}
            //backgroundColor={'#fffaf0'}
            textAlign={'center'}
            onChangeText={(text) => this.setState({ newUserName: text }) }
           />
          
           <TextInput 
            placeholder="Email"
            height={40}
            borderWidth={1}
            marginBottom={8}
            borderRadius={4}
            //backgroundColor={'#fffaf0'}
            textAlign={'center'}
            onChangeText={(text) => this.setState({ newUserEmail: text }) }
           />

            <TextInput 
            placeholder="Password"
            height={40}
            borderWidth={1}
            marginBottom={8}
            borderRadius={4}
            //backgroundColor={'#fffaf0'}
            textAlign={'center'}
            onChangeText={(text) => this.setState({ newUserPass: text }) }
           />

            <TextInput 
            placeholder="Confirm Password"
            height={40}
            borderWidth={1}
            marginBottom={8}
            borderRadius={4}
            //backgroundColor={'#fffaf0'}
            textAlign={'center'}
            onChangeText={(text) => this.setState({ confirmNewUserPass: text }) }
           />

            <Button
              title='Sign Up'
              buttonStyle={styles.buttonStyle}
              onPress = {() => {
                this.userExist();
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
  buttonStyle: {
    borderRadius: 0, 
    marginLeft: 0, 
    marginRight: 0, 
    marginBottom: 0, 
    borderRadius: 8, 
    borderWidth: 1, 
    backgroundColor: '#006578',
    marginBottom: 8,
    width: 120,
    alignSelf: 'center'
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