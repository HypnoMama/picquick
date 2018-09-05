import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen/HomeScreen';
import { createStackNavigator } from 'react-navigation';
import MyCamera from './components/HomeScreen/Camera';
import RecipeScreen from './components/RecipeScreen/RecipeScreen';
import ModalScreen from './components/HomeScreen/Modal/Modal';
import TheHeader from './components/Header';
import ProfileScreen from './components/ProfileScreen';
import OpeningScreen from './components/OpeningScreen';
import { Image } from 'react-native';


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Camera: MyCamera,
    ModalScreen: ModalScreen,
    RecipeScreen: RecipeScreen,
    ProfileScreen: ProfileScreen,
    OpeningScreen: OpeningScreen,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: ({ navigation }) => ({

      headerStyle: {
        backgroundColor: '#1b8295',
      },
      headerTitleStyle: {
        textAlign: 'center'
      }
    })
  }
)

export default class App extends React.Component {
  render() {
    return ( <RootStack /> )
  }
}


