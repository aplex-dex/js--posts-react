import { createAction } from 'redux-actions';

import { RECEIVE_COMMENTS, CREATE_COMMENT } from './types';

export const receiveComments = createAction(RECEIVE_COMMENTS);
export const createComment = createAction(CREATE_COMMENT);
