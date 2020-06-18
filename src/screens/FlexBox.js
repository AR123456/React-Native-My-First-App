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
    flexDirection: "row",
    height: 200, // height of the view box
    alignItems: "center", // now in center of row verticaly
  },
  textStyle: {
    borderWidth: 3,
    borderColor: "red",
  },
});
export default FlexBox;
// use flex box model to get some number of commmon sibling elements
// one common parent
// flexDirection -controls wheaterh children are
// laid out vertically or horizontally  -default is column or vertical.
// flexDirection row would be horizontally
// flexDirection affects the behaivor of alignItems to the primary axis
// being controled by flexDirection
