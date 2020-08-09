import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),

          title: action.payload.title,
          content: action.payload.content,
        },
      ];

    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    // caste to edit a blobpost
    // need the id of blob post from the action object
    // state is an array
    //
    // case "edit_blogpost":
    //   return state.map((blobPost) => {
    //     if (blogPost.id === action.payload.id) {
    //       //if the blogPost id matches the one in payload
    //       // dont return the original, return the edited one in the payload
    //       return action.payload;
    //     } else {
    //       // if we get here just return the orgiginal (un edited) blogPost
    //       return blogPost;
    //     }
    //   });
    //////// using ternary
    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_blogpost", payload: { title, content } });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content) => {
    dispatch({
      type: "edit_blogpost",
      payload: { id, title, content },
    });
  };
};
export const { Context, Provider } = createDataContext(
  blogReducer,

  { addBlogPost, deleteBlogPost, editBlogPost },

  [{ title: "Test Post", content: "Test Content", id: 1 }]
);
