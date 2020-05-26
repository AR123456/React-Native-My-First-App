import React from "react";
// import View
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greeting = "Hi There!";
  const anotherGreeting = <Text>Hello world </Text>;
  // make sure the (  on same line as return.  You could also have no (  but the <View> would need to be on same line as return
  return (
    <View>
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
