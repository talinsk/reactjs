import { Test_Posts_API_Url } from "../../utils/api";

export const GET_POSTS = "POSTS::GET_POSTS";
export const GET_POSTS_REQUEST = "POSTS::GET_POSTS_REQUEST";
export const GET_POSTS_SUCCESS = "POSTS::GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "POSTS::GET_POSTS_FAILURE";

export const getPostsRequest = () => ({
  type: GET_POSTS_REQUEST,
});

export const getPostsSuccess = (data) => ({
  type: GET_POSTS_SUCCESS,
  posts: data
});

export const getPostsFailure = (err) => ({
  type: GET_POSTS_FAILURE,
  error: err
});

export const getPostsMiddleware = () => async (dispatch) => {
  dispatch(getPostsRequest());

  try {
    const res = await fetch(Test_Posts_API_Url);

    const response = await res.json();

    dispatch(getPostsSuccess(response));
  } catch (err) {
    dispatch(getPostsFailure(err.message));
  }
};