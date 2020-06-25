import { combineReducers } from 'redux';

import cartReducer from './cart/cart.reducers';
import userReducer from './user/user.reducers';


export default combineReducers({
    cart: cartReducer,
    user: userReducer
});
