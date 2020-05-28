import React from "react";

import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
// passing props  - props are alway the fist argument to the function
const HomeScreen = (props) => {
  // this is coming from createStackNavigator
  // console.log(props.navigation);
  // navigate is a funcion in the props that we can use to change hte content that
  // is visible on screen
  // call with a string that matches the route name of  is defined in app.js
  return (
    <View>
      <Text style={styles.text}>Hi there ! </Text>
      <Button
        onPress={() => props.navigation.navigate("Components")}
        title="Go to Components Demo"
      />

      <TouchableOpacity
        onPress={() => console.log("Touchable Opacity pressed")}
      >
        <Text>Go to list demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
