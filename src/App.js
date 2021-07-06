import { useState } from 'react';
import Logged from './pages/Logged';
import Login from './pages/Login'


function App() {
  let [login, setLogin] = useState(true);

  if (login){
    return (
      <Logged />
    );
  }
  else{
    return(
      <>
        <Login />
      </>
    )
  }
}

export default App;
