import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './mini-cart.scss'
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import { toggleMinicart } from '../../redux/cart/cart.actions';



const MiniCart = ({cartItems, history, dispatch}) => (
    <div className="mini-cart">
        <div className="cart-items">
            {
                cartItems.length ? (
                cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>
            ))
            ): (
                <span className="empty-message">Your cart is empty</span>

            )}

        </div>
        <CustomButton onClick = {() => {
            history.push('/checkout');
            dispatch(toggleMinicart());
            }}>
            Go to Checkout
        </CustomButton>

    </div>
)

const mapStatsToProps = ({cart: { cartItems}}) => ({
    cartItems
})

export default withRouter(connect(mapStatsToProps)(MiniCart));