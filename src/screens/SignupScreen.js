import React, { useState, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
//import Context from AuthContext
import { Context as AuthContext } from "../components/context/AuthContext";
const SignupScreen = ({ navigation }) => {
  // state coming from context- the signup function here initiates request with API
  const { state, signup } = useContext(AuthContext);
  // need to create state for email and password
  // need to send to the back end using axios
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
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

      <Spacer>
        {/* on press call back call sign up and pass email and password state  */}
        <Button title="Sign Up" onPress={() => signup({ email, password })} />
      </Spacer>
    </View>
  );
};

SignupScreen.navigationOptions = { header: () => false };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 170,
  },
});
export default SignupScreen;
