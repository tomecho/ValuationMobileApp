import React from 'react';
import { Permissions } from 'expo';
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import { Uploader } from './components/Uploader';
import { identifyRequest } from './services/identityWrapperService';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true, // start in loading state
    }
  }

  componentDidMount() {
    Permissions.getAsync(Permissions.CAMERA_ROLL).then(permission => {
      if (permission.status !== 'granted') {
        Permissions.askAsync(Permissions.CAMERA_ROLL).then(() => {
          this.setState({ loading: false })
        });
      } else {
        this.setState({ loading: false });
      }
    });
  }

  componentDidUpdate() {
    if (this.state.base64Image) {
      identifyRequest(this.state.base64Image).then(prediction => {
        this.setState({ prediction });
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        { this.state.loading 
          ? <ActivityIndicator />
          : <Uploader onChange={({ base64 }) => this.setState({ base64Image: base64 })} />
        }

        { this.state.base64Image &&
          <Text>{ this.state.prediction || "Loading..." }</Text>
        }
        
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
