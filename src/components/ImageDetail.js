import React from "react";

import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = (props) => {
  console.log(props);
  return (
    <View>
      {/* in react native this is not src it is source
      provide relative path th image 
      import Image to display 
      */}
      <Image source={require("../../assets/beach.jpg")} />
      <Text>{props.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default ImageDetail;
