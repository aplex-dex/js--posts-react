import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

const DEFAULT_PAGINATION_PARAMS = {
  _limit: 5,
  _page: 1,
};

export const getPosts = (url, params) =>
  axios(url || `${API_URL}/posts`, {
    params: {
      ...params,
      ...DEFAULT_PAGINATION_PARAMS,
    },
  });

export const getPostsPage = url => axios(url);

export const getAllUsers = () => axios(`${API_URL}/users`);

export const getPostsComments = postId =>
  axios(`${API_URL}/comments`, {
    params: {
      postId,
    },
  });

export const createPostsComments = ({ postId, name, body }) =>
  axios.post(`${API_URL}/comments`, {
    postId: parseInt(postId, 10),
    name,
    body,
  });
