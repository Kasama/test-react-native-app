import { StyleSheet, View } from 'react-native';
import React from 'react';
import SideMenu from 'react-native-side-menu';

import ChatScreen from './ChatScreen';
import Menu from './Menu';
import TitleBar from './TitleBar';
import TypingArea from './TypingArea';

const Application = () => {
  const menuNode = <Menu />;
  return (
    <SideMenu menu={menuNode}>
      <TitleBar />
      <View style={styles.chatAppContainer}>
        <ChatScreen />
        <TypingArea />
      </View>
    </SideMenu>
  );
}
export default Application;

const styles = StyleSheet.create({
  chatAppContainer:{
    backgroundColor: "#222",
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
