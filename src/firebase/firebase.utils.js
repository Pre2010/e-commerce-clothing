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
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// triggers the selection of Google account popup
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;