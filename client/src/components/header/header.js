import React from 'react';
import {
    HeaderContainer, 
    LogoContainer, 
    OptionsContainer, 
    OptionDiv, 
    OptionLink 
} from './header.styles';
import {connect} from 'react-redux';
import CartIcon from '../shopping-cart/cart-icon/cart-icon';
import CartDropDown from '../shopping-cart/cart-dropdown/cart-dropdown';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {signOutStart} from '../../redux/user/user.actions';
import {ReactComponent as Logo} from '../../assets/crown.svg';

const Header = ({currentUser, hidden, signOutStart}) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop' >
                    SHOP
                </OptionLink>
                <OptionLink to='/about' >
                    ABOUT
                </OptionLink>
                {
                    currentUser ?
                    <OptionDiv
                        onClick={signOutStart}
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
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);