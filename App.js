import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Uploader } from './components/Uploader';
import { identifyRequest } from './services/identityWrapperService';
import { readImageUri } from './services/fileImageService';

export default class App extends React.Component {
  componentDidUpdate() {
    if (this.state.base64Image) {
      identifyRequest(this.state.base64Image);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Uploader onChange={({ base64 }) => this.setState({ base64Image })} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
