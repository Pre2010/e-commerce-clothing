import React, { useEffect } from 'react';
import './App.css';
import HomePage from './pages/HomePage/homePage';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/ShopPage/shopPage';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/signIn-signUp/signIn-signUpPage';
import {connect} from 'react-redux';
import {selectCurrentUser} from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';
import CheckoutPage from './pages/CheckOutPage/checkoutPage';
import {checkUserSession} from './redux/user/user.actions';

const App = ({currentUser, checkUserSession}) => {
  
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);

  return (
    <div>
    <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route 
          exact 
          path='/signIn' 
          render={() => currentUser ? (
            <Redirect to='/' />
            ) : (
              <SignInAndSignUpPage />
            )
          } 
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

// returns an object where the prop name is what we want to pass in that dispatches the
// new action that we are trying to pass, which is setCurrentUser
// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// })

export default connect(mapStateToProps, mapDispatchToProps)(App);
