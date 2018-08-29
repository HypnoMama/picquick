import React from 'react';
import { ScrollView, Text, View, ActivityIndicator, StyleSheet, Image, Alert } from 'react-native';
import { Card, ListItem, Button, Icon, Rating } from 'react-native-elements';
import Header from '../Header';
import ApiKeys from '../../ApiKeys';
import RecipeCard from './RecipeCard';
import TheHeader from '../Header';


export default class RecipeScreen extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  buildRequest() {
    let items = this.props.items
    let searchString = ''
    items.forEach((item) => {
      searchString += `${item.name}&`
    })    
    return searchString
  }

  componentDidMount() {
    const searchItems = this.buildRequest();

    return fetch(`https://api.edamam.com/search?q=${searchItems}app_id=${ApiKeys.edamamConfig.APP_ID}&app_key=${ApiKeys.edamamConfig.API_KEY}&from=0&to=4`)
      .then( (response) => response.json())
      .then( (responseJson) => {
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
          <ActivityIndicator />
        </View>
      )
    }

    return(
      
      <ScrollView>

        <TheHeader screen='modal' goBackToModalScreen={this.props.goBackToModalScreen}/>

        <RecipeCard data={this.state.dataSource}/>
    
      </ScrollView>
      
    )
  }
}
