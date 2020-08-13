import React, { Component } from 'react';
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

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    // subscription 
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   // checks if a user is signing in and if there is a userAuth
    //   if (userAuth) {
        
    //     // gets the userRef from the DB
    //     const userRef = await createUserProfileDocument(userAuth);

    //     // we subscribe and listen to any changes made to the userRef data,
    //     // we also get the first state of the userRef data, snapShot.
    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
    //           id: snapShot.id,
    //           ...snapShot.data()
    //         });
    //     })
    //   }
    //     // setting the currentUser state to null on log out or if userAuth is false
    //     setCurrentUser(userAuth);
    // });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const {currentUser} = this.props;  
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
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

// returns an object where the prop name is what we want to pass in that dispatches the
// new action that we are trying to pass, which is setCurrentUser
// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// })

export default connect(mapStateToProps)(App);
