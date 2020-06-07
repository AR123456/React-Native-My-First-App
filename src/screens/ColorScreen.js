import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";

const ColorScreen = () => {
  // the default state is an empty array
  const [colors, setColors] = useState([]);
  console.log(colors);
  return (
    <View>
      {/* onPress to update color  */}
      <Button
        title="Add a Color"
        // add onPress without changeing the colors state directly,
        // need to use the setter   setColors
        onPress={() => {
          // in setColors use the spread operator to get the whole color array
          // ...gets a copy without altering, it is not destructive
          // then call new entry of randomRgB()
          /// why does this work too ?
          // setColors(randomRgb());
          setColors([...colors, randomRgb()]);
        }}
      />
      <View
        style={{ height: 100, width: 100, backgroundColor: randomRgb() }}
      ></View>
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({});
export default ColorScreen;
