import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, FlatList, Button, StyleSheet, TextInput, Platform, Dimensions } from 'react-native';
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
    console.log(this.state.listItems)
    

    return (

      
      
      <ScrollView>

        <View>
       
          <FlatList 
            ref={'flatList'}
            data={this.state.listItems}
            keyExtractor={this._keyExtractor}
            extraData={this.state.listItems}
            renderItem={({item, index}) => (<Ingredient item={item} allItems={theList}index={index} parentFlatList={this} />)}        
          />

          <Button onPress={() => {this.toggleModal()}} 
            title="Add item"
            containerStyle={styles.container}>
          </Button>

          <Text>{' '}</Text>

           <Button onPress={() => {this.props.navigation.navigate('RecipeScreen', {listItems: this.state.listItems})}} 
            title="Confirm"
            containerStyle={styles.container} >
          </Button>
         
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

        </View>

        </ScrollView>
    )
      }
 
      
  }

  


const styles = StyleSheet.create ({
  container: {
    marginRight: 80,
    marginLeft: 80,
    borderRadius: 6,
    backgroundColor: 'pink'
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
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  buttonStyle: {
    fontSize: 18, color: 'white'
  }
})
