import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context } from "../components/context/AuthContext";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context);

  return (
    <View style={styles.container}>
      {/*Show navigation events inside of component with react-navigation navigation events  Pass in call back functions as props - they will be called automaticaly any time user navigates to or away from this component */}
      <NavigationEvents
        onWillFocus={clearErrorMessage}
        // onDidFocus={() => {}}
        // onWillBlur={clearErrorMessage}
        // onDidBlur={() => {}}
      />
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage={state.errorMessage}
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
