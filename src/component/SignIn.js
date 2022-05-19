import React from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {auth} from '../firebase.js'
function SignIn() {
    const signInAuth = () =>  {
        // {auth} its coming from firebase.js there where really get the accses to authentication. And from firebase there where I chose with what I want to authenticat.
     
        const provider  = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
  return (
    <div>
        <button onClick={signInAuth}> Sign In with Google</button>
    </div>
  )
}

export default SignIn; 