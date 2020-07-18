//need to import React since we are using JSX to in the return
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);

// export default createAppContainer(navigator);
const App = createAppContainer(navigator);
// Need to export a component so to wrap everything assigning to a variable called App
// then export my own custom component that returns App
export default () => {
  return <App />;
};
