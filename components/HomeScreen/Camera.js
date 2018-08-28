import React from 'react';
import { Camera, Permissions, ImageManipulator } from 'expo';
import { Icon } from 'react-native-elements';
import { TouchableHighlight, StyleSheet, Text, View, ActivityIndicator, Alert, FlatList } from 'react-native';
import ApiKeys from '../../ApiKeys';

const Clarifai = require('clarifai');
const clarifai = new Clarifai.App({
  apiKey: ApiKeys.clarifaiConfig.API_KEY,
});
process.nextTick = setImmediate;

export default class MyCamera extends React.Component {

  state = {
    hasCameraPermission: null,
    predictions: [],
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  capturePhoto = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      return photo.uri;
    }
  };

  resize = async photo => {
    let manipulatedImage = await ImageManipulator.manipulate(
      photo,
      [{ resize: { height: 300, width: 300 } }],
      { base64: true }
    );
    return manipulatedImage.base64;
  };

  predict = async image => {
    let predictions = await clarifai.models.predict(
      Clarifai.FOOD_MODEL,
      image
    );
    return predictions;
    
  };

  detect = async () => {
    let photo = await this.capturePhoto();
    let resized = await this.resize(photo);
    let predictions = await this.predict(resized);    
    this.setState({ predictions: predictions.outputs[0].data.concepts});
    this.props.getPredictions(predictions);
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

          <Camera ref={ref => {this.camera = ref;}} style={{ flex: 1 }} type={this.state.type} >

                <FlatList style={styles.flatview}
                  data={predictions.map(prediction => ({
                    key: `${prediction.name} ${prediction.value}`,
                  }))}
                  renderItem={({ item }) => (
                    <Text style={{ paddingLeft: 15, color: 'white', fontSize: 20 }}>{item.key}</Text>
                  )}
                />

              <TouchableHighlight style={styles.cameraButton} activeOpacity={0.8} onPress={this.detect}>

                <Icon raised name='camera' color='black' />
              
              </TouchableHighlight>
          
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
    height: '100%',
    paddingBottom: '8%',
  }
});