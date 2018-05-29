import { handleActions } from 'redux-actions';

import { objectsArrayToHash, parseLinkHeader, addFakeData } from '@/utils';
import { RECEIVE_POSTS, CHANGE_POSTS_PAGE, CHANGE_CURRENT_POST } from './types';

const initialState = {
  items: {},
  pagination: {
    first: null,
    prev: null,
    next: null,
    last: null,
  },
};

const reducerMap = {
  [RECEIVE_POSTS]: (state, { payload }) => ({
    items: addFakeData(objectsArrayToHash(payload.data)),
    pagination: parseLinkHeader(payload.link),
  }),
  [CHANGE_POSTS_PAGE]: (state, { payload }) => ({
    ...state,
    items: addFakeData(objectsArrayToHash(payload.data)),
    pagination: parseLinkHeader(payload.link),
  }),
  [CHANGE_CURRENT_POST]: (state, { payload }) => ({
    ...state,
    currentPostId: payload.currentPostId,
  }),
};

export default handleActions(reducerMap, initialState);
