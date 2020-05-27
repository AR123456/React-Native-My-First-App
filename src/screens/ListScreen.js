import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ListScreen = () => {
  // list is an array of objects that will be rendered as a seriese of screens
  //Flat List React Native Primitive  https://reactnative.dev/docs/flatlist
  // this is like supped up mapping from the react world ,
  //FlatListElement turns an array into a list of elements. Pass in a prop of data -
  //the array of data that we are going to created a bunch of elements out of.
  // pass in a renderItem prop function that will turn each individual item into
  // an element.

  return <Text>List Screen</Text>;
};
const styles = StyleSheet.create({});
export default ListScreen;
/// this is boiler plate code that will start with in may components
// components need to be imported into app.js and wired up to the navigator
