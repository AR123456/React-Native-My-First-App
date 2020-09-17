import React from "react";
import { StyleSheet } from "react-native";
// imports from react native elements - by default no spacing, margin or padding out of the box
// going to use a special component called spacer to the project to keep it DRY
import { Text, Input, Button } from "react-native-elements";
// import the Spacer helper component
import Spacer from "../components/Spacer";
// pass in the navigation prop
const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Spacer>
        <Text h3>Sign Up for Tracker </Text>
      </Spacer>
      <Input label="Email" />
      <Spacer></Spacer>

      <Input label="Password" />

      <Spacer>
        <Button title="Sign Up" />
      </Spacer>

      {/* removing all of this and going with react-native-elements  */}
      {/* <Text style={{ fontSize: 48 }}> Signup screen</Text>
      <Button
        title="Go to Signin"
        onPress={() => navigation.navigate("Signin")}
      ></Button>
      <Button
        title="Go to main flow"
        onPress={() => navigation.navigate("mainFlow")}
      ></Button> */}
    </>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
