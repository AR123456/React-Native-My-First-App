import React from "react";
import { View, Button, StyleSheet } from "react-native";
// need a state variable and ability to genrate a color randomly

const ColorScreen = () => {
  return (
    <View>
      <Button title="Add a Color" />
      {/* create the boxes the wil display the colors 
          hard code a style
          */}
      <View
        //   here call randomRbg instead of hard coding
        style={{ height: 100, width: 100, backgroundColor: randomRgb() }}
      ></View>
    </View>
  );
};
// beneath the component definition createing a helper function to generate a random color
// // RGB values scale from 255
const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  // return template string or template literal
  return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({});
export default ColorScreen;
