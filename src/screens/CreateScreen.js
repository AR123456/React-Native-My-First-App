import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  // Local State to control the text input
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // context needs to be able to accept a new title and content to make blog post
  const { addBlogPost } = useContext(Context);
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
      {/* addBlogPost needs to be call with title and content when button tapped */}
      <Button
        title="Add Blog Post"
        // navigation back to index can be done in a couple of ways
        // passing in
        // this may not be best if there ever is reason to make a network request before
        // updating state.  LIke saving the blog post to an API
        // could cause an error while waiting for the API to accept request
        // better way is to pass the navication call inside a call back in addBlogPost
        // call back is third argument
        // now can modify addBlogPost - after successfull saving blog post (dispatch and action )
        // now go to blog context and update the addBlogPost function
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate("Index");
          });
        }}
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

export default CreateScreen;
