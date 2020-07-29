import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBLcS6_t8Oz6ZSNqBGqdbvoshICEP0ardo",
    authDomain: "e-commerce-app-9e713.firebaseapp.com",
    databaseURL: "https://e-commerce-app-9e713.firebaseio.com",
    projectId: "e-commerce-app-9e713",
    storageBucket: "e-commerce-app-9e713.appspot.com",
    messagingSenderId: "864705331096",
    appId: "1:864705331096:web:97cbbd0bc140fbe00235ed",
    measurementId: "G-LED1SG1YD0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// triggers the selection of Google account popup
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;