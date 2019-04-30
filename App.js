import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Uploader } from './components/Uploader';
import { identifyRequest } from './services/identityWrapperService';
import { readImageUri } from './services/fileImageService';

export default class App extends React.Component {
  componentDidUpdate() {
    if (this.state.uri) {
      debugger;
      readImageUri(this.state.uri).then(result => {
        this.setState({ file: result });
      });
      // identifyRequest(this.state.uri);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Uploader onChange={uri => this.setState({ uri })} />
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
