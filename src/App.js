import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Homepage from './containers/homepage/homepage';
import ShopPage from './containers/shoppage/shoppage';
import Header from './components/header/header'
import SigninPage from './containers/sign-inpage/signinpage';
import CheckoutPage from './containers/checkoutpage/checkoutpage';
import contactpage from './containers/contactpage/contactpage';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';


const HatsPage = () => (
  <h1>HATS PAGE</h1>
);

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
          <Route exact path='/signin' render = {()=> this.props.currentUser ? (<Redirect to='/' />) : (<SigninPage />) } />
          <Route exact path= '/checkout' component={CheckoutPage} />
          <Route exact path= '/contact' component={contactpage} />
          <Route exact path= '/shop/hats' component={HatsPage} />
        </Switch>
      </div>
    );
  }  
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect (mapStateToProps, mapDispatchToProps)(App);
