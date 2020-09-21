//using AsyncStorage to store token durring signup
import { AsyncStorage } from "react-native";
import createDataContext from "./CreateDataContext";
import trackerApi from "../../api/tracker";

const authReducer = (state, action) => {
  // in a reducer never modify incoming state, return
  // a brand new object
  switch (action.type) {
    case "add_error":
      // return existing state and overwrite the property we want to update
      // update the errorMessage with whatever came in from action.payload
      return { ...state, errorMessage: action.payload };
    // adding sign up case
    case "signup":
      // return { ...state, token: action.payload };
      // reset state, we want to get rid of the errorMessage so this is new state object
      return { errorMessage: "", token: action.payload };
    default:
      return state;
  }
};
/// Define action functions that will modify state here
//function called with dispatch that will return a function
// const signup = (dispatch) => {
//   // this is what gets called inside the component
//   // will need email and password for sign up
//   return async ({ email, password }) => {
//     // make api POST request to sign up with email and password
//     // if signed up, modify state that we are authentiated
//     // if sign up fails show an error message
//     try {
//       const response = await trackerApi.post("/signup", { email, password });
//       // response.data is an object that has a token property
//       // that is what we want to store
//       // console.log(response.data);
//       await AsyncStorage.setItem("token", response.data.token);
//       // dispatch action to update state thne in reducer handle this type
//       dispatch({ type: "signup", payload: response.data.token });
//     } catch (err) {
//       // here we want to udate state with the error message so need to dispatch
//       // handle watching for this action in the reducer
//       dispatch({
//         type: "add_error",
//         payload: "Something went wrong with sign up ",
//       });

//       // console.log(err.message);
//       // gives the actual response
//       // console.log(err.response.data);
//     }
//   };
// };
////////////re write with expliit return
const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);

    dispatch({ type: "signup", payload: response.data.token });
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign up ",
    });
  }
};

const signin = (dispatch) => {
  return ({ email, password }) => {};
};
const signout = (dispatch) => {
  return () => {};
};

// export the provider and context for rest of app to use
export const { Provider, Context } = createDataContext(
  // pass in the three arguments
  authReducer,
  // object with action functions
  { signup, signin, signout },
  // initial state
  // adding in errorMessage by default an empty string
  // { isSignedIn: false, errorMessage: "" }
  // add token to state object
  { token: null, errorMessage: "" }
);
// now wire this up in App js so that it is at the top of the higherarchy
