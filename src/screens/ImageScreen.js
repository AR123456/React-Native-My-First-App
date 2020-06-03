import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  // need to add an image prop to pass to ImageDetail
  return (
    <View>
      <ImageDetail
        title="Forest"
        // need to put the require here in {} provide a relative path
        // from here to the assests dirctory
        imageSource={require("../../assets/forest.jpg")}
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default ImageScreen;
