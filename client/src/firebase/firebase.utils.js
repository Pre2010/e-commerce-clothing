import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBrF_6sTG5yfQ_AxLaarhq0Fj8csepAQYg",
    authDomain: "e-commerce-app-8e26f.firebaseapp.com",
    databaseURL: "https://e-commerce-app-8e26f.firebaseio.com",
    projectId: "e-commerce-app-8e26f",
    storageBucket: "e-commerce-app-8e26f.appspot.com",
    messagingSenderId: "545685435287",
    appId: "1:545685435287:web:b6c749f4c61e31b63e8ad2"
};

firebase.initializeApp(config);

// async await is similar to promise/.then .catch syntax
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    // grabs the current authenticated user
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    // determines if there is data for the user
    const snapShot = await userRef.get();

    // check if there is a user.
    // if not, we create a new user
    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// automatically add data from our data files to Firestore.
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });
    return await batch.commit();
};

// grabbing the entire collection and converting it into an object instead of the array that we would receive. 
// so that our front-end can use the data from the back-end.
export const convertCollectionsSnapshotToMap = (collections) => {
    // .docs will gives us our QuerySnapshot array,
    // which we will then .map over
    const transformedCollection = collections.docs.map(doc => {
        // we pull the title and items from the doc.data()
        const {title, items} = doc.data();

        // we then return an object that represents the data we want for our front-end.
        return {
            // we use encodeURI and pass it the title from doc.data
            // so that we can create our routeName that our front-end can use
            routeName: encodeURI(title.toLowerCase()),
            // the id belongs to the doc Snapshot object
            id: doc.id,
            title,
            items
        }
    });

    // this will reduce the array into an object for our reducer to use. the initial accumulator value is an empty object {}.
    return transformedCollection.reduce((accumulator, collection) => {
        // key = accumulator[collection.title.toLowerCase()], value = collection
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
};

// We want to return a Promise so that our Sagas can yield for.
// once we get our userAuth object, we unsubscribe.
export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    })
}

export const googleProvider = new firebase.auth.GoogleAuthProvider();
// triggers the selection of Google account popup
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;