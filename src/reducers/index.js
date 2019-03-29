




import { combineReducers } from 'redux';
import articles from './articles_reducer';
import gallery from './galleries_reducer';
import cars from './cars_reducer';

const rootReducer = combineReducers({
    articles,
    gallery,
    cars
});

export default rootReducer;