import React from "react";
// import View
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const myName = "Anne";
  const anotherGreeting = <Text style={styles.helloWorld}>Hello world </Text>;

  return (
    <View>
      <Text style={styles.textStyle}>Getting Started with React Native! </Text>
      <Text>My name is {myName} </Text>
      {anotherGreeting}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  helloWorld: {
    fontSize: 50,
  },
});
export default ComponentsScreen;
