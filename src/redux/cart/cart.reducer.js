import CartActionTypes from './cart.types';
import {addItemToCart, reduceItemFromCart} from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }

        case CartActionTypes.ADD_CART_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
            }

        case CartActionTypes.REDUCE_CART_ITEM:
            return {
                ...state,
                cartItems: reduceItemFromCart(state.cartItems, action.payload),
            }

        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                // we set cartItems array to a filtered array that only returns 
                // cartItem that doesn't have the same id of the one we are trying to remove.
                cartItems: state.cartItems.filter(cartItem => (
                    cartItem.id !== action.payload.id
                    )
                )
            }

        default:
            return state;
    }
}

export default cartReducer;