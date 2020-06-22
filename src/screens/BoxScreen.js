import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <Text style={styles.viewOneStyle}></Text>
      <Text style={styles.viewTwoStyle}></Text>
      <Text style={styles.viewThreeStyle}></Text>
    </View>
  );
};
const styles = StyleSheet.create({
  // adding a styling object
  parentStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: "red",
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: "green",
    marginTop: 50,
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: "purple",
  },
});
export default BoxScreen;
