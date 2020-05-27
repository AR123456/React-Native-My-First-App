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
  const friends = [
    { name: "Friend #1" },
    { name: "Friend #2" },
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
      data={friends}
      // the element argument is not exactly like the object
      //the elemet argument has properties on it
      // item property of friend object  and an index property
      //large object that describes a lot of inof about the element
      //trying to render.
      // pull off the "item" property which is hte actual object we have inside
      //array
      // can use destructuring for this element.item
      //    rednerItem= {(element)=>{}}
      renderItem={({ item }) => {
        return <Text>{item.name}</Text>;
      }}
    />
  );
};
const styles = StyleSheet.create({});
export default ListScreen;
/// this is boiler plate code that will start with in may components
// components need to be imported into app.js and wired up to the navigator
