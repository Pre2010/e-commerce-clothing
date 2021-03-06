import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

// Stripe API wants price to be in cents.
// example: price = $10, cents = 1000
const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HCQc4K7TSBymxI3r1Glx3V4TJtbtonpGoVGNRKWLiYLYFKYoCiCCWlL1oocdosXJWjoeIos1F7pJUCNHO6sOaCa0050K28oBY';
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        })
        .then(response => {
            alert('Payment successful')
        })
        .catch(error => {
            console.log('Payment error: ', error);
            alert('There was an issue with your payment. Please make sure you sed the provided credit card');
        })
    };

    return (
        <StripeCheckout 
            label='Pay Now'
            name='E-Commerce LLC.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;