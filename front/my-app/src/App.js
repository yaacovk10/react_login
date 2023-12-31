import Login from './Login';
import { useContext, useState } from 'react';
import Categories from './Categories';
import { Outlet } from 'react-router-dom';
import { ColorContext, SetColorContext } from './Context/UserContext';

function App() {
  const [log, setlog] = useState(false)
  const [userEmail, setuserEmail] = useState("")
  const color = useContext(ColorContext)
  const setColor = useContext(SetColorContext)
  const chgColorToBlue = ()=>{
    console.log("inside");
    setColor("blue")
  }
  return (
    <div className="App" style={{backgroundColor : color}}>
      <button onClick={chgColorToBlue}>Change to Blue</button>

    {log ? `Welcome Mr   ${userEmail}` : "not logged"}
      <Login log={setlog} email={setuserEmail}/>
    <Outlet/>
    </div>
  );
}

export default App;
