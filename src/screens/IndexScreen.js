import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  // data object coming from BlogContext
  const { data, addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Text>Index Screen</Text>
      {/* Button kicks off the callback function */}
      <Button
        title="Add Post"
        // call the setter in BlogContext
        // onPress={() => addBlogPost()}
        // or can write like this
        onPress={addBlogPost}
      ></Button>
      <FlatList
        // data is now list of blogPosts
        data={data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
