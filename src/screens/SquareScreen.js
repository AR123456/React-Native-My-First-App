import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  return (
    <View>
      <Text>Square screen </Text>
      {/* pass in prop to show R,G,B in each ColorCounter */}
      <ColorCounter color="Red" />
      <ColorCounter color="Blue" />
      <ColorCounter color="Green" />
    </View>
  );
};
const styles = StyleSheet.create({});
export default SquareScreen;

// this component will display one view box, that will show the user adjusted color
// It will also display 3 buttons  that will increase or decrease
// the amount of R, G or B .
// the buttons will be generated from the ColurCounter.js component
