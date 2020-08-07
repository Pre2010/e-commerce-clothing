import React from 'react';
import {
    CartDropDownContainer,
    CartItemsContainer,
    EmptyMessageContainer,
    CustomButtonContainer
} from './cart-dropdown.styles.js';
import CartItem from '../cart-item/cart-item';
import {connect} from 'react-redux';
import {selectCartItems} from '../../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../../redux/cart/cart.actions';

const CartDropDown = ({cartItems, history, dispatch}) => {
    return (
        <CartDropDownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ? 
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                    :
                    <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                }
            </CartItemsContainer>
            <CustomButtonContainer onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
                }
            }>GO TO CHECKOUT</CustomButtonContainer>
        </CartDropDownContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

// this gets evaluated from inside out. we run connect first then withRouter.
// if we don't give connect a second argument, which is for mapDispatchToProps,
// we can do the short hand way of passing dispatch as a destructured prop of this component.
// then call dispatch() on any event, in this case <CustomButton onClick()
export default withRouter(connect(mapStateToProps)(CartDropDown));