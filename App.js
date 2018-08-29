import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen/HomeScreen';
import { createStackNavigator } from 'react-navigation';
import MyCamera from './components/HomeScreen/Camera';
import RecipeScreen from './components/RecipeScreen/RecipeScreen';
import ModalScreen from './components/HomeScreen/Modal/Modal'


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Camera: MyCamera,
    ModalScreen: ModalScreen,
    RecipeScreen: RecipeScreen,    
  },
  {
    initialRouteName: 'Home'
  }
);


export default class App extends React.Component {

  // componentDidMount() {
  //   this.callBackendAPI()
  //     .then(res => this.setState({ data: res.express }))
  //     .catch(err => console.log(err));
  // }

  // callBackendAPI = async () => {
  //   const response = await fetch('/express_backend');
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message) 
  //   }
  //   return body;
  // };

  render() {
    return ( <RootStack />)
      // <View style={styles.container}>
      //   <HomeScreen />
      // </View>

     

  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

