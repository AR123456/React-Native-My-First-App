import React from "react";
import { StyleSheet, Text, Button } from "react-native";

// pass in the navigaiton prop
const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>Track List Screen</Text>
      <Button
        title="Go to Track Detail"
        onPress={() => navigation.navigate("TrackDetail")}
      ></Button>
    </>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({});
