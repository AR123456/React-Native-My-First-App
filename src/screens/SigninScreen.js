import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context } from "../components/context/AuthContext";
const SigninScreen = () => {
  const { state, signin } = useContext(Context);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage={state.errorMessage}
        // onSubmit={() => {}}
        //onsubmit is going to call a function automatically with an
        //object that has the email and password
        onSubmit={signin}
        submitButtonText="Sign In"
      ></AuthForm>
      <NavLink
        text="Don't have an account? Sign up instead"
        routeName="Signup"
      ></NavLink>
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 170,
  },
});
export default SigninScreen;
