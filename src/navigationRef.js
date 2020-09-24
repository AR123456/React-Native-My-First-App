// creating navigationRef.js to help with this
// Make sure every file inside project, if it is not a react component, has ability to navigate .
// function to get access to the navigator defined in app.js
import { NavigationActions } from "react-navigation";

let navigator;
// call with the navigation object coming from react navigation - nav
export const setNavigator = (nav) => {
  navigator = nav;
};
// import in App.js
// So what's going on inside of here.  Well it turns out that the navigator provided to us by react navigation has an internal API or essentially functions very similar to our all of our contact stuff works as well. So some of these words probably look familiar.Dispatch Yep very familiar actions. Yeah very familiar as well. So essentially by dispatching an action we are telling react navigation that we want to it to change its status and show a different screen to our user.
// So behind the scenes react navigation is really doing the same stuff the same code that you and I are writing more or less so now anytime we call navigate we'll pass in the name of the route that we want to show and optionally some params as well that's then going to run to run some under the hood code that's going to trigger a change in state in react navigation and show some different content to our user okay.
export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
};
