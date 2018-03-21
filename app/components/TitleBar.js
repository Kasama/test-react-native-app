import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const TitleBar = () => {
  return (
    <View style={styles.titleBar}>
      <Text>Title</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleBar:{
    backgroundColor: "#3ba",
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    maxHeight: 40,
  },
});

export default TitleBar;
