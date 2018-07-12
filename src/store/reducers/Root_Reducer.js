import { combineReducers } from 'redux';
import { moviesReducer } from './Movies_Reducer';

const RootReducer = combineReducers({
    movies: moviesReducer
});

export default RootReducer;
