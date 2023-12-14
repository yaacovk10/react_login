import Login from './Login';
import { useState } from 'react';
import Categories from './Categories';

function App() {
  const [log, setlog] = useState(false)
  const [userEmail, setuserEmail] = useState("")
  return (
    <div className="App" >
    {log ? `Welcome Mr   ${userEmail}` : "not logged"}
      <Login log={setlog} email={setuserEmail}/>
    <Categories></Categories>
    </div>
  );
}

export default App;
