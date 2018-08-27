import React from 'react';
import { View, TouchableOpacity, Text, ScrollView, StyleSheet, Image, Alert } from 'react-native';
import { Card, ListItem, Button, Icon, Rating } from 'react-native-elements';
import Review from './Rating';
import ApiKeys from '../../ApiKeys';

export default class RecipeCard extends React.Component {

  componentDidMount() {
    return fetch(`https://api.edamam.com/search?q=chicken&app_id=${ApiKeys.edamamConfig.APP_ID}&app_key=${ApiKeys.edamamConfig.API_KEY}&from=0&to=4`)
      .then( (response) => response.json())
      .then( (responseJson) => {
        
        this.setState({
          dataSource: responseJson.hits,
        });
      })

      .catch((error) => {
        console.error(error);
      });
  }

  render() {

    return(

    <View>
      <Card>
        <Text style={{marginBottom: 10}}>
          These are recipe ingredient!
        </Text>
        <Button
          icon={<Icon name='code' color='#ffffff' />}
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='Visit site' 
        />

        <Review />

      </Card>
    </View>

    )

  }

}