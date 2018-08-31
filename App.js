import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Button } from 'react-native';
import HomeScreen from './components/HomeScreen/HomeScreen';
import { createStackNavigator, createDrawerNavigator, DrawerItems, DrawerActions } from 'react-navigation';
import MyCamera from './components/HomeScreen/Camera';
import RecipeScreen from './components/RecipeScreen/RecipeScreen';
import ModalScreen from './components/HomeScreen/Modal/Modal';
import TheHeader from './components/Header';
import Drawer from './components/config-drawer-navigation';
import { Icon } from 'react-native-elements';
import DrawerContent from "./components/Sidebar";




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

  // state = {
  //   fontLoaded: false,
  // }

  // async componentDidMount() {
  //   await Expo.Font.loadAsync({
  //     'header-font': require('./assets/fonts/JosefinSans-Regular.ttf'),
  //   });

  //   this.setState({ fontLoaded: true });
  // }

  render() {

    
    return ( 
    

     
        <RootStack /> 
        
        
        
        
      
      // this.state.fontLoaded ?
    
    )
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Camera: MyCamera,
    // Drawer: Drawer,
    // Drawer: DrawerContent,
    ModalScreen: {
      screen: ModalScreen
      // navigationOptions: ({navigation}) => ({
        
      //   headerRight: (
      //     <TouchableOpacity onPress={() => {navigation.navigate('Drawer')}}>
      //       <Icon name="menu" type='react-native-vector-icons' size={30} />
      //     </TouchableOpacity>
      //   )
  
      // })
    },
    DrawerScreen: {
      screen: DrawerContent
    },
    RecipeScreen: RecipeScreen,  
      
  },
  {
    initialRouteName: 'Home',
    navigationOptions: ({ navigation }) => ({
      headerTitle: <TheHeader />,
      headerStyle: {
        backgroundColor: '#1b8295'
      },
     
      
    })
  }
);







// #1b8295


// const drawer = createDrawerNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
//   Picture: {
//     screen: MyCamera,
//   },
//   ModalScreen: {
//     screen: ModalScreen,
//   },
//   contentComponent: (props) => (
//         <View>
//           <TheHeader/>
//           <DrawerItems {...props} />
//           <Text>Custom Footer</Text>
//         </View>
//   )
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const headerStyles = StyleSheet.create({
  textStyle: {
    paddingTop: 25,
    fontSize: 40,
    color: '#A2E4F4',
    backgroundColor: '#025265',
    height: 80,
    textAlign: 'center',
    // fontFamily: 'header-font',
  },
  viewStyle: {  
    alignItems: 'stretch',
    justifyContent: 'center',
  }
});

