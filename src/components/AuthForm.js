import React, { useState } from "react";
import { Text, Button, Input } from "react-native-elements";
import { StyleSheet, View } from "react-native";
// pass in  props we will need for sign up or sign in and error message props object -what we need to pass into auth form for it to behave correctly
const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  // need to create state for email and password
  // need to send to the back end using axios
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(state);
  return (
    <>
      <Spacer>
        <Text h3>Sign Up for Tracker </Text>
      </Spacer>

      <Input
        autoCapitalize="none"
        label="Email"
        value={email}
        onChangeText={setEmail}
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
        secureTextEntry
      />
      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}

      <Spacer>
        {/* on press call back call sign up and pass email and password state  */}
        <Button title="Sign Up" onPress={() => signup({ email, password })} />
      </Spacer>
    </>
  );
};

export default AuthForm;

const styles = StyleSheet.create({});
