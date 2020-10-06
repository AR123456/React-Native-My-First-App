// only want the run tryLocalSignin one time so use effect is needed

import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";

//import Context from AuthContext
import { Context as AuthContext } from "../components/context/AuthContext";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage, tryLocalSignin } = useContext(
    AuthContext
  );
  useEffect(() => {
    tryLocalSignin;
    // for it to run just once add empty array
  }, []);
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
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
