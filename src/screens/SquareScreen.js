import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";
// the all caps here signifys to other engineers that this is a configuration
// option, that it is not a prop  .
const COLOR_INCREMENT = 35;

const SquareScreen = () => {
  // initialize state values here in square screen then pass callback function
  // to ColorCounter as a prop so that ColorCounter can modify the state values.
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View>
      <Text>Square screen </Text>
      {/* give ColorCounter the ability to change the state values 
       in our app the child component ColorCounter needs to chagne state
       values for R, G, B - so pass the callback function as a prop
      */}

      <ColorCounter
        onIncrease={() => setRed(red + COLOR_INCREMENT)}
        onDecrease={() => setRed(red - COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
        onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => setGreen(green + COLOR_INCREMENT)}
        onDecrease={() => setGreen(green - COLOR_INCREMENT)}
        color="Green"
      />
      {/* adding a new view object to show color box 
      passing the style object here so one set of {} to say this is JS
      the other {} to say this is an object literal
      */}
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
