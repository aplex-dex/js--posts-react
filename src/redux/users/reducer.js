import { handleActions } from 'redux-actions';

import { objectsArrayToHash } from '@/utils';
import { RECEIVE_USERS } from './types';

const reducerMap = {
  [RECEIVE_USERS]: (state, { payload }) => objectsArrayToHash(payload),
};

export default handleActions(reducerMap, {});
