import React from 'react';
import ReactDOM from 'react-dom';
import App from 'views/App';
import './i18n/i18n';

import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import configureStore from 'store';
// import rootReducer from 'reducers';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
