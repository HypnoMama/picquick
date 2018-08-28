import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Button, StyleSheet, TextInput, Platform, Dimensions } from 'react-native';
import Ingredient from './Ingredient';
import AddItemText from './TextInput';
import RecipeScreen from '../../RecipeScreen/RecipeScreen';
import Modal from 'react-native-modal';
// import RealModal from '../../RealModal';

const screen = Dimensions.get('window');

export default class ModalScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      deletedRowKey: null,
      isModalVisible: false,
      newItemName: '',
      listItems: this.props.predictions.outputs[0].data.concepts,
      recipeScreen: false,
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
 
  toggleModal(visible) {
    this.setState( { isModalVisible: visible })
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

    return (

      <View>    
       
        <FlatList 
          ref={'flatList'}
          data={this.state.listItems}
          keyExtractor={this._keyExtractor}
          extraData={this.state.listItems}
          renderItem={({item, index}) => (<Ingredient item={item} allItems={theList}index={index} parentFlatList={this} />)}        
        />

        {this.state.recipeScreen && <RecipeScreen items={this.state.listItems} />}

        <Button onPress={() => {this.toggleModal()}} 
          title="Add item"
          containerStyle={styles.container} >
        </Button>

        <Text>{' '}</Text>

         <Button onPress={() => {this.renderRecipeScreen(true)}} 
          title="confirm"
          containerStyle={styles.container} >
        </Button>

        {/* <RealModal isModalVisible={this.state.isModalVisible} toggleModal={this.toggleModal} ref={'realModal'} allItems={this.listItems} parentFlatList={this} /> */}
       
        <Modal
          style={styles.modalStyle}
          visible = {this.state.isModalVisible}
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
              title='save'
              onPress = {() => {             
                this.saveItem()
              }}
            >            
            </Button>

        </Modal>
 
      </View>
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
