import React from "react";
// import View
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greeting = "Hi There!";
  const anotherGreeting = <Text>Hello world </Text>;
  return (
    <View>
      {/* make sure there is no semicolin at the end of this div */}
      <Text style={styles.textStyle}>This is the components screen</Text>
      <Text>{greeting} </Text>
      {anotherGreeting}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});
export default ComponentsScreen;
