import styled from 'styled-components';
import StripeCheckoutButton from '../../components/stripe/stripe-button/stripe-button';

export const CheckoutPageContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
    background-color: white;
`;

export const CheckoutHeaderContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
    text-transform: capitalize;
    font-size: 20px;
    width: 23%;
    
    &:last-child {
        width: 8%;
    }
`;

export const TotalContainer = styled.div`
    margin-top: 30px;
    margin-left: auto;
    margin-right: 10px;
    font-size: 36px;
`;

export const TestWarningContainer = styled.div`
    text-align: center;
    margin-top: 40px;
    font-size: 24px;
    color: red;
`;

export const StripeCheckoutButtonStyles = styled(StripeCheckoutButton)`
    margin-left: auto;
    margin-top: 50px;
    margin-right: 10px;
`;