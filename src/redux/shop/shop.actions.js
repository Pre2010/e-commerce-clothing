import ShopActionTypes from './shop.types';


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
        
    };
};