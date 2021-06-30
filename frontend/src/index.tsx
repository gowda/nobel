import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore, Middleware } from 'redux';

import reducer, { State } from './reducer';
import App from './app';

const initialState: State = {
  fetching: {
    required: true,
    happening: false,
    complete: false,
  },
  meta: {
    total: 0,
    fetched: 0,
  },
  laureates: {
    fetched: false,
    fetching: false,
    error: null,
    data: [],
  },
  categories: {
    fetched: false,
    fetching: false,
    error: null,
    data: [],
  },
};

const stateString = window.localStorage.getItem('state');
const state = stateString ? JSON.parse(stateString) : initialState;

const localStorageMiddleware: Middleware<{}, State> =
  ({ getState }) =>
  (next) =>
  (action: any) => {
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
