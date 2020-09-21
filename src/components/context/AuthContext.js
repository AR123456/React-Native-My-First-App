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

    default:
      return state;
  }
};
/// Define action functions that will modify state here
//function called with dispatch that will return a function
const signup = (dispatch) => {
  // this is what gets called inside the component
  // will need email and password for sign up
  return async ({ email, password }) => {
    // make api POST request to sign up with email and password
    // if signed up, mofdify state that we are authentiated
    // if sign up fails show an error message
    try {
      const response = await trackerApi.post("/signup", { email, password });
      console.log(response.data);
    } catch (err) {
      // here we want to udate state with the error message so need to dispatch
      // handle watching for this action in the reducer
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up ",
      });

      // console.log(err.message);
      // gives the actual response
      // console.log(err.response.data);
    }
  };
};
const signin = (dispatch) => {
  return ({ email, password }) => {
    // try to signin
    // update state if successful
    // show error message if fails
  };
};
const signout = (dispatch) => {
  return () => {
    //somehow sign out
  };
};

// export the provider and context for rest of app to use
export const { Provider, Context } = createDataContext(
  // pass in the three arguments
  authReducer,
  // object with action functions
  { signup, signin, signout },
  // initial state
  // adding in errorMessage by default an empty string
  { isSignedIn: false, errorMessage: "" }
);
// now wire this up in App js so that it is at the top of the higherarchy
