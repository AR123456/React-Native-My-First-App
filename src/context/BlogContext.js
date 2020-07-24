// import React, { useState } from "react";
// change import over to useReducer
import React, { useReducer } from "react";

const BlogContext = React.createContext();
// blogReducer takes in state and action. Here state could be called blogPosts
// but by convention it is called state
const blogReducer = (state, action) => {
  //depenging on the action type will do some different operation on state object
  switch (action.type) {
    case "add_blogpost":
      // what is returned is basicaly what was in the addBlogPost function
      return [...state, { title: `Blog Post #${blogPosts.length + 1}` }];
    // default case is return
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  //   const [blogPosts, setBlogPosts] = useState([]);
  // change over to useReducer, pass in the reducer function to use and
  // the second arg is the state object.In this case an empty array
  //get back the state object here is blogPosts ( could change the name from blogPosts to
  //state if desired)  and then pass in the  disipatch function
  const [blogPosts, dispatch] = useReducer(blogReducer, []);
  // new addBlogPost function

  const addBlogPost = () => {
    // anytime someone callse addBlob post dispath
    dispatch({ type: "add_blogpost" });
  };

  // deleting the addBlogPost function  since we will use dispatch for this now
  //and remove  addBlogPost from value property below
  //   const addBlogPost = () => {
  //     //... gets all the BlogPosts we have and adds thme to a new array
  //     setBlogPosts([
  //       ...blogPosts,
  //       { title: `Blog Post #${blogPosts.length + 1}` },
  //     ]);
  //   };

  return (
    // <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
    // adding the new addBlogPost with the dispatch in it to value
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
// Context moves information around
