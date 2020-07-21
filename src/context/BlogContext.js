import React from "react";
// react library has a funciton called createContext
// this object is like a pipe
const BlogContext = React.createContext();
// gets the prop children
// export to use in app.js but not as default here, eventualy the default export is going to be BlogContext
export const BlogProvider = ({ children }) => {
  return <BlogContext.Provider>{children}</BlogContext.Provider>;
};
