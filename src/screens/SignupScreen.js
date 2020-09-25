import React, { useContext } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import Spacer from "../components/Spacer";
//import Context from AuthContext
import { Context as AuthContext } from "../components/context/AuthContext";
import AuthForm from "../components/AuthForm";
const SignupScreen = ({ navigation }) => {
  // state coming from context- the signup function here initiates request with API
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up "
        onSubmit={signup}
      ></AuthForm>
      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <Spacer>
          <Text style={styles.link}>
            Already have an account? Sign in instead{" "}
          </Text>
        </Spacer>
      </TouchableOpacity>
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
  link: {
    color: "blue",
  },
});
export default SignupScreen;
