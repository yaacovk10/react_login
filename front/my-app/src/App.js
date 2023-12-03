import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { useState } from 'react';

function App() {
  const [log, setlog] = useState(false)
  return (
    <div className="App">
      {log ? "logged" : "not logged"}
      <Login log={setlog} />
    </div>
  );
}

export default App;
