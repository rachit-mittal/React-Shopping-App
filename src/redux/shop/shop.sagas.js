import { takeEvery, call, fork, put } from 'redux-saga/effects';
import axios from 'axios';
//import * as api from '../../containers/api/shop';
import * as actions from './shop.actions';


function* getShop(){
    try{
        const result = yield call(() => axios.get('https://my-json-server.typicode.com/rachit-mittal/fake-json-server/data'));
        console.log("result", result.data);
        yield put(actions.getShopSuccess({
            collections: result.data
        }))

        
    }catch(e){

    }
}

function* watchGetShopRequest(){
    yield takeEvery( actions.Types.GET_SHOP_REQUEST, getShop );
}

const shopSaga = [
    fork(watchGetShopRequest)
];

export default shopSaga;