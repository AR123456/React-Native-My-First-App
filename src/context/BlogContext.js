//https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15707490#overview

// do not need this since we no longer have any jsx inside this file
// import React, { useReducer } from "react";
// now make use of createDataContext
import createDataContext from "./createDataContext";

// now remove all code that got extracted to the createDataContex function

// const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `Blog Post #${blogPosts.length + 1}` }];

    default:
      return state;
  }
};

const addBlogPost = () => {
  dispatch({ type: "add_blogpost" });
};

// export const BlogProvider = ({ children }) => {
//   const [blogPosts, dispatch] = useReducer(blogReducer, []);
/// the only thing that needs to be kept is the addBlogPost action
//   // const addBlogPost = () => {
//   //   dispatch({ type: "add_blogpost" });
//   // };

//   return (
//     <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
//       {children}
//     </BlogContext.Provider>
//   );
// };
////////dont need the export default any longer either
// export default BlogContext;

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
