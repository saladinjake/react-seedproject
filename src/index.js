import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './styles.scss';

import { Provider } from 'react-redux';
import { createLogger} from 'redux-logger';
import {createStore , applyMiddleware } from 'redux';
import  promiseMiddleware from 'redux-promise';
//import thunkMiddleWare from 'redux-thunk';
//import combinedReducer from './redux/reducers/'



const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(
    promiseMiddleware,
    logger
)(createStore);

ReactDOM.render(
	/*<Provider store={createStoreWithMiddleware(combinedReducer)}>*/
	    <App />
	/*</Provider>*/, 
	document.getElementById('app')
);
