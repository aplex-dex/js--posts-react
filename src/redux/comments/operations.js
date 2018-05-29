import { getPostsComments, createPostsComments } from '@/api';
import { receiveComments, createComment } from './actions';

export const sendReceiveComments = postId => dispatch =>
  getPostsComments(postId).then(({ data }) => dispatch(receiveComments(data)));

export const sendCreateComment = params => dispatch =>
  createPostsComments(params).then(({ data }) => dispatch(createComment(data)));
