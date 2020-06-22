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
  // Top, bottom , left and right properties Properties feel similar to
  //margin but behave differently.
  // They Add a little bit of extra spacing between one element and a sibling.
  //Spacing is added after everything gets placed on the screen.
  // so it casues items to overlay one another
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
    // top: 10, // child 2 shifts down and covers part of child 3
    // bottom: 10, // child 2 shifts up and covers part of child 1
    left: 10, // causes child 2 to extend beyond the limits of parent view
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "red",
  },
});
export default PositionLayout;
