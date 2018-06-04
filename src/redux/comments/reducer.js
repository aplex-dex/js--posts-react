import { objectsArrayToHash } from '@/utils';
import { handleActions } from 'redux-actions';

import { RECEIVE_COMMENTS, COMMENT_ADD } from './types';

const reducerMap = {
  [RECEIVE_COMMENTS]: (state, { payload }) => objectsArrayToHash(payload),
  [COMMENT_ADD.RECEIVED]: (state, { payload }) => ({
    ...state,
    [payload.id]: payload,
  }),
  [COMMENT_ADD.FAILED]: (state, { payload }) => {
    throw Error(payload);
  },
};

export default handleActions(reducerMap, {});
