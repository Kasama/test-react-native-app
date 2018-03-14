import React, { Component } from 'react';
import {
  Image,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';

class Showman extends Component {
  render() {
    return <Text> Vc deu: { this.props.text } </Text>;
  }
}

class ListItem extends Component {
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: '',
    };
  }
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <Showman text={this.state.txt} />
        <Image source={pic} style={{ width: 293, height: 320 }} />
        <TextInput
          style={{height: 40}}
          placeholder="Batata"
          onChangeText={ (text) => this.setState({txt: text}) }
        />
      </ScrollView>
    );
  }
}

