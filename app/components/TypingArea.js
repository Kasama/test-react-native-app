import {
  Button,
  StyleSheet,
  TextInput,
  View
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import Actions from '../actions';

class TypingArea extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };

    this.handleSend = this.handleSend.bind(this);
  }

  handleSend() {
    if (this.state.message.trim().length !== 0) {
      this.props.addMessage(this.props.user, this.state.message.trim());
    }
    this.setState({
      message: '',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({message: text})}
          onSubmitEditing={this.handleSend}
          value={this.state.message}
        />
        <Button
          style={styles.sendButton}
          onPress={this.handleSend}
          title='Send'
        />
      </View>
    );
  }
}

TypingArea.propTypes = {
  addMessage: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.userReducer.username,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TypingArea);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  input: {
    flexGrow: 1,
    color: '#ccc',
  },
  sendButton: {
    flexShrink: 1,
    maxHeight: 40,
  }
});
