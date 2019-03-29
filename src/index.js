import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './styles.scss';

import { Provider } from 'react-redux';
import {createStore , applyMiddleware } from 'redux';
import  promiseMiddleware from 'redux-promise';
import { BrowserRouter as Router } from 'react-router-dom';
import { createLogger} from 'redux-logger';

const 
const createStoreWithMiddleware = applyMiddleware(
    promiseMiddleware
	)(createStore);
ReactDOM.render(
	<Provider store={createStoreWithMiddleware}>
	    <App />
	</Provider>, document.getElementById('app'));
