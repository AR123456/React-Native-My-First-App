import React from "react";

import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

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
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to Image"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter"
      ></Button>
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go to Color Demo"
      ></Button>
      <Button
        onPress={() => navigation.navigate("Square")}
        title="Go to Color Mixer Demo"
      ></Button>
      <Button
        onPress={() => navigation.navigate("Text")}
        title="Go to sign in demo"
      ></Button>
      <Button
        onPress={() => navigation.navigate("Box")}
        title="Go to Box Object  Layout"
      ></Button>
      <Button
        onPress={() => navigation.navigate("Flex")}
        title="Go to Flex Box Layout"
      ></Button>
      <Button
        onPress={() => navigation.navigate("Position")}
        title="Go to Position Layout"
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
