import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
  // using StyleSheet import for styleing
  return <Text style={styles.textStyle}>This is the components screen</Text>;
  // can also use regular in line styling but if error it gives poor feedback
  //   return <Text style={{ fontSize: 30 }}>This is the components screen</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});
export default ComponentsScreen;
