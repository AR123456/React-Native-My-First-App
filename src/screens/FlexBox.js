import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FlexBox = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child 1</Text>
      <Text style={styles.textStyle}>Child 2</Text>
      <Text style={styles.textStyle}>Child 3</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  // adding a styling object
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    alignItems: "center",
  },
  textStyle: {
    borderWidth: 3,
    borderColor: "red",
  },
});
export default FlexBox;
// use flex box model to get some number of commmon sibling elements
// one common parent
// allignItems property is set on parent, affects horizontal defalut is stretch -
// flex-start condenses children close to left hand side while still allowing some
// space around text inside them
// flex-center, flex-end like wise to center and right hand side
