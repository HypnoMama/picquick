import React from 'react';
import { NavigationActions, navigation, DrawerActions } from 'react-navigation';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';



// const screen = Dimensions.get('window');

export default class DrawerContent extends React.Component {

  // navigateToScreen = (route) => {
  //   const navigateAction = NavigationActions.navigate({
  //     routeName: route
  //   });
  //   // this.props.navigation.navigate(navigateAction)
  //   this.props.navigation.dispatch(navigateAction);
  //   // this.props.navigation.navigate(route)
  //   this.props.navigation.dispatch(DrawerActions.closeDrawer())
  // }

  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,   
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    this.setState( { isModalVisible: !this.state.isModalVisible })
  }


  render() {

    console.log("we are here in Drawer content!")

    return (

      <View>
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
      }}>
          <ScrollView>
            
            <Button
            raised
            icon={{name: 'trash-o', type: 'font-awesome', size: 20}}
            title='Camera'
            
            //  onPress={this.navigateToScreen('Camera')}/>
            onPress={() => {this.props.navigation.navigate('Camera')}}/>
            
            {/* <Button
            raised
            icon={{name: 'umbrella', type: 'font-awesome', size: 20}}
            title='ModalScreen'
            
            onPress={this.navigateToScreen('ModalScreen')}/>

            <Button
            raised
            icon={{name: 'user-circle', type: 'font-awesome', size:20}}
            title='Recipes'
            
            onPress={this.navigateToScreen('RecipeScreen')}/> */}
          </ScrollView>
        </Modal>
      </View>




    )
  }


}

// const styles = create StyleSheet({
//   viewStyles: {
//     screenWidth
//   }
// })

// DrawerContent.propTypes = {
//   navigation: PropTypes.object
// };