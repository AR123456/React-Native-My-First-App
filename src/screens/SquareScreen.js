import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 35;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  // helper function to stop increase beyond 256 or decrease below 0
  const setColor = (color, change) => {
    //color = red , green or blue
    // change is = the amount of COLOR_INCREMENT
    // changing this over to a switch
    switch (color) {
      case "red":
        // changing to turnary
        // if (red + change > 255 || red + change < 0) {
        //   return;
        // } else {
        //   setRed(red + change);
        // }
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
  };

  return (
    <View>
      <Text>Square screen </Text>

      <ColorCounter
        // onIncrease={() => setRed(red + COLOR_INCREMENT)}
        // onDecrease={() => setRed(red - COLOR_INCREMENT)}
        //  change over to use of setColor helper
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => setColor("green", COLOR_INCREMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
        color="Green"
      />

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default SquareScreen;

// this component will display one view box, that will show the user adjusted color
