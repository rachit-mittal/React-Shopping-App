export const Types = {
    GET_SHOP_REQUEST: 'GET_SHOP_REQUEST',
    GET_SHOP_SUCCESS: 'GET_SHOP_SUCCESS'
};


export const getShopRequest = () => ({
    type: Types.GET_SHOP_REQUEST
});

export const getShopSuccess = collections => ({
    type: Types.GET_SHOP_SUCCESS,
    payload: {
        collections
    }
});