import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
// destructute onSubmit and inititalValues from props object
// note initialValues will be undefined if coming from CreateScreen
const BlogPostForm = ({ onSubmit, initialValues }) => {
  // const [title, setTitle] = useState("");
  // now this is initialValues.title and state
  const [title, setTitle] = useState(initialValues.title);
  // const [content, setContent] = useState("");
  const [content, setContent] = useState(initialValues.content);
  return (
    <View>
      <Text style={styles.label}>Enter Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      ></TextInput>
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(content) => setContent(content)}
      ></TextInput>

      <Button
        title="Save Blog Post"
        onPress={() => onSubmit(title, content)}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 5,
  },
});
export default BlogPostForm;
