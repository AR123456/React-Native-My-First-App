import React from "react";
// importing view and button - view to wrap text element- react needs this
// and button put a button on page
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Hi there ! </Text>
      {/* the title prop on the Button primative element is one 
      of very few exceptions to where we are not using {} to encase 
      the value  here it is just a string with the double "". 
      then add the onPress prop and pass in a function
      */}
      <Button
        // this console log will appear in the terminal window that is
        //running the React Native package
        onPress={() => console.log("button pressed")}
        title="Go to Components Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
