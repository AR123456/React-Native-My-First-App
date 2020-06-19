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
    height: 200,
    flexDirection: "row",
    justifyContent: "space-around", // very similar to alignItems- just works in opposite direction
  },
  textStyle: {
    borderWidth: 3,
    borderColor: "red",
  },
});
export default FlexBox;
// use flex box model to get some number of commmon sibling elements
// one common parent
// justifyContent , alignItems and flexDirection - are always applied to
// parent element to customize how the children inside are displayed
