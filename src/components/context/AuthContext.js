import createDataContext from "./CreateDataContext";
// reducer function - get called with 2 args state and the action
// this function called by React when we call our Dispatch function
const authReducer = (state, action) => {
  // switch over action.type
  switch (action.type) {
    default:
      return state;
  }
};
/// Define action functions that will modify state here
// 3 ways sign up sign in and sign out
//function called with dispatch that will return a function
const signup = (dispatch) => {
  // this is what gets called inside the component
  // will need email and password for sign up
  return ({ email, password }) => {
    // make api request to sign up with email and password
    // if signed up, mofdify state that we are authentiated
    // if sign up fails show an erro message
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
