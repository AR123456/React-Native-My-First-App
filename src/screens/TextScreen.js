import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  return (
    <View>
      {/* by default TextInput has no styling so have to add  that to even see input 
        ios will by default make first letter cap and offer auto correct feature
        android doesn't do that 
        add 2 props to control that behaviorautoCapitalize and autoCorrect
        here setting to not autoCorrect or capitalize    */}
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});
export default TextScreen;
