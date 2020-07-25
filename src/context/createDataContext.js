//automating the code for reusablitly in other resouces
import React, { useReducer } from "react";
// pass the 3 things that need to be customized anytime we need to create a context for an addtional resource
// 1 the reducer function itself , - reducer
// 2 the helper function that contains the dispatch action   an object with all the call
// back functions that can be made avalible to child components to dispatch
// an action to change state   - actions
// 3 inital state we call use reducer with  like an empty array, an object a number or a string.
export default (reducer, actions, inititalState) => {
  // create context object
  const Context = React.createContext();
  // then create Provider  it takes a prop object that has a children property
  const Provider = ({ children }) => {
    // call use reducer that gets back state and dispatch
    // pass in reducer and intitialState
    //when calling pass in reducer and intitalState
    const [state, dispatch] = useReducer(reducer, initialState);
    /// actions === an object with key :( dispatch ) => {return ()=>{}}
    // loop through the actions object and for every key call the dispatch function
    // that goes into the value call in the JSX
    const boundActions = {};
    for (let key in actions) {
      // key add blog post
      boundActions[key] = actions[key](dispatch);
    }
    // then return the JSX
    return (
      <Context.Provider
        // data than need to share with rest of app is on value prop
        // an object of whatever state is
        // and the spread of boundActions
        value={{ state, ...boundActions }}
      >
        {children}
      </Context.Provider>
    );
  };
  // here return the Context and Provider components we just created
  return { Context, Provider };
};
