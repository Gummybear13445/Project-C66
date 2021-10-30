import * as React from 'react';
import * as Speech from 'expo-speech';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Header } from 'react-native-elements';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = { name: '' };
  }
  speak = () => {
    var thingToSay = this.state.name;
    Speech.speak(thingToSay);
  };
  render() {
    return (
      <View style={styles.title}>
        {' '}
        <Header
          style={styles.headerBox}
          backgroundColor="teal"
          centerComponent={{
            text: 'Text to Speech Converter',
            style: { color: 'white', fontSize: 14 },
          }}
        />{' '}
        <Image
          style={styles.imageIcon}
          source={{
            uri: 'https://www.easytechtrick.org/wp-content/uploads/2017/11/Text-To-Speech-Apps.jpg',
          }}
        />{' '}
        <Text style={styles.title}>Enter the word</Text>{' '}
        <TextInput
          style={styles.inputBox}
          onChangeText={(name) => this.setState({ name: name })}
          value={this.state.name}
        />{' '}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            var word = this.state.name;
            word === '' ? alert('please type in a message') : this.speak();
          }}>
          {' '}
          <Text style={styles.buttonText}>Click Here to hear Speech</Text>{' '}
        </TouchableOpacity>{' '}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#008080' },
  inputBox: {
    marginTop: 25,
    width: '80%',
    alignSelf: 'center',
    height: 130,
    textAlign: 'center',
    borderWidth: 4,
    borderColor: '#000000',
    outline: 'none',
  },
  imageIcon: { width: 150, height: 150, alignSelf: 'center', marginTop: 15 },
  title: { alignSelf: 'center', marginTop: 20, fontSize: 17 },
  button: {
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 40,
    backgroundColor: '#008080',
    padding: 5,
    width: 300,
    height: 60,
  },
  buttonText: {
    paddingTop: '10px',
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 15,
    color: 'white',
  },
});
