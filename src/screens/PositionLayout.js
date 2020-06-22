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
  // by default every element has a position property set to relative
  //changing to absolute will cause the given element to be completly
  // ignored by its siblings .
  // it will still obey some flex box rules if they are set by the parent
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    // alignItems: "center", // is not ignored child 2
    alignItems: "flex-end", // flex-end is not ignored by child 2 but still ignores its sibs
    // alignItems: "stretch", // when set to stretch child 2  ignores it
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "red",
    fontSize: 18,
    position: "absolute", // this causes child one and two to overlay one another
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "red",
  },
});
export default PositionLayout;
