import React from 'react';
import { Button, ImagePickerIOS, Text } from 'react-native';

export class Uploader extends React.Component {
  static defaultProps = {

  }

  _handleImageUpload = () => {
    // CameraRoll.getPhotos({
    //   assetType: "Photos",
    //   first: 20
    // }).then(r => {
    //   this.setState({ photos: r.edges });
    // });
    ImagePickerIOS.openSelectDialog();
  }

  render() {
    return (
      <>
        <Text>Upload a picture of the thing you want to valuate.</Text>
        <Button title="Load Image" onPress={this._handleImageUpload} />
      </>
    );
  }
}
