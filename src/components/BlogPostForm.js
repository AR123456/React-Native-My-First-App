import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
// destructute onSubmit from propts object
const BlogPostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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
        // pass in the onSubmit callback
        // pass in the title and content user just entered
        onPress={() => onSubmit(title, content)}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  // this came out of the CreateScreen
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
