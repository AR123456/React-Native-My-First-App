import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          // new logic for title
          // title: `Blog Post #${state.length + 1}`,
          title: action.payload.title,
          content: action.payload.content,
        },
      ];

    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};
// context needs to be able to accept a new title and content to make blog post
// re pourposing addBlogPost for this
// const addBlogPost = (dispatch) => {
//   return () => {
//     dispatch({ type: "add_blogpost" });
//   };
// };
const addBlogPost = (dispatch) => {
  // pass args from component in here
  return (title, content) => {
    // payload takes key value pairs
    dispatch({ type: "add_blogpost", payload: { title, content } });
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};
export const { Context, Provider } = createDataContext(
  blogReducer,

  { addBlogPost, deleteBlogPost },
  []
);
