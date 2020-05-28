import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
// createStackNavigator is what will allow us to change content visable to users
// it is an object passes configuraiton options as props
// other componets can recive and pass props
const navigator = createStackNavigator(
  // route object.  what is avalible for navigation
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
  },
  // need buttons to change screens
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
