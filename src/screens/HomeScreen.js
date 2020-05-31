import React from "react";

import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
// passing props  - props are alway the fist argument to the function
// const HomeScreen = (props) => {
// this is coming from createStackNavigator
// console.log(props.navigation);
// navigate is a funcion in the props that we can use to change hte content that
// is visible on screen
// call with a string that matches the route name of  is defined in app.js
///////////////////////////
//since all we are reciving from props argument is navigation, will
// destructure
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there ! </Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to LIst Demo"
      />
      {/* changing from TouchableOpacity to button for simplicity 
      <TouchableOpacity
        // passing text string to navigate function
        onPress={() => props.navigation.navigate("List")}
      >
        <Text>Go to list demo</Text>
      </TouchableOpacity>
       */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
