import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
// use conext to get the blog post that needs to be edited
import { Context } from "../context/BlogContext";
// usethat blog to populate useState values
import BlogPostForm from "../components/BlogPostForm";
// show a from where a user can edit blog post
const EditScreen = ({ navigation }) => {
  // reach into Context to get state
  const { state } = useContext(Context);
  // iterate through blog posts to find the one with the matching id
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );
  ///// now EditScreen will get state from BlogPostFrom so dont need these
  // // initialize 2 state variables
  // // the initial state value for useState will be the found blogPost
  // const [title, setTitle] = useState(blogPost.title);
  // // same for the content of the blog post
  // const [content, setContent] = useState(blogPost.content);
  ///////////////now this comes from BlogPostFrom
  // return (
  //   <View>
  //     {/* now show the input form  */}
  //     <Text>Edit Title:</Text>
  //     <TextInput
  //       value={title}
  //       onChangeText={(newTitle) => setTitle(newTitle)}
  //     />
  //   </View>
  // );
  return <BlogPostForm></BlogPostForm>;
};

const styles = StyleSheet.create({});

export default EditScreen;
