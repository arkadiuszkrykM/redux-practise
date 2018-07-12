import { combineReducers } from 'redux';
import { mostPopularReducer } from './MostPopular_Reducer';
import { upcomingReducer } from './Upcoming_Reducer';

const RootReducer = combineReducers({
    mostPopular: mostPopularReducer,
    upcoming: upcomingReducer

});

export default RootReducer;
