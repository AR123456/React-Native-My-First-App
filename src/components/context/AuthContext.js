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

// export the provider and context for rest of app to use
export const { Provider, Context } = createDataContext(
  // pass in the three arguments
  authReducer,
  // object with action functions
  {},
  // initial state
  { isSignedIn: false }
);
// now wire this up in App js so that it is at the top of the higherarchy
