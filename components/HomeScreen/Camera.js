import React from 'react';
import { Camera, Permissions, ImageManipulator } from 'expo';
import { Icon, Header } from 'react-native-elements';
import { ActivityIndicator, TouchableOpacity, FlatList, StyleSheet, Text, View } from 'react-native';
import ApiKeys from '../../ApiKeys';
import LoadingScreen from './../LoadingScreen'

const Clarifai = require('clarifai');
const clarifai = new Clarifai.App({
  apiKey: ApiKeys.clarifaiConfig.API_KEY,
});
process.nextTick = setImmediate;

export default class MyCamera extends React.Component {

  state = {
    hasCameraPermission: null,
    headerVisible: true,
    isLoading: false,
  }; 

  static navigationOptions = ({ navigation }) => {
    return {

      headerRight: (
        <TouchableOpacity onPress={() => {navigation.navigate('ProfileScreen')}}>
          <Icon name="user" type='font-awesome' size={30} paddingRight={20} />
        </TouchableOpacity>
      )
    };
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  capturePhoto = async () => {
    try {
      if (this.camera) {
        let photo = await this.camera.takePictureAsync();
        return photo.uri;
      }
    } catch (error) {
      console.log (error)
    }
  };

  resize = async photo => {
    try {
      let manipulatedImage = await ImageManipulator.manipulate(
        photo,
        [{ resize: { height: 300, width: 300 } }],
        { base64: true }
      );
    return manipulatedImage.base64;
        } catch (error) {
      console.log(error)
    };
  };

  predict = async image => {
    try {
      let predictions = await clarifai.models.predict(
        Clarifai.FOOD_MODEL,
        image
      );
      return predictions;
    } catch (error) {
      console.log(error)
    };
  };

  detect = async () => {
    this.setState({isLoading: true});
    let photo = await this.capturePhoto();
    let resized = await this.resize(photo);
    let predictions = await this.predict(resized);
    this.setState({isLoading: false});
    this.props.navigation.navigate('ModalScreen', {predictions: predictions.outputs[0].data.concepts})
  };

  render() {

    const { hasCameraPermission, predictions } = this.state;

    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {

      return <Text>Please Allow Camera Permissions</Text>;

    } else {

        return (
        
          <View style={{ flex: 1 }}>

              <Camera ref={ref => this.camera = ref} style={{ flex: 1 }} type={Camera.Constants.Type.back} >

                <FlatList style={styles.flatview} />

                <ActivityIndicator size="large" animating={this.state.isLoading} />

                <TouchableOpacity style={styles.cameraButton} onPress={this.detect}>

                  <Icon raised name='camera' color='black' />
                  
                </TouchableOpacity>
              
              </Camera>
          
          </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  flatview: {
    paddingTop: 30,
    borderRadius: 2,
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18,
  },
  cameraButton: {
    flex: 0.1,
    alignItems: 'center',
    height: '10%',
    paddingBottom: '8%',
  }
});