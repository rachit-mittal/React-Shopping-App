import { combineReducers } from 'redux';

import cartReducer from './cart/cart.reducers';
import userReducer from './user/user.reducers';
import directoryReducer from './directory/directory.reducers';
import shopReducer from './shop/shop.reducers';


export default combineReducers({
    cart: cartReducer,
    user: userReducer,
    directory: directoryReducer,
    shop: shopReducer
});
