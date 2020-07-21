import React from "react";
// react library has a funciton called createContext
// this object is like a pipe
const BlogContext = React.createContext();
//when using createContext you also get the Provider
// the provider is what accepts info and makes that avalible to the Bloglist
export const BlogProvider = ({ children }) => {
  // give the BlogContext.Provider a prop called value, now passin in 5
  return <BlogContext.Provider value={50}>{children}</BlogContext.Provider>;
};
// the default context is BlogContext , not the provider
export default BlogContext;
// now decide what component needs the Blog Context, in this case indexScreen
