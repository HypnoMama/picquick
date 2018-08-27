import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image, Alert } from 'react-native';
import { Card, ListItem, Button, Icon, Rating } from 'react-native-elements';
import Header from '../Header';
import ApiKeys from '../../ApiKeys';
import RecipeCard from './RecipeCard'

export default class RecipeScreen extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount() {
    return fetch(`https://api.edamam.com/search?q=chicken&app_id=${ApiKeys.edamamConfig.APP_ID}&app_key=${ApiKeys.edamamConfig.API_KEY}&from=0&to=4`)
      .then( (response) => response.json())
      .then( (responseJson) => {
        console.log(responseJson);
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
      })

      .catch((error) => {
        console.error(error);
      });
  }

  render() {

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(

    <View style={styles.container}>
      <Header />

        {/*{theComponent}*/}
        <RecipeCard />
    
      </View>

    )

  }

}
