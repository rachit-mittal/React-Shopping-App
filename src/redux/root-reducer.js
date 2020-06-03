import { combineReducers } from 'redux';

import cartReducer from './cart/cart.reducers'


export default combineReducers({
    cart: cartReducer
});
