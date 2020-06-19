import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FlexBox = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child 1</Text>
      <Text style={styles.textTwoStyle}>Child 2</Text>
      <Text style={styles.textThreeStyle}>Child 3</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  // adding a styling object
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "red",
    alignSelf: "center",
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "red",
  },
});
export default FlexBox;
// use flex box model to get some number of commmon sibling elements
// one common parent -
// apply to parent - alignItems, justifyContent,flexDirection
// apply to child - flex, alignSelf
// use alignSelf when you want to overide the alignItems on the parent element
