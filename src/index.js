import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import RootReducer from './store/reducers/Root_Reducer';
import ReduxThunk from 'redux-thunk';
import App from './containers/App';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(RootReducer)}>
        <App />
    </Provider>,
document.getElementById('root'));

