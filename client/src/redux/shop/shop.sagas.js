import {takeEvery, call, all, put} from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions';

// Get the collection of items from the backend
export function* fetchCollectionsAsync() {
    yield console.log('object');

    try {
    // reference to our 'collections' collection in Firestore
        const collectionRef = firestore.collection('collections');
    
    // This comes back in a Promise form which gets resolved with the value of the collectionRef which is 'snapshot'
    // so instead of chaining a .then and setting the callback to snapshot, we set our constant value to 'snapshot'
        const snapshot = yield collectionRef.get();

    // first param of call is the function and second is the param you pass into the function
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }

    /*
        Saga way (above):

        collectionRef, snapshot, collectionsMap, and the puts above does the same as below but as a Saga.

        Thunk way (below):
        
        whenever the collectionRef changes or when this is ran for the first time,
        we will get a snapshot of the code of our collections object array at the time 
        this code renders.
        collectionRef.get().then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
        })
        .catch(error => dispatch(fetchCollectionsFailure(error.message)));
    */
};

export function* fetchCollectionsStart() {
    yield takeEvery(
        // this will listen to this action and start the Saga
        ShopActionTypes.FETCH_COLLECTIONS_START, 
        fetchCollectionsAsync
    );
};

export function* shopSagas() {
    yield all([
        call(fetchCollectionsStart)
    ]);
};