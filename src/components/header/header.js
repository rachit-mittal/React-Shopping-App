import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';


import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.scss';
import CartIcon from '../cart-icon/cart-icon';
import MiniCart from '../mini-cart/mini-cart';


const Header = ({hidden}) => (

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
            <Link className="option" to="/signin">
                Signin
            </Link>

            <CartIcon />
        </div>
        {hidden ? null: <MiniCart />}
        
    
    </div>
)
const mapStateToProps = ({cart: {hidden}}) => ({
    hidden
});

export default connect (mapStateToProps)(Header);