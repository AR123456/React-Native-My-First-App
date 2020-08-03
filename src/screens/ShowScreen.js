import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// // note if multiple contexts are needed could do this
// import {Context as blogContext} from "../BlogContext";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );
  return (
    <View>
      <Text>{blogPost.title} </Text>
      <Text>{blogPost.content} </Text>
    </View>
  );
};
ShowScreen.navigationOptions = () => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Edit")}>
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({});

export default ShowScreen;
