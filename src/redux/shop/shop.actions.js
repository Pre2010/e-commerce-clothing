import ShopActionTypes from './shop.types';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

// returning a function that gets a dispatch
export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        // reference to our 'collections' collection in Firestore
        const collectionRef = firestore.collection('collections');
        
        // this will execute this function which will go into the reducer for 
        // FETCH_COLLECTIONS_START and set isLoading to true.
        dispatch(fetchCollectionsStart());

        // whenever the collectionRef changes or when this is ran for the first time,
        // we will get a snapshot of the code of our collections object array at the time 
        // this code renders.
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap));
        })
        .catch(error => dispatch(fetchCollectionsFailure(error.message)));
    };
};