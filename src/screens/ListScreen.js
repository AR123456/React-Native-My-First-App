import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  // list is an array of objects that will be rendered as a seriese of screens
  //Flat List React Native Primitive  https://reactnative.dev/docs/flatlist
  // this is like supped up mapping from the react world ,
  //FlatListElement turns an array into a list of elements. Pass in a prop of data -
  //the array of data that we are going to created a bunch of elements out of.
  // pass in a renderItem prop function that will turn each individual item into
  // an element.
  ////////////////////////////////
  // createing an array of objects
  // 2 ways to implement key property
  // add a key property to the object - it must be a string, must be consistent betwee renders
  // and it must be unique compared to all other objects inside array of data.
  // const friends = [
  //   { name: "Friend #1", key: "1" },
  //   { name: "Friend #2", key: "2" },
  //   { name: "Friend #4", key: "4" },
  //   { name: "Friend #5", key: "5" },
  //   { name: "Friend #6", key: "6" },
  //   { name: "Friend #7", key: "7" },
  //   { name: "Friend #8", key: "8" },
  //   { name: "Friend #9", key: "9" },
  // ];
  // method nubmer 2 is on the flat list component itself using keyExtractor
  const friends = [
    { name: "Friend #1" },
    { name: "Friend #2" },
    { name: "Friend #3" },
    { name: "Friend #4" },
    { name: "Friend #5" },
    { name: "Friend #6" },
    { name: "Friend #7" },
    { name: "Friend #8" },
    { name: "Friend #9" },
  ];
  // pass in prop of data  and renderItem prop
  return (
    <FlatList
      // key extractor called with single argument , call for every object
      // in array that it inside this function
      // inspect object and return the key property to use for it.
      // defining at runtime
      keyExtractor={(friend) => friend.name}
      data={friends}
      // The Key allows RN to tie some definition of an object of data data
      // with an actual element that appears on the screen . Performace optimization
      // when making updates to list

      renderItem={({ item }) => {
        return <Text>{item.name}</Text>;
      }}
    />
  );
};
const styles = StyleSheet.create({});
export default ListScreen;
