import React from "react";
import { StyleSheet, View } from "react-native";

import { Text, Input, Button } from "react-native-elements";

import Spacer from "../components/Spacer";
// hide header and vertical center the screen
const SignupScreen = ({ navigation }) => {
  return (
    // verticaly space the content , switch over to view element vs the fragment
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker </Text>
      </Spacer>
      <Input label="Email" />
      <Spacer></Spacer>

      <Input label="Password" />

      <Spacer>
        <Button title="Sign Up" />
      </Spacer>
    </View>
  );
};
// to hide the header add
// navigation options property
// define navigationsOpjects and assign it a function
// the return it an object that will customize the stack navigator
// and change the way that react navigation behaves
// SignupScreen.navigationOptions = () => {
//   return {
//     // remove the header
//     header: () => false,
//   };
// };
// alternative way to write it if there is no need have access to the
// navigation prop to passed into the function
SignupScreen.navigationOptions = { header: () => false };

//  function that returns an object  vs an object up the devoloper-may see this inthe docs
const styles = StyleSheet.create({
  container: {
    // borderColor: "red",
    // borderWidth: 10,
    // this will cause the view to fill up as much vertical space as possible
    flex: 1,
    justifyContent: "center",
    // push up the bottom to remove white space at the top
    marginBottom: 170,
  },
});
export default SignupScreen;
