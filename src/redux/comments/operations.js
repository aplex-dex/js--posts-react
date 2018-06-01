import { getPostsComments } from '@/api';
import { receiveComments } from './actions';

export const sendReceiveComments = postId => dispatch =>
  getPostsComments(postId).then(({ data }) => dispatch(receiveComments(data)));
