import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Homepage from './containers/homepage/homepage';
import ShopPage from './containers/shoppage/shoppage';
import Header from './components/header/header'
import SigninPage from './containers/sign-inpage/signinpage';
import CheckoutPage from './containers/checkoutpage/checkoutpage';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  
  unsubscribeFromAuth = null

  componentDidMount() {

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     
      if (userAuth) {
        const userRef = await createUserProfileDocument (userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })        
        });          
        console.log(this.state);       
      }     
      
      setCurrentUser( userAuth )
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header/>
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

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect (null, mapDispatchToProps)(App);
