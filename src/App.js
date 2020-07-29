import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/HomePage/homePage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/ShopPage/shopPage';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/signIn-signUp/signIn-signUpPage';
import {auth} from './firebase/firebase.utils';

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user);
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
