import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`}></Button>
      <Button title={`Decrease ${color}`}></Button>
    </View>
  );
};
const styles = StyleSheet.create({});
export default ColorCounter;
// this component will display color mixing for red, green or blue on the
