//https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15707490#overview
//https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15707494#overview
// now make use of createDataContext
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `Blog Post #${blogPosts.length + 1}` }];

    default:
      return state;
  }
};
// this function needs access to dispatch which is in the createDataContext file
// addBlogPost is how we change our state
// pass in the dispatch fuction
const addBlogPost = (dispatch) => {
  // dont call dispatch right away put it in the return
  return () => {
    // return a new function and inside of it return displatch
    dispatch({ type: "add_blogpost" });
  };
};

/////////////////////// in this export destructure out Context and Provider
export const { Context, Provider } = createDataContext(
  // then pass into createDataContext()
  //1 the reducer
  blogReducer,
  //2 an object with all the actions we want to have
  { addBlogPost },
  //2 and then the initial default state value
  []
);
