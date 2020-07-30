import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/HomePage/homePage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/ShopPage/shopPage';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/signIn-signUp/signIn-signUpPage';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // subscription 
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // checks if a user is signing in and if there is a userAuth
      if (userAuth) {
        
        // gets the userRef from the DB
        const userRef = await createUserProfileDocument(userAuth);

        // we subscribe and listen to any changes made to the userRef data,
        // we also get the first state of the userRef data, snapShot.
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        })
      } else {
        // setting the currentUser state to null on log out or if userAuth is false
        this.setState({currentUser: userAuth});
      }

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {  
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signIn' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
