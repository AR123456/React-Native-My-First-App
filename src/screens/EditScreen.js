import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  // going to need the blogPosts existing title and content to pass in as intital
  // starting values to form
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  return (
    <BlogPostForm
      // pass in a prop to BlogPost form representing the initial values to use in form
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        // at this point do not have anything in side context to initiate an edit of a blog post
        // will come back to that later.  will need to pass of to a function coming from BlogContext
        console.log(title, content);
      }}
    ></BlogPostForm>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
