import React from 'react';
import {
    CartIconContainer,
    ShoppingIconContainer,
    ItemCountContainer
} from './cart-icon.styles.js';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

const CartIcon = ({toggleCartHidden, itemCount}) => {
    return (
        <CartIconContainer onClick={toggleCartHidden}>
            <ShoppingIconContainer />
            <ItemCountContainer>{itemCount}</ItemCountContainer>
        </CartIconContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);