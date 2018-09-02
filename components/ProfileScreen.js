import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid"; 
import RecipeCard from './components/RecipeScreen/RecipeCard';

export default class ProfileScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user:  '',
      recipes: ''
    }
  }
  
  
  getSavedRecipes() {
    fetch('https://picquick.herokuapp.com/recipes', {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({user: responseJson.username, recipes: responseJson.recipes})
    })
    .catch((error) => {
      console.error(error);
    });
  }
  
  
  render() {



    return (

      <View style={styles.viewStyle}>
        <Grid>

          <Row size={1}>

            <Col size={1}>
              <Image style={styles.imageStyle} source={require('./../assets/logo.png')} />
            </Col>

            <Col size={1}>
              <Text style={styles.textStyle}>{this.props.user}</Text>
            </Col>

          </Row>

          <Row size ={3}>

            <Col style={styles.profileStyle}>
              <Button 
              title='Take a Pic'
              onPress={() => {this.props.navigation.navigate('Camera')}}
              />
              <Text>{ ' ' }</Text>
               <Button 
              title='Log Out'
              onPress={() => {this.props.navigation.navigate('HomeScreen')}}
              />

              {/* </RecipeCard> */}
            </Col>

            
             
  

          </Row>
        </Grid>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  viewStyle: {
    flex: 1,
    backgroundColor: '#1D8295',
  },
  imageStyle: {
    borderWidth: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#1D8295',
  },
  textStyle: {
    borderWidth: 1,
  },
  profileStyle: {
    borderWidth: 1,
  },
  avatarStyle: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
  }
});