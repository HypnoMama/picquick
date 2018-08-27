import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../Header';
import RecipeCard from './RecipeCard'

export default class RecipeScreen extends React.Component {

  render() {

    return(

    <View style={styles.container}>
      <Header />

        {/*{theComponent}*/}
        <RecipeCard />
    
      </View>

    )

  }

}
