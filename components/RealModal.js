import React from 'react';
import { Modal, Text, TouchableHighlight, View, Button, StyleSheet, Dimensions, Platform } from 'react-native';
// import AddItemText from './HomeScreen/Modal/TextInput';

const screen = Dimensions.get('window');

export default class RealModal extends React.Component {

  constructor(props) {
    super(props)
    // this.state = {
    //   modalVisible: false,
    // }
    
  }

  allItems = this.props.allItems
  parentFlatList = this.props.parentFlatList

 

  render() {

    return (
      <View>

      <Modal  
          ref='realModal'
          style={styles.modalStyle}
          position='center'
          backdrop={true}
          visible={this.props.modalVisible}
          onRequestClose={() => {
            alert("modal is closed for business")
          }}
      >

        <AddItemText />

        <Button style={styles.buttonStyle}
                containerStyle={styles.buttonContainer}
                title="Save"
                onPress={() => {
                  this.state.newItem.length === 0 
                  ? alert('Cannot save blank item') 
                  : null  
                  const newItem = {
                    key: this.state.newItem,
                    name: this.state.newItem
                  } 
                  allItems.push(newItem)
                  this.props.parentFlatList.refreshFlatList(newFood.key)
                  this.refs.realModal   
                  this.refs.realModal.close()                     
                }
                }
        > 
        Save
        </Button>

      </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
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