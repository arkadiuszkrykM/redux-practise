import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './store/reducers/Root_Reducer';
import ReduxThunk from 'redux-thunk';
import App from './containers/App';

// const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
document.getElementById('root'));

