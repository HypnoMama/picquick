import React from 'react';
import { AsyncStorage, View, Text, StyleSheet, ActivityIndicator, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { Card, ListItem, Button, Rating } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
import Icon from 'react-native-vector-icons';

export default class ProfileScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  getSavedRecipes(userId) {    
    fetch(`https://picquick.herokuapp.com/user/${userId}/recipes`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({recipes: responseJson.Response})
      console.log(this.state.recipes)
    })
    .catch((error) => {
      console.error(error);
    });
  }

  componentWillMount() {
    AsyncStorage.getItem("uuid").then((value) => {
      this.setState({"uuid": value});
      this.getSavedRecipes(value);
    }).done();
    AsyncStorage.getItem('user').then((user) => {
      this.setState({'user': user})
    })
  }


  render() {


    let recipeList;

    if (this.state.recipes) {

      let recipe = this.state.recipes;
      recipeList = recipe.map( (each, index) =>
          <Card containerStyle={styles.cardStyle} title={each.label} key={index}>

            <Image source={{uri: each.image }} style={{width: 100, height: 100, borderWidth: 1}} resizeMode={'center'}/>
            
            <Text>{' '}</Text>

            <Button
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, borderRadius: 8, borderWidth: 1, backgroundColor: '#006578' }}
              title='View'
              onPress = { ()=>{ Linking.openURL(each.recipes)} }
            />
          </Card>
      );
    }

    return (

      
      <View style={styles.viewStyle}>
        <Grid>
  
            <Row size={2} style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image style={styles.imageStyle} resizeMode='contain' source={require('./../assets/logo-full.png')} />
            </Row>

            <Row size={1} style={{backgroundColor: '#1B8295', alignItems: 'center', justifyContent: 'center'}}>

            <Col size={1}>
              {/*<Image style={styles.imageStyle} source={require('./../assets/logo.png')} />*/}
              <Text style={styles.textStyle}>{this.state.user}</Text>

            </Col>

            <Col size={1}>
              <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center',}}>
                <Button 
                title='Logout'
                fontSize={15}
                
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, borderRadius: 8, backgroundColor: '#1B8295' }}
                onPress={() => {this.props.logout()}}
                />
              </View>

            </Col>

          </Row>

          <Row size ={7}>

            <Col style={styles.profileStyle}>
              <Button 
                title='Take a Pic'
                icon={{ type: 'evilicon', name: 'camera', size: 40 }}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginTop: 10, marginBottom:10, borderRadius: 8, borderWidth: 1, backgroundColor: '#006578' }}
                fontSize={25}
                onPress={() => {this.props.navigation.navigate('Camera')}}
              />
              <View style={{borderBottomWidth: 1, width: '100%', alignItems: 'center'}}>
                
              </View>
              <ScrollView style={{width: '100%', backgroundColor: '#006578'}}>
                <Text>{' '}</Text>
                <Text style={{alignSelf: 'center', color: '#FFFAF0', fontSize: 15}}>Saved Recipes</Text>
                {recipeList}
              </ScrollView>

            </Col>

          </Row>
        </Grid>

      </View>
      
    )
  }
}

export class RecipeIngredients extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    let ingredientList = this.props.data;
    let ingredientItem = ingredientList.map( (each, index) => {
      return <Text key={index}>{each.text}</Text>
    });

    return (

      <View>

        {ingredientItem}

      </View>
    )
  }
}

const styles = StyleSheet.create ({
  viewStyle: {
    flex: 1,
    backgroundColor: '#1D8295',
  },
  cardStyle: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFAF0',
    borderRadius: 10,
    width: '70%',
  },
  imageStyle: {
    alignSelf: 'center',
    width: 150,
    backgroundColor: '#1B8295',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 40,
    color: '#FFFAF0',
    //borderWidth: 1,
  },
  profileStyle: {
    //borderWidth: 1,
    alignItems: 'center',
  },
  avatarStyle: {
    backgroundColor: '#ffffff',
    //borderWidth: 1,
  }
});