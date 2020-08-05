import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
import rootReducer from '../reducer/root-reducer';

const middlewares = [];

// if we are in a dev environment, we push the logger, 
// which is our redux-logger middleware,
// to the middlewares array.
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// cached or persistent version of the store.
export const persistor = persistStore(store);

export default {store, persistor};