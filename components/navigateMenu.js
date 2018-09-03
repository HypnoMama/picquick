import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MyCamera from './HomeScreen/Camera';
import { Icon } from 'react-native-elements';

const cameraStackNav = createStackNavigator({
  
  Camera: MyCamera,
  navigationOptions: {
    title: "MyCamera",
    headerRight: (
      <TouchableOpacity onPress={() => {navigation.navigate('Drawer')}}>
        <Icon name="menu" type='react-native-vector-icons' size={30} />
      </TouchableOpacity>
    )
  },
})

export default cameraStackNav;