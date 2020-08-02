export const addItemToCart = (cartItems, cartItemToAdd) => {
    // this function checks if we already have the same item in our cart.
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    // if we do have an existing cart item with the same id,
    // we return a new array to make React rerender our component with the new array.
    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }

    // if the item is a new one without any duplicate ones in the cart, we return it with a base quantity of 1.
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
};

export const reduceItemFromCart = (cartItems, cartItemToReduce) => {
    // we look for the cart item we want to reduce the quantity of
    const itemToReduce = cartItems.find(
        cartItem => cartItem.id === cartItemToReduce.id
    );

    // we check if the quantity of the item is 1, if so remove it from the cart.
    // else, reduce it's quantity by 1.
    if (itemToReduce.quantity === 1) {
        return cartItems.filter(cartItem =>
            cartItem.id !== itemToReduce.id
        );
    } else {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToReduce.id ?
            {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
        );
    };
}