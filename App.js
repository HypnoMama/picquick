import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Camera from './components/HomeScreen/Camera';
import HomeScreen from './components/HomeScreen/HomeScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HomeScreen />
      </View>
    );
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
