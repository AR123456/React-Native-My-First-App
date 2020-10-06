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
      return { errorMessage: "", token: action.payload };

    case "clear_error_message":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};
// when app starts up check for token in async storage, inf not take user so signup/signin workflow

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: signin, payload: token });
    // then navigate to track list
    navigate("TrackList");
  } else {
    // could also be to ("Signup")
    navigate("loginFlow");
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};
const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);

    dispatch({ type: "signup", payload: response.data.token });

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
  // add to action object export
  { signup, signin, signout, clearErrorMessage, tryLocalSignin },

  { token: null, errorMessage: "" }
);
