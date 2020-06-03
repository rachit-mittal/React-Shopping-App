import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import Homepage from './containers/homepage/homepage';
import ShopPage from './containers/shoppage/shoppage';
import Header from './components/header/header'
import SigninPage from './containers/sign-inpage/signinpage';
import CheckoutPage from './containers/checkoutpage/checkoutpage';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/shop' exact component={ShopPage} />
        <Route path='/signin' exact component={SigninPage} />
        <Route exact path= '/checkout' component={CheckoutPage} />
      </Switch>
    </div>
  );
}

export default App;
