import React, {useState} from 'react'
import './App.css';
import {Button} from 'react-bootstrap'

function App() {

  const [count, setCount] = useState(1)
  return (
    <div className="App">
      <h1>Ecom - Dashboard Count:{count}</h1>
      <button>React Button</button>
      <Button onClick={()=>setCount(count+1)} >BootStrap Button</Button>
    </div>
  );
}

export default App;
