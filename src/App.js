import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import Homepage from './containers/homepage/homepage';
import ShopPage from './containers/shoppage/shoppage';
import Header from './components/header/header'
import SigninPage from './containers/sign-inpage/signinpage';
import CheckoutPage from './containers/checkoutpage/checkoutpage';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     
      if (userAuth) {
        const userref = await createUserProfileDocument (userAuth);

        userref.onSnapshot(snapShot => {
          this.setState ({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          
          console.log(this.state);

        });
      }
      this.setState({
        currentUser: userAuth
      });

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
