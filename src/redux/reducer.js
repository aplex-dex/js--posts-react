import {
  RECEIVE_POSTS,
  CHANGE_POSTS_PAGE,
  CHANGE_CURRENT_POST,
} from '@/redux/posts/actions';
import { RECEIVE_USERS } from '@/redux/users/actions';
import { RECEIVE_COMMENTS, CREATE_COMMENT } from '@/redux/comments/actions';

const initialState = {
  posts: {},
  users: {},
  comments: {},
  pagination: {
    first: null,
    prev: null,
    next: null,
    last: null,
  },
  currentPostId: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        posts: action.posts,
        pagination: action.pagination,
      };
    case RECEIVE_USERS:
      return {
        ...state,
        users: action.users,
      };
    case CHANGE_POSTS_PAGE:
      return {
        ...state,
        posts: action.posts,
        pagination: action.pagination,
      };
    case CHANGE_CURRENT_POST:
      return {
        ...state,
        currentPostId: action.currentPostId,
      };
    case RECEIVE_COMMENTS:
      return {
        ...state,
        comments: action.comments,
      };
    case CREATE_COMMENT:
      return {
        ...state,
        comments: { ...state.comments, ...action.comment },
      };
    default:
      return state;
  }
};
