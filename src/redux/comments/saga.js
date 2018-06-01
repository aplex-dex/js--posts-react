import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { createPostsComments } from '@/api';
import { commentAdd } from './actions';
import { COMMENT_ADD } from './types';

function* addComment(action) {
  try {
    const response = yield call(createPostsComments, action.payload);

    yield put(commentAdd.received(response.data));
  } catch (e) {
    yield put(commentAdd.failed(e.message));
  }
}

export default [takeEvery(COMMENT_ADD.REQUESTED, addComment)];
