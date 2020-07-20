import { Types } from './shop.actions';

const INITIAL_STATE = {
    collections: []
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.GET_SHOP_SUCCESS: return {
            ...state,
            collections: action.payload.collections.collections
        } 

        default:
            return state
    }
};

export default shopReducer;