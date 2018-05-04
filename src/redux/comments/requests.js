import axios from 'axios';

export const getPostsComments = postId =>
  axios('https://jsonplaceholder.typicode.com/comments', {
    params: {
      postId,
    },
  });

export const createPostsComments = ({ postId, name, body }) =>
  axios.post('https://jsonplaceholder.typicode.com/comments', {
    postId: parseInt(postId, 10),
    name,
    body,
  });
