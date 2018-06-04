import { all } from 'redux-saga/effects';

import commentSagaListeners from './comments/saga';

export default function* rootSaga() {
  yield all([...commentSagaListeners]);
}
