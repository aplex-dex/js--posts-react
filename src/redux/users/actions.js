import { createAction } from 'redux-actions';

import { RECEIVE_USERS } from './types';

export const receiveUsers = createAction(RECEIVE_USERS);
