import React, { useEffect, useState } from 'react'
import { database } from '../firebase'
import SendMessages from './SendMessages'
import SignOut from './SignOut'

function Chat() {
    const [messages, setMessages] = useState('')
    useEffect(()=>{
        database.collection('messges').orderBy('createdAt').limit(50).onSnapshot((snapShot)=>{
            setMessages(snapShot.docs.map(doc => doc.data()))
        })

    },[])
  return (
    <div>
        <SignOut></SignOut>
      <div className="msgs">
              {messages.map(({id, text, photoURL})=>{
            console.log(text)
            console.log(messages)
            return(
                <div key={id}>
                    <img src={photoURL} alt='Avatar'></img>
                    <p>{text}</p>
                </div>
            )
        })}
      </div>

        <SendMessages/>
    </div>
  )
}

export default Chat
