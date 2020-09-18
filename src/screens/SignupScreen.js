import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
  // need to create state for email and password
  // Button needs to initiate taking the state and sending it to backend
  // to create new user account
  // need to send to the back end using axios
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker </Text>
      </Spacer>
      {/* wire up state to the input 
      whenever a user changes this input the onChangeText call back will 
      be invoked . It will be called with the new email. Function called , take the  
      newEmail and call setEmail with it. 
      onChangeText https://reactnative.dev/docs/handling-text-input
      */}

      <Input
        autoCapitalize="none"
        label="Email"
        value={email}
        // onChangeText={(newEmail) => setEmail(newEmail)}
        //short hand way to write this
        onChangeText={setEmail}
        // pass in prop to remove auto cap and auto correct
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer></Spacer>

      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        // hide the password with stars
        secureTextEntry
      />

      <Spacer>
        <Button title="Sign Up" />
      </Spacer>
    </View>
  );
};

SignupScreen.navigationOptions = { header: () => false };

const styles = StyleSheet.create({
  container: {
    // this will cause the view to fill up as much vertical space as possible
    flex: 1,
    justifyContent: "center",
    // push up the bottom to remove white space at the top
    marginBottom: 170,
  },
});
export default SignupScreen;
