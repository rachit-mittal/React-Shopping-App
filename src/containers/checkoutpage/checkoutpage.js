import React from 'react';
import { connect } from 'react-redux';

import './checkoutpage.scss';
import CheckoutItem from  '../../components/checkout-item/checkout-item';

const CheckoutPage = ({cartItems, totalPrice}) => (

    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>

        
        {
            cartItems.map(cartItem => (<CheckoutItem key = {cartItem.id} item = {cartItem} />
        ))}

        <div className="total">TOTAL: {totalPrice}</div>   
       

    </div>
);

const mapStateToProps = ({cart: { cartItems }}) => ({
    cartItems,
    totalPrice: cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0)
});

export default connect(mapStateToProps)(CheckoutPage);