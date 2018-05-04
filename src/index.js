import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import RootPage from '@/pages/RootPage';

import initStore from './redux/store';

const store = initStore();

ReactDOM.render(
  <Provider store={store}>
    <RootPage />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
