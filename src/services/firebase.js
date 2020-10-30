import firebase from 'firebase/app';

import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyApsU4cIgey3c0dFaS_iODmR9EUr-xx5pI",
    authDomain: "spacex-app-rgb.firebaseapp.com",
    databaseURL: "https://spacex-app-rgb.firebaseio.com",
    projectId: "spacex-app-rgb",
    storageBucket: "spacex-app-rgb.appspot.com",
    messagingSenderId: "380266931642",
    appId: "1:380266931642:web:acfcef4249bcf6f613e983"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

function login() {
    return auth.signInWithPopup(provider);
}

function logout() {
    return auth.signOut();
}

export { login, logout, auth }