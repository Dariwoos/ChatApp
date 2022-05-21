import React, {useState} from 'react'
import { auth, database } from '../firebase'
import firebase from 'firebase/compat/app';
function SendMessages() {
    const [msg, setMsg]= useState('')
    const sendMsg = async (e)=>{
        e.preventDefault()
        const {uid, photoURL} = auth.currentUser
        await  database.collection('messges').add({
            text:msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
    }
  return (
    <div>
        <form onSubmit={sendMsg}>  
      <div className="sendMsg">
      
            <input value={msg} onChange={
                (e)=> setMsg(e.target.value)
            } placeholder='Message...'/>
            <button type='submit'>Send</button>
        </form>
</div>
    </div>
  )
}

export default SendMessages
