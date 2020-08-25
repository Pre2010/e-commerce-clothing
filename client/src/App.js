import React, { useEffect, lazy, Suspense } from 'react';
import {GlobalStyle} from './global.styles';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/header';
import {connect} from 'react-redux';
import {selectCurrentUser} from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';
import {checkUserSession} from './redux/user/user.actions';
import Spinner from './components/spinner/spinner';
import ErrorBoundary from './components/error-boundary/error-boundary';

const HomePage = lazy(() => import('./pages/HomePage/homePage'));
const ShopPage = lazy(() => import('./pages/ShopPage/shopPage'));
const SignInAndSignUpPage = lazy(() => import('./pages/signIn-signUp/signIn-signUpPage'));
const CheckoutPage = lazy(() => import('./pages/CheckOutPage/checkoutPage'));
const AboutPage = lazy(() => import('./pages/AboutPage/aboutPage.js'));

const App = ({currentUser, checkUserSession}) => {
  
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);

  return (
    <div>
    <GlobalStyle />
    <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/about' component={AboutPage} />
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
          </Suspense>
        </ErrorBoundary>
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
