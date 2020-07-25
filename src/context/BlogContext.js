//https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15707490#overview
//https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15707494#overview
// now make use of createDataContext
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};
const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);
