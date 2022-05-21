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
    <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
        <button style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600' }} onClick={signInAuth}> Sign In with Google</button>
    </div>
  )
}

export default SignIn; 
