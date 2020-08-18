import {createSelector} from 'reselect';

// input selector which gets the whole state
// and returns a slice of a state, in this case cart.
const selectCart = state => state.cart;

// output selector. 
// createSelector takes two arguments, a collection of input selectors and a function that returns a value we want from that selector
// this is a Memoized selector
export const selectCartItems = createSelector(
    [selectCart], 
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => (
                accumulatedQuantity + cartItem.quantity
            ), 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => (
                accumulatedQuantity + (cartItem.quantity * cartItem.price)
            ), 0)
);

