import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostFrom from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  // Local State to control the text input
  //
  // moving to blog post form
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  //
  // context needs to be able to accept a new title and content to make blog post
  const { addBlogPost } = useContext(Context);
  // moving the return statement out of CreateScreen into the BlogPostForm component
  // return (
  //   <View>
  //     <Text style={styles.label}>Enter Title</Text>
  //     <TextInput
  //       style={styles.input}
  //       value={title}
  //       onChangeText={(text) => setTitle(text)}
  //     ></TextInput>
  //     <Text style={styles.label}>Enter Content:</Text>
  //     <TextInput
  //       style={styles.input}
  //       value={content}
  //       onChangeText={(content) => setContent(content)}
  //     ></TextInput>

  //     <Button
  //       title="Add Blog Post"
  //       onPress={() => {
  //         addBlogPost(title, content, () => {
  //           navigation.navigate("Index");
  //         });
  //       }}
  //     ></Button>
  //   </View>
  // );
  ///////// the new return
  return <BlogPostFrom></BlogPostFrom>;
};

const styles = StyleSheet.create({
  // moving input and label over to BlogPostForm.js component
  // input: {
  //   fontSize: 18,
  //   borderWidth: 1,
  //   borderColor: "black",
  //   marginBottom: 15,
  //   padding: 5,
  //   margin: 5,
  // },
  // label: {
  //   fontSize: 20,
  //   marginBottom: 10,
  //   marginLeft: 5,
  // },
});

export default CreateScreen;
