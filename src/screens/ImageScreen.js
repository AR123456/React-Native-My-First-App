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
        score={9}
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        score={7}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        score={4}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default ImageScreen;
