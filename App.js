import React from "react";
// This is the import style for V4
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
// import the provider - can re name it here which will be helpfull when we have other providers
import { Provider as AuthProvider } from "./src/components/context/AuthContext";

const switchNavigator = createSwitchNavigator({
  //route configuration object
  // can show both Screens  and other navigators  in here
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen,
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});

// now assinging to a variable called App
// export default createAppContainer(switchNavigator);
const App = createAppContainer(switchNavigator);
// our own custome comoponent
export default () => {
  return (
    <AuthProvider>
      {/* now App goes in here  */}
      <App />
    </AuthProvider>
  );
};
