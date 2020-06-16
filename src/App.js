import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import Homepage from './containers/homepage/homepage';
import ShopPage from './containers/shoppage/shoppage';
import Header from './components/header/header'
import SigninPage from './containers/sign-inpage/signinpage';
import CheckoutPage from './containers/checkoutpage/checkoutpage';
import { auth} from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/shop' exact component={ShopPage} />
          <Route path='/signin' exact component={SigninPage} />
          <Route exact path= '/checkout' component={CheckoutPage} />
        </Switch>
      </div>
    );
  }

  
}

export default App;
