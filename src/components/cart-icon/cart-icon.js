import React from 'react';

import { connect } from 'react-redux';
import { toggleMinicart } from '../../redux/cart/cart.actions';

import './cart-icon.scss';

import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({toggleMinicart, itemCount}) => (

    <div className= "cart-icon" onClick={toggleMinicart}>
        <ShoppingIcon className = "shopping-icon" />
        <span className = "item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleMinicart: () => dispatch(toggleMinicart())

});

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
});

export default connect (
    mapStateToProps, 
    mapDispatchToProps
)(CartIcon);