import './App.css';
import Chat from './component/Chat';
import SignIn from './component/SignIn';
import {auth} from './firebase.js'
import {useAuthState} from 'react-firebase-hooks/auth'
function App() {

  // useAtuhState ith hook that helps me to authenticat the user if signed in,
  // then it will gives a lot of data that i can use [name, email, photo ....] otherwise gives me null 

  const [user] = useAuthState(auth)
  console.log(user)
  return (
   <>
   {user ? <Chat/> :  <SignIn/>}
  
   
   </>
  );
}

export default App;
