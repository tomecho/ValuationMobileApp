import React from 'react';
import { Button, ImagePickerIOS, Text } from 'react-native';

export class Uploader extends React.Component {
  static defaultProps = {
    onChange: () => undefined,
  }

  _handleImageUpload = () => {
    ImagePickerIOS.openSelectDialog(
      {
        showImages: true,
        showVideos: false,
      },
      this.props.onChange,
      console.error
    );
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
