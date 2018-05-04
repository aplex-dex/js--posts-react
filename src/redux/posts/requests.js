import axios from 'axios';

const DEFAULT_PAGINATION_PARAMS = {
  _limit: 5,
  _page: 1,
};

export const getPosts = (url, params) =>
  axios(url || 'https://jsonplaceholder.typicode.com/posts', {
    params: {
      ...params,
      ...DEFAULT_PAGINATION_PARAMS,
    },
  });

export const getPostsPage = url => axios(url);
