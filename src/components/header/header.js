import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';


import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.scss';
import CartIcon from '../cart-icon/cart-icon';
import MiniCart from '../mini-cart/mini-cart';


const Header = ({hidden, currentUser}) => {
    return (        
        <div className="header">
            <Link to="/">
                <Logo className="logo" />        
            </Link>

            <div className="options">
                <Link className="option" to="/shop">
                    Shop
                </Link>
                <Link className="option" to="/shop">
                    Contact
                </Link>

                { currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>Sign Out {currentUser.displayName}</div>
                :
                    <Link className="option" to="/signin"> Sign In</Link>  
                }   

                <CartIcon />
            </div>
            {hidden ? null: <MiniCart />}
            
        
        </div>
    )
}
const mapStateToProps = ({cart: {hidden}, user: {currentUser}}) => ({
    hidden,
    currentUser
});

export default connect (mapStateToProps)(Header);