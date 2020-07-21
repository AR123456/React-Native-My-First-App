// need useContext hook to make use of the BlogContext, to get its "value"
import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
// import BlogContext object
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  // pass in the context object, now this const value is eq to the value prop in BlogContext.js
  const value = useContext(BlogContext);
  return (
    <View>
      <Text>Index Screen</Text>
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
