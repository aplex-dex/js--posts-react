import { objectsArrayToHash } from '@/utils';
import {
  getPostsComments,
  createPostsComments,
} from '@/redux/comments/requests';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const CREATE_COMMENT = 'CREATE_COMMENT';

const provideComments = ({ data }) => ({
  type: RECEIVE_COMMENTS,
  comments: objectsArrayToHash(data),
});

const provideCreteComment = ({ data }) => ({
  type: CREATE_COMMENT,
  comment: objectsArrayToHash([data]),
});

export const reciveComments = postId => dispatch =>
  getPostsComments(postId).then(response =>
    dispatch(provideComments(response)),
  );

export const createComment = params => dispatch =>
  createPostsComments(params).then(response =>
    dispatch(provideCreteComment(response)),
  );
