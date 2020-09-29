import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

//import Context from AuthContext
import { Context as AuthContext } from "../components/context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
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
      <NavLink
        text="Already have an account ? Sign in instead"
        routeName="Signin"
      ></NavLink>
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
