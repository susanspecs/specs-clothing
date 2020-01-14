import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA_uF1eA-9FRpdrFErBQVR5s99PsxAgPtA",
    authDomain: "specsclothing-db.firebaseapp.com",
    databaseURL: "https://specsclothing-db.firebaseio.com",
    projectId: "specsclothing-db",
    storageBucket: "specsclothing-db.appspot.com",
    messagingSenderId: "139817097772",
    appId: "1:139817097772:web:f752ff8c31c1f8bcbb4f89",
    measurementId: "G-7ZSDCTMG6J"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;