import React from 'react';
import { Image, View, ScrollView, Text, TouchableOpacity, FlatList, StyleSheet, TextInput, Platform, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Card, Button, Icon } from 'react-native-elements'; 
import Ingredient from './Ingredient';
import Modal from 'react-native-modal';

const screen = Dimensions.get('window');

export default class ModalScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      deletedRowKey: null,
      isModalVisible: false,
      newItemName: '',
      listItems: this.props.navigation.getParam('predictions'),
      recipeScreen: false,
      camera: false,
    }
    this.saveItem = this.saveItem.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.renderRecipeScreen = this.renderRecipeScreen.bind(this)
  }

  static navigationOptions = ({ navigation }) => {
    return {

      headerRight: (
        <TouchableOpacity onPress={() => {navigation.navigate('Camera')}}>
          <Icon name="user" type='font-awesome' size={30} paddingRight={8} />
        </TouchableOpacity>
      )
    };
  };
 
  refreshFlatList = (activeKey) => {
    this.setState((prevState) => {
      return {
          deletedRowKey: activeKey
      };        
    })
  } 
    
  _keyExtractor = (item, index) => item.id;
 
  toggleModal() {
    this.setState( { isModalVisible: !this.state.isModalVisible })
  }

  renderRecipeScreen(){
    this.setState( {recipeScreen: true })
  }

  saveItem(){
    const newItem = {
      name: this.state.newItemName,
      value: 1,
      id: this.state.newItemName
    }

    this.setState((prevState) => ({
      listItems: [...prevState.listItems, newItem]
    }))
    this.toggleModal(false)
  }

  render() {

    let theList = this.state.listItems

    const { navigation }  = this.props;

    return (

      <View style={styles.viewStyle}>
      
        <ScrollView containerStyle={{flex:1}}>

          <Card title="Ingredients" dividerStyle={{backgroundColor: '#4292A8'}} containerStyle={styles.cardStyle}>
            <FlatList 
              ref={'flatList'}
              data={this.state.listItems}
              keyExtractor={this._keyExtractor}
              extraData={this.state.listItems}
              renderItem={({item, index}) => (<Ingredient item={item} allItems={theList} index={index} parentFlatList={this} />)}
            />

            <Text>{' '}</Text>

            <Button onPress={() => {this.toggleModal()}} 
              title="Add item"
              buttonStyle={styles.buttonStyle}
              backgroundColor='#006578'>
            </Button>

            <Text>{' '}</Text>

             <Button onPress={() => {this.props.navigation.navigate('RecipeScreen', {listItems: this.state.listItems})}} 
              title="Confirm"
              buttonStyle={styles.buttonStyle}
              backgroundColor='#006578' >
            </Button>
          </Card>
         
          <Modal
            style={styles.modalStyle}
            isVisible = {this.state.isModalVisible}
            animationIn={'slideInLeft'}
            animationOut={'slideOutRight'}
            backdropColor={'black'}
            backdropOpacity={0.9}
            animationInTiming={1000}
            animationOutTiming={1000}
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={1000}
            onRequestClose = {() => {
              console.log("closed!")
          }}
          >
            
             <TextInput 
              style={styles.modalContent}
              placeholder="Add item"
              onChangeText={(text) => this.setState({ newItemName: text }) }
             />

              <Button
                title='Add'
                onPress = {() => {             
                  this.saveItem()
                }}
              >            
              </Button>

          </Modal>

        </ScrollView>
          <Logo navigation={this.props.navigation}/>
       </View>
    )
  }
}

class Logo extends React.Component {

  render() {

    return(
      <View style={{flex: 0, height: 100, flexDirection: 'column', marginTop: 0, alignItems: 'center', justifyContent: 'center', borderTopWidth: 1, backgroundColor: '#006578' }}>
        {/*<Image style={styles.imageStyle} resizeMode={'contain'} source={require('./../../../assets/edamam.png')} />*/}
        <Button onPress={() => {this.props.navigation.navigate('Camera')}} 
          title="Confirm"
          buttonStyle={styles.buttonStyle}
          backgroundColor='#006578' >
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  viewStyle: {
    backgroundColor: '#1D8295',
    height: '100%',
    width: '100%',
    justifyContent: 'center'
  },
  buttonStyle: {
    marginLeft: 0, 
    marginRight: 0, 
    marginBottom: 0, 
    borderRadius: 8,
    borderWidth: 1,
  },
  modalStyle: {
    shadowRadius: 10,
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
  },
  cardStyle: {
    backgroundColor: '#FFFAF0',
    borderRadius: 10,
  },
  imageStyle: {
    width: 200,
    paddingBottom: 40,
  }
})


