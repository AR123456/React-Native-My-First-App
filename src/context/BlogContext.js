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
// need to dispatch and action for editing, this is how we change the state object
// take content that user provided   action function
const editBlogPost = (dispatch) => {
  // need the new title and content also need id of post
  return (id, title, context) => {
    //this is what actualy runs inside the component
    // object with type property and payload object
    dispatch({
      type: "edit_blogpost",
      payload: { id, title, content },
    });
  };
};
export const { Context, Provider } = createDataContext(
  blogReducer,
  // make editBlogPost function avalible to all children
  { addBlogPost, deleteBlogPost, editBlogPost },
  // adding a default blog post for testing
  [{ title: "Test Post", content: "Test Content", id: 1 }]
);
