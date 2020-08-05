import React from 'react';
import { 
    CheckoutItemContainer, 
    ImageContainer, 
    NameContainer, 
    PriceContainer, 
    QuantityContainer, 
    ArrowContainer, 
    RemoveButtonContainer, 
    ValueContainer
    } from './checkout-item.styles';
import {connect} from 'react-redux';
import {clearItemFromCart, addCartItem, reduceCartItem} from '../../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem, clearItem, reduceItem, addItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt='item' />
            </ImageContainer>
            <NameContainer>{name}</NameContainer>
            <QuantityContainer>
                <ArrowContainer
                    onClick={() => reduceItem(cartItem)}
                    >&#10094;
                </ArrowContainer>
                <ValueContainer>{quantity}</ValueContainer>
                <ArrowContainer
                    onClick={() => addItem(cartItem)}
                    >&#10095;
                </ArrowContainer>
            </QuantityContainer>
            <PriceContainer>{price}</PriceContainer>
            <RemoveButtonContainer
                onClick={() => clearItem(cartItem)}
                >&#10005;
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addCartItem(item)),
    reduceItem: item => dispatch(reduceCartItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);