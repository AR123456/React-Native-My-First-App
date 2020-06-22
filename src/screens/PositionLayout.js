import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PositionLayout = () => {
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
  // absolute fill - use this when outcome is to completely fill up the parent
  // container with child
  //
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
    fontSize: 18,
    // position: "absolute", // first postion absolute
    // top: 0, // then top,right,left and bottom to 0
    // right: 0,
    // bottom: 0,
    // left: 0,
    ...StyleSheet.absoluteFillObject, // this is the react native shortcut
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "red",
  },
});
export default PositionLayout;
