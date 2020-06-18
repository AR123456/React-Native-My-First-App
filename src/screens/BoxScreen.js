import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>BoxScreen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  // adding a styling object
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
  },
  textStyle: {
    borderWidth: 10,
    borderColor: "red",
    margin: 20,
  },
});
export default BoxScreen;
// The Box object model refers to some positioning or some spacing placed
// around  a  single piece of content.  3 layers around the content.
//Margin , Border and Padding
// The default for all primitive elements is 0
