import { createAction } from 'redux-actions';

import { makeActions } from '@/utils';
import { RECEIVE_COMMENTS, COMMENT_ADD } from './types';

export const receiveComments = createAction(RECEIVE_COMMENTS);

export const commentAdd = makeActions(COMMENT_ADD);
