import React, { useReducer } from "react";

// export the function to set up the context automaticaly to keep it DRY
// will be called with a reducer, actions and a defaultValue(or default state)
export default (reducer, actions, defaultValue) => {
  // create context
  const Context = React.createContext();
  // helper provider component, takes children as props
  const Provider = ({ children }) => {
    // set up the use reducer call
    // to useReducer pass in the reducer which is the function with all of the switch cases inside it
    // the second thing is the default state
    const [state, dispatch] = useReducer(reducer, defaultValue);
    //loop over the actions inside the actions object - the actions are functions, need to call each
    // of them with the dispatch function - when called react will send to the reducer
    const boundActions = {};
    // loop the actions using a for in loop
    for (let key in actions) {
      // call each action with dispatch
      boundActions[key] = actions[key](dispatch);
    }
    return (
      // the React component that makes data avalible to all the other components
      // the value here is the actual information that is shared with the child components
      <Context.Provider
        value={{
          // pass in state and the boundActions (functions) that we use to change state
          state,
          ...boundActions,
        }}
      >
        {/* // show what ever child component that was passed in as a prop */}
        {children}
      </Context.Provider>
    );
  };
  // outside Provider funciton return
  // Provider - the component  that makes data avalible to everything else inside the application
  // Context - object we will use to get access to that infomation from one of the child components
  return { Context, Provider };
};
