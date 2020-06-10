import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
// wire the callback to the buttons, the call back functions onIncrease
//and onDecrease are now props. Pull them off of the props object like we did color
// what we are really passing is the ability to run the setter
const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      {/* onPress call the onIncrease or onDecrease function 
      what we are really passing is the ability to run the setter 
      now the child is changing the value of the state variable
      */}
      <Button onPress={() => onIncrease()} title={`Increase ${color}`}></Button>
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`}></Button>
    </View>
  );
};
const styles = StyleSheet.create({});
export default ColorCounter;
// this component will display color mixing for red, green or blue on the
