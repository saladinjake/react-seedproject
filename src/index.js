import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './styles.scss';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import thunkMiddleWare from 'redux-thunk';
import combinedReducer from './redux/_reducers/index'

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, logger,thunkMiddleWare)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(combinedReducer)}>
    <App />
  </Provider>, document.getElementById('app')
);


