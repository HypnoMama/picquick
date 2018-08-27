import React from 'react';
import { View, Text, FlatList, Button, Modal, StyleSheet, TextInput, Platform, Dimensions } from 'react-native';
import Ingredient from './Ingredient';
import AddItemText from './TextInput';
// import RealModal from '../../RealModal';

const screen = Dimensions.get('window');

export default class ModalScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      deletedRowKey: null,
      modalVisible: false,
      newItemName: '',
      listItems: this.props.predictions.outputs[0].data.concepts,
    }
    this.saveItem = this.saveItem.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
  }
 
  refreshFlatList = (activeKey) => {
    this.setState((prevState) => {
      return {
          deletedRowKey: activeKey
        };   
    })
    // this.refs.flatList.scrollToEnd();
  } 

  // listItems = this.props.predictions.outputs[0].data.concepts;
    
  _keyExtractor = (item, index) => item.id;

 
  toggleModal(visible) {
    this.setState( { modalVisible: visible })
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
   
    console.log("Here are our listItems in the state: ", this.state.listItems)
    return (
      <View >

       
        <Button onPress={() => {this.toggleModal(true)}} 
                title="Add item"
                containerStyle={styles.container} >
        </Button>
       
        <FlatList 
          ref={'flatList'}
          data={this.state.listItems}
          keyExtractor={this._keyExtractor}
          extraData={this.state.listItems}
          renderItem={({item, index}) => (<Ingredient item={item} allItems={theList} index={index} parentFlatList={this} />)}        
        />

        {/* <RealModal modalVisible={this.state.modalVisible} toggleModal={this.toggleModal} ref={'realModal'} allItems={this.listItems} parentFlatList={this} /> */}
        
       
        <Modal
         
          visible = {this.state.modalVisible}
          onRequestClose = {() => {
            console.log("closed!")
        }}
          animationType={"slide"}
        >
         <View  style={
            {
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              borderRadius: Platform.OS === 'ios' ? 30 : 0,
              shadowRadius: 10,
              width: 300,
              height: 280
              
            }}>
          
           <TextInput 
            style={{height: 40}}
            placeholder="Add item"
            onChangeText={(text) => this.setState({ newItemName: text }) }
           />
            <Button 
            title='save'
            onPress = {() => {             
              this.saveItem()
            } }
            
            >            
            </Button>
          </View>


        </Modal>
        
 
      </View>
    )
  }
}
<<<<<<< HEAD

const styles = StyleSheet.create ({
  container: {
    marginRight: 80,
    marginLeft: 80,
    borderRadius: 6,
    backgroundColor: 'pink'

  },
  modalStyle: {
    justifyContent: 'center',
    borderRadius: Platform.OS === 'ios' ? 30 : 0,
    shadowRadius: 10,
    width: screen.width - 80,
    height: 280
  },
  buttonStyle: {
    fontSize: 18, color: 'white'
  },
  buttonContainer: {
    padding: 8,
    marginLeft: 70,
    marginRight: 70,
    height: 40, 
    borderRadius: 6,
    backgroundColor: 'mediumseagreen'
  }
})
=======
>>>>>>> master
