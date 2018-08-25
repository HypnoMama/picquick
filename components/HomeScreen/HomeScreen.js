import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import MyCamera from './Camera';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <MyCamera />
      </View>
  )}
}