import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
import rootReducer from '../reducer/root-reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/root-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

// if we are in a dev environment, we push the logger, 
// which is our redux-logger middleware,
// to the middlewares array.
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// this is where we run our individual sagas
sagaMiddleware.run(rootSaga)

// cached or persistent version of the store.
export const persistor = persistStore(store);

export default {store, persistor};