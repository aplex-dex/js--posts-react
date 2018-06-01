import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import reducer from './rootReducer';
import rootSaga from './rootSaga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const enhancers = composeEnhancers(applyMiddleware(thunk, sagaMiddleware));

export default () => {
  const store = createStore(reducer, enhancers);

  sagaMiddleware.run(rootSaga);

  return store;
};
