import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout/checkout-item/checkout-item';
import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    TestWarningContainer,
    StripeCheckoutButtonStyles
} from './checkoutPage.styles';

const headerArr = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];

const CheckoutPage = ({cartItems, cartTotal}) => {
    return (
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>
                {
                    headerArr.map(item => (
                        <HeaderBlockContainer key={item}>
                            <span>{item}</span>
                        </HeaderBlockContainer>
                        )
                    )
                }
            </CheckoutHeaderContainer>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                    )
                )
            }
            <TotalContainer>
                <span>TOTAL: ${cartTotal}</span>
            </TotalContainer>
            <TestWarningContainer>
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/21 - CVW: 123
            </TestWarningContainer>
            <StripeCheckoutButtonStyles price={cartTotal} />
        </CheckoutPageContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps, null)(CheckoutPage);