import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addCartItem = item => ({
    type: CartActionTypes.ADD_CART_ITEM,
    payload: item
});

export const reduceCartItem = item => ({
    type: CartActionTypes.REDUCE_CART_ITEM,
    payload: item
})

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
});