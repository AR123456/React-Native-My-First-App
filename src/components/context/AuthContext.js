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
    default:
      return state;
  }
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

  { signup, signin, signout },

  { token: null, errorMessage: "" }
);
