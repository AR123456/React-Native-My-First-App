import createDataContext from "./CreateDataContext";
import trackerApi from "../../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
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
      console.log(err.message);
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
  { isSignedIn: false }
);
// now wire this up in App js so that it is at the top of the higherarchy
