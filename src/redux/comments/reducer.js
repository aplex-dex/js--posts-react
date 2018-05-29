import { objectsArrayToHash } from '@/utils';
import { handleActions } from 'redux-actions';

import { RECEIVE_COMMENTS, CREATE_COMMENT } from './types';

const reducerMap = {
  [RECEIVE_COMMENTS]: (state, { payload }) => objectsArrayToHash(payload),
  [CREATE_COMMENT]: (state, { payload }) => ({
    ...state,
    [payload.id]: payload,
  }),
};

export default handleActions(reducerMap, {});
