import React, { useState } from "react";
import { Text, Button, Input } from "react-native-elements";
import { StyleSheet } from "react-native";
import Spacer from "./Spacer";
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
        <Text h3>{headerText} </Text>
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
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}

      <Spacer>
        {/* on press call back call sign up and pass email and password state  */}
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
});