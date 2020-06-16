import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCz_rVyspuhCIeezg8lR0-jkuPmRqDaboI",
    authDomain: "shopping-app-9efb1.firebaseapp.com",
    databaseURL: "https://shopping-app-9efb1.firebaseio.com",
    projectId: "shopping-app-9efb1",
    storageBucket: "shopping-app-9efb1.appspot.com",
    messagingSenderId: "520832579518",
    appId: "1:520832579518:web:677f25b9440c284b22ebef"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
