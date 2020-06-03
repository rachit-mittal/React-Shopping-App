import React from 'react';

import { connect } from 'react-redux';
import { toggleMinicart } from '../../redux/cart/cart.actions';

import './cart-icon.scss';

import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

const CartIcon = ({toggleMinicart, itemCount}) => (

    <div className= "cart-icon" onClick={toggleMinicart}>
        <ShoppingIcon className = "shopping-icon" />
        <span className = "item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleMinicart: () => dispatch(toggleMinicart())

});

const mapStateToProps = ({cart: { cartItems }}) => ({
    itemCount: cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
});

export default connect (
    mapStateToProps, 
    mapDispatchToProps
)(CartIcon);