import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Uploader } from './components/Uploader';
import { identifyRequest } from './services/identityWrapperService';

export default class App extends React.Component {


  componentDidUpdate() {
    if (this.state.uri) {
      identifyRequest(this.state.uri);
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
