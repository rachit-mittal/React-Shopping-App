import React from 'react';
import { connect } from 'react-redux';

import './checkoutpage.scss';
import CheckoutItem from  '../../components/checkout-item/checkout-item';
import { selectCartItems, selectCartTotalPrice } from '../../redux/cart/cart.selectors';

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

const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
    totalPrice: selectCartTotalPrice(state)
});

export default connect(mapStateToProps)(CheckoutPage);