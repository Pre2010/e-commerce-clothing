import React from 'react';
import {
    CartItemContainer,
    ItemDetailsContainer,
    NameContainer,
    CartItemImage
} from './cart-item.styles';

const CartItem = ({item: {imageUrl, price, name, quantity} }) => {
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt='item' />
            <ItemDetailsContainer>
                <NameContainer>{name}</NameContainer>
                <span className='price'>
                    {quantity} x ${price}
                </span>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
}

export default CartItem;