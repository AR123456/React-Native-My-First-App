import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostFrom from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  // anytime a user submits the form want to have my blog post
  // form invoke this onSubmit prop, pass onSubmit a function.
  // when form submits the function inside onSubmit will run
  return (
    <BlogPostFrom
      // pass in the title and content user added on the blogpost form
      onSubmit={(title, content) => {
        // get the title and content from what was passed into onSubmit
        addBlogPost(title, content, () => navigation.navigate("Index"));
      }}
    ></BlogPostFrom>
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
