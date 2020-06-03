import React from 'react';
import { connect } from 'react-redux';

import { removeItem, reduceItemQty, addItem } from '../../redux/cart/cart.actions';
import './checkout-item.scss';

const CheckoutItem = ({item, removeItem, reduceItemQty, addItem}) => {

    const {imageUrl, price, name, quantity} = item;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <div className="name">{name} </div>
            <div className="quantity">
                <div className="arrow" onClick={() => reduceItemQty(item)}>&#10094;</div>
                    <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(item)}>&#10095;</div>
            </div>
            <div className="price">{price}</div>
            <div className="remove-button" onClick={() => removeItem(item)}>&#10008;</div>
        </div>
    
    );
};

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    reduceItemQty: item => dispatch(reduceItemQty(item)),
    addItem: item => dispatch(addItem(item))
});

export default connect (null, mapDispatchToProps)(CheckoutItem);
