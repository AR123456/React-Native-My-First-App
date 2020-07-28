import createDataContext from "./createDataContext";

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
