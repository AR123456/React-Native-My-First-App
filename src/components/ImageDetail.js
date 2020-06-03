import React from "react";

import { View, Text, StyleSheet, Image } from "react-native";
import { startAsync } from "expo/build/AR";
// to destrucutuer
// const ImageDetail = (props) => {
const ImageDetail = ({ imageSource, title, score }) => {
  return (
    <View>
      {/* in react native this is not src it is source
      provide relative path th image 
      import Image to display 
      */}
      {/* <Image source={require("../../assets/beach.jpg")} /> */}
      {/* now use props */}
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image score - {score}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default ImageDetail;
