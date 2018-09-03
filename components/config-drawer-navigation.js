import React from "react";
import { createDrawerNavigator, contentComponent, DrawerItems } from "react-navigation";
import DrawerContent from "./Sidebar";
import HomeScreen from './HomeScreen/HomeScreen';
import ModalScreen from './HomeScreen/Modal/Modal';
import RecipeScreen from './RecipeScreen/RecipeScreen';
import MyCamera from './HomeScreen/Camera';
import PropTypes from 'prop-types';
import { Button, View, Text } from 'react-native';
// import cameraStackNav from './navigateMenu';


const Drawer = createDrawerNavigator({

  Camera: {
    screen: DrawerContent,
  },
  // contentComponent: DrawerContent,
  // drawerPosition: 'right'
},

{
  // contentComponent: (props) => (
  //   <View>
  //     <DrawerContent {...props} />
  //   </View>

  contentComponent: DrawerContent
  // drawerOpenRoute: 'DrawerOpen'
}
)
    


  // DrawerItem: {
  //   screen: DrawerContent
  // }
  // },
  //   {contentComponent: (props) => (
  //         <View>
  //           <DrawerItems {...props} />
  //         </View>
  //       ),

  // contentComponent: DrawerContent,

  

    // drawerWidth: '250',
    // {
    //   initialRouteName: 'camera',
    //   contentComponent: DrawerContent,
    //   drawerPosition: 'right',
    //   drawerOpenRoute: 'DrawerOpen',
    //   drawerCloseRoute: 'DrawerClose',
    //   drawerToggleRoute: 'DrawerToggle'
    // }
    
  
  

  // content: {
  //   screen: DrawerContent,
  // }

// {
//   contentComponent: (props) => (
//     <View>
//       <Text>Hey</Text>
//       <DrawerContent {...props} />
//     </View>
//   ),
//     // drawerWidth: 250,
//     drawerPosition: 'left',
//     drawerOpenRoute: 'DrawerOpen',
//     drawerCloseRoute: 'DrawerClose',
//     drawerToggleRoute: 'DrawerToggle',
//   },

  


// Drawer.navigationOptions = {
//   title: 'Camera',
//   header: () => ({
//     right: (
//       <Button title={'Drawer'} />
//     )
//   })
// }

// DrawerContent.propTypes = {
//   navigation: PropTypes.object
// };

export default Drawer;
