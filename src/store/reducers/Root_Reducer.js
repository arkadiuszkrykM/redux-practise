import { combineReducers } from 'redux';
import { mostPopularReducer } from './MostPopular_Reducer';
import { upcomingReducer } from './Upcoming_Reducer';
import { popularPeopleReducer } from './PopularPeople_Reducer';
import { authReducer } from './Auth_Reducer';
import { reducer as formReducer } from 'redux-form';

const RootReducer = combineReducers({
    mostPopular: mostPopularReducer,
    upcoming: upcomingReducer,
    popularPeople: popularPeopleReducer,
    auth: authReducer,
    form: formReducer
});

export default RootReducer;
