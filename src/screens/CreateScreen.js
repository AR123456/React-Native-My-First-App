import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

const CreateScreen = () => {
  const { state } = useContext(Context);

  return (
    <View>
      <Text>This is the screen to create</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default CreateScreen;
