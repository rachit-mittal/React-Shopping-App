import { all } from 'redux-saga/effects';
import shopsaga from './shop/shop.sagas';

export default function* rootSaga() {
    yield all([
        ...shopsaga
    ]);
}