import { StyleSheet, View } from 'react-native';
import React from 'react';

import ChatScreen from './ChatScreen';
import TypingArea from './TypingArea';

// class Application extends React.PureComponent {
const Application = () => {
  return (
    <View style={styles.chatAppContainer}>
      <ChatScreen />
      <TypingArea />
    </View>
  );
}
// export default connect(mapStateToProps, mapDispatchToProps)(Application);
export default Application;

const styles = StyleSheet.create({
  chatAppContainer:{
    backgroundColor: "#222",
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
