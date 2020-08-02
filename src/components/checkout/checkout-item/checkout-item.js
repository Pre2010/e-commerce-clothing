import React from 'react';
import './checkout-item.scss';
import {connect} from 'react-redux';
import {clearItemFromCart, addCartItem, reduceCartItem} from '../../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem, clearItem, reduceItem, addItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div 
                    className='arrow'
                    onClick={() => reduceItem(cartItem)}
                    >&#10094;</div>
                <span className='value'>{quantity}</span>
                <div 
                    className='arrow'
                    onClick={() => addItem(cartItem)}
                    >&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button'
                onClick={() => clearItem(cartItem)}
                >&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addCartItem(item)),
    reduceItem: item => dispatch(reduceCartItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);