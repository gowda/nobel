import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore, Middleware } from 'redux';

import reducer, { initialState, State } from './reducer';
import App from './app';

const stateString = window.localStorage.getItem('state');
const state = stateString ? JSON.parse(stateString) : initialState;

const localStorageMiddleware: Middleware<{}, State> = ({ getState }) => (
  next
) => (action: any) => {
  const result = next(action);
  window.localStorage.setItem('state', JSON.stringify(getState()));
  return result;
};

const store = createStore(
  reducer,
  state,
  compose(
    applyMiddleware(localStorageMiddleware),
    // eslint-disable-next-line no-underscore-dangle
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      // eslint-disable-next-line no-underscore-dangle
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
