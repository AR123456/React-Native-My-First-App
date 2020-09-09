import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// pass in the navigation prop
const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}> Signup screen</Text>
      <Button
        title="Go to Signin"
        onPress={() => navigation.navigate("Signin")}
      ></Button>
      <Button
        title="Go to main flow"
        onPress={() => navigation.navigate("mainFlow")}
      ></Button>
    </>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
