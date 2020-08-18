import {combineReducers} from 'redux';
import userReducer from '../user/user.reducer';
import cartReducer from '../cart/cart.reducer';
import directoryReducer from '../directory/directory.reducer';
import shopReducer from '../shop/shop.reducer';
import {persistReducer} from 'redux-persist';

// local storage object
import storage from 'redux-persist/lib/storage';

// configurations we want redux-persist to use
const persistConfig = {
    key: 'root',
    storage,
    // whitelist is an array of reducers that we want to store.
    // we don't add 'user' here since Firebase Auth is handling that for us
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
});

// gives us a modified root reducer with the persistent features on it.
export default persistReducer(persistConfig, rootReducer);