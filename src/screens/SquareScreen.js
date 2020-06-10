//https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15706682#overview

// https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15706684#overview
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  // initialize state values here in square screen then pass callback function
  // to ColorCounter as a prop so that ColorCounter can modify the state values.
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  console.log(red);
  return (
    <View>
      <Text>Square screen </Text>
      {/* give ColorCounter the ability to change the state values 
       in our app the child component ColorCounter needs to chagne state
       values for R, G, B - so pass the callback function as a prop
      */}
      {/* made up prop name onIncrease and onDecrease */}
      <ColorCounter
        onIncrease={() => setRed(red + 1)}
        onDecrease={() => setRed(red - 1)}
        color="Red"
      />
      <ColorCounter color="Blue" />
      <ColorCounter color="Green" />
    </View>
  );
};
const styles = StyleSheet.create({});
export default SquareScreen;

// this component will display one view box, that will show the user adjusted color
