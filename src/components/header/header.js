import React from 'react';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../shopping-cart/cart-icon/cart-icon';
import CartDropDown from '../shopping-cart/cart-dropdown/cart-dropdown';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

const Header = ({currentUser, hidden}) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/' />
            <OptionsContainer>
                <OptionLink to='/shop' >
                    SHOP
                </OptionLink>
                <OptionLink to='/shop' >
                    CONTACT
                </OptionLink>
                {
                    currentUser ?
                    <OptionDiv
                        onClick={() => auth.signOut()}
                        >
                    SIGN OUT
                    </OptionDiv>
                    :
                    <OptionLink to='/signIn'>
                        SIGN IN
                    </OptionLink>
                }
            <CartIcon />
            </OptionsContainer>
            {
                hidden ? null :
                <CartDropDown/>
            }
            
        </HeaderContainer>
    )
}

// createStructuredSelector passes our state to each of our selectors
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);