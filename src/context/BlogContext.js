import createDataContext from "./createDataContext";
// 2- now that we have created the deleteBlogPost, the action add it as a case
// in the switch
const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999), // note there is a chance of a duplicate id Math.random
          title: `Blog Post #${state.length + 1}`,
        },
      ];
    // watch for action type of "delete_blogpost"
    case "delete_blogpost":
      // in return make needed change to state then return it
      // use filter to iterate through all the elements in the state
      // array  and run some child function that we are going to pass
      // if we return a true value will get a new overall array
      // pass in the blogPost object if the passed in id is not equal to what is in the payload
      // add it to the new array
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};
const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};
//every time we want to add an additional way to change state object we need to
//1 add in a new function that's going to call the dispatch function
// dispatches are how we make change to state object
//2 add an additionl case to the reducer  to handle the change we want to make state object
const deleteBlogPost = (dispatch) => {
  // in return call dispatch with some object thath is going to describe how we want to change
  // state object
  //// pass id in as argument on return
  return (id) => {
    // by convention add type property and name for operation
    // the dispatch can also optionally have a payload property added
    // this is avalible in the dispatch because I added it as an argument in the return
    dispatch({ type: "delete_blogpost", payload: id });
  };
};
export const { Context, Provider } = createDataContext(
  blogReducer,
  //3 add the new function to call to create data context - now it can be used on index screen
  { addBlogPost, deleteBlogPost },
  []
);
