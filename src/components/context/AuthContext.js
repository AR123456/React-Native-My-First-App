import { AsyncStorage } from "react-native";
import createDataContext from "./CreateDataContext";
import trackerApi from "../../api/tracker";
// import the navigationRef function
import { navigate } from "../../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
    case "signup":
      // the state returned
      return { errorMessage: "", token: action.payload };
    // looking for action type of clear_error_message - action function to modify state and set error message back to an empty string
    case "clear_error_message":
      // a new state object of all the stuff from before but add in error message
      // that is an empty string - dispatch actions modify state
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};
// action function to clear out error messages
const clearErrorMessage = (dispatch) => () => {
  // dont for get to add new state case to the authReducer
  dispatch({ type: "clear_error_message" });
};
const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);

    dispatch({ type: "signup", payload: response.data.token });
    // now navigate to main flow - right now the only things that can trigger navigation is stuff in
    // the switchNavigator const in app.js.  They are the screens that recive the props object that has the navigation
    //prop inside of it. We need access to that prop
    // creating navigationRef.js to help with this
    /// call our navigate function and pass in the string that matches the route from app.js we want to go to
    navigate("TrackList");
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign up ",
    });
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    // route to singin
    const response = await trackerApi.post("/signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });
    navigate("TrackList");
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign in",
    });
  }
};

const signout = (dispatch) => {
  return () => {};
};

// export the provider and context for rest of app to use
export const { Provider, Context } = createDataContext(
  authReducer,
  // exporting the functions to use in components - add the new clearErrorMessage function
  { signup, signin, signout, clearErrorMessage },

  { token: null, errorMessage: "" }
);
