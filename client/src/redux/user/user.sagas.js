import {takeLatest, put, all, call} from 'redux-saga/effects';
import UserActionTypes from './user.types';
import {
    auth, 
    googleProvider, 
    createUserProfileDocument,
    getCurrentUser
} from '../../firebase/firebase.utils';
import {
    signInSuccess, 
    signInFailure,
    signOutSuccess,
    signOutFailure,
    signUpSuccess,
    signUpFailure
} from './user.actions';

// Get Snapshot from UserAuth, which both the Google/Email Sign In both use.
export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot, ...userSnapshot.data() }));
    } catch (error) {
        yield put(signInFailure(error));
    }
};

// Google Sign In
export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
};

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
};

// Email Sign In
export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
};

export function* signInWithEmail({payload: {email, password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
};

// Check if user if authenticated and has a session
export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
};

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        // if userAuth session is null, return out of this function.
        if (!userAuth) return;
        // else get snapshot data from userAuth.
        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signInFailure(error));
    }
};

// Sign Out
export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
};

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error));
    }
};

// Sign In
export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
};

export function* signUp({payload: {email, password, displayName}}) {
    try {
        const {user}  = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({user, additionalData: {displayName}}));
    } catch (error) {
        yield put(signUpFailure(error));
    }
};

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
};

export function* signInAfterSignUp({payload: {user, additionalData}}) {
    yield getSnapshotFromUserAuth(user, additionalData);
};

// User Sagas
export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ]);
};