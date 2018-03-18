import { ScrollView, StyleSheet, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import Actions from '../actions';

const Message = (props) => {
  return (
    <Text style={styles.messageBubble}>
      <Text style={styles.messageUser}>{props.message.user}</Text>:
      {' ' + props.message.text}
    </Text>
  );
};

Message.propTypes = {
  message: PropTypes.shape({
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    timestamp: PropTypes.instanceOf(new Date()).isRequired,
  }).isRequired,
};

// const ChatScreen = (props) => {
class ChatScreen extends React.PureComponent {
  componentDidMount() {
    this.props.getMessages();
  }

  render() {
    return (
      <ScrollView style={styles.chatScroll} contentContainerStyle={styles.chatScrollChildLayout} >
        {
          this.props.messages.map((message) => {
            return <Message key={message.text} message={message} />
          })
        }
      </ScrollView>
    );
  }
}

ChatScreen.propTypes = {
  messages: PropTypes.arrayOf(Message.propTypes.message).isRequired,
  getMessages: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    messages: state.chatReducer.messages,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen);

const styles = StyleSheet.create({
  messageBubble: {
    width: '80%',
    backgroundColor: '#104085',
    borderRadius: 20,
    color: '#f5f5f5',
    paddingLeft: 20,
    marginTop: 20,
  },
  messageUser: {
    fontStyle: 'italic',
  },
  chatScroll: {
    width: '100%',
  },
  chatScrollChildLayout: {
    alignItems: 'center',
  }
});
