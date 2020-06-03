import CartActionTypes from './cart.types';

export const toggleMinicart = () => ({
    type: CartActionTypes.TOGGLE_MINICART
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});

export const reduceItemQty = item => ({
    type: CartActionTypes.REDUCE_ITEM_QTY,
    payload: item
});