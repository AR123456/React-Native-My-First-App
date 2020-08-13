import createDataContext from "./createDataContext";
// import the preconfigured axios instance
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    // add a case for get_blogposts
    case "get_blogposts":
      return action.payload;
    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });

    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];

    default:
      return state;
  }
};
// can now make use of the jsonServer in the action functions
const getBlogPosts = (dispatch) => {
  //since this is a network request need to make async await
  return async () => {
    // this is being concatonnated with our specific URL from ngrok
    const response = await jsonServer.get("/blogposts");
    // response.data === blogPosts array with objects

    dispatch({ type: "get_blogposts", payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_blogpost", payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({
      type: "edit_blogpost",
      payload: { id, title, content },
    });
    if (callback) {
      callback();
    }
  };
};
export const { Context, Provider } = createDataContext(
  blogReducer,
  // make it avalible to the app
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  // now that we have data coming back fromm API do not need the inital state

  // [{ title: "Test Post", content: "Test Content", id: 1 }]
  []
);
