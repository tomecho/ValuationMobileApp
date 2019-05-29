import React from 'react';
import { Button, Text } from 'react-native';
import { ImagePicker } from 'expo';

export class Uploader extends React.Component {
  static defaultProps = {
    onChange: () => undefined,
  }

  _handleImageUpload = () => {
    ImagePicker.launchImageLibraryAsync({
      base64: true
    }).then(onChange);
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
