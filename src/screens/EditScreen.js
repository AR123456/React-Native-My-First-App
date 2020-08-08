import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  // new const for id to cut down on typing
  const id = navigation.getParam("id");
  // getting state of initial values from the Context object, pull off editBlogPost
  // so that we can call from inside the onSubmit call back
  const { state, editBlogPost } = useContext(Context);
  // going to need the blogPosts existing title and content to pass in as intital
  // starting values to form
  const blogPost = state.find(
    // (blogPost) => blogPost.id === navigation.getParam("id")
    (blogPost) => blogPost.id === id
  );

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        // need to modify state > the action functions are in BlogContext
        // // need to add some stuff to be able to edit
        // console.log(title, content);
        // pass new content to editBlogPost
        editBlogPost(id, title, content);
      }}
    ></BlogPostForm>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
