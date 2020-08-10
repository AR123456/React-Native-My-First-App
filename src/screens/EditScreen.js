import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  // pop function in the navigation property returns user to the previous screen
  // need callback in the BlogContext to navigate back - pass in down in the
  // return as 4th arg
  const id = navigation.getParam("id");

  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        // passing in the callback to navigate back one screen after editing
        // also need to take care of this in the BlogContext
        editBlogPost(id, title, content, () => navigation.pop());
      }}
    ></BlogPostForm>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
