import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// The Key and Project Id that gives me Firebase

const firebaseConfig = {
  apiKey: "AIzaSyD6xbMKo02imFmSuXxe25EOCJ6f6rJkz18",
  authDomain: "chatapp-62d3f.firebaseapp.com",
  projectId: "chatapp-62d3f",
  storageBucket: "chatapp-62d3f.appspot.com",
  messagingSenderId: "57554216963",
  appId: "1:57554216963:web:caad12ce83a83e5bc80636",
  measurementId: "G-J64YMGY0BY"
};
// here where I get the acceses to firebase with the Key and projecs id that provide me firebase by pasing it as parameter.
const firebaseApp = firebase.initializeApp(firebaseConfig);

// I accses the db of firebase
const database = firebaseApp.firestore();
// Accsesing the authentication of firebase which alows me to sign in with google 

const auth = firebase.auth();


export {database, auth}