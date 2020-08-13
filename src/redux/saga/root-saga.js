import {all, call} from 'redux-saga/effects';
import {fetchCollectionsStart} from '../shop/shop.sagas';

export default function* rootSaga() {
    // yield of generators we invoke
    yield all([
        call(fetchCollectionsStart)
    ])
}