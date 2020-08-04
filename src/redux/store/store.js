import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
import rootReducer from '../reducer/root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// cached or persistent version of the store.
export const persistor = persistStore(store);

export default {store, persistor};