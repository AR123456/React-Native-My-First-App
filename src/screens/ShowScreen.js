import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
// // note if multiple contexts are needed could do this
// import {Context as blogContext} from "../BlogContext";
import { Context } from "../context/BlogContext";
// to show single item id pass cannot pass id in need to pass the
//  navigation object
// index screen
const ShowScreen = ({ navigation }) => {
  // take the getParam function provided via the navigation prop and pass in id
  // console.log(navigation.getParam("id"));
  // to get the list of blog posts need to use context
  const { state } = useContext(Context);
  // now run through the list of blog posts and find the one with the correct id
  // using the .find array method
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );
  return (
    <View>
      {/* pass in blogPost.title */}
      <Text>{blogPost.title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
