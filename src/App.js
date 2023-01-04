import logo from './logo.svg';
import './App.css';
import { useState } from 'react';




function App() {

const state = useState();
const [count, setCount] = useState(1);     // destructuring of use state 

function IncNum(){
  setCount(count+1);
}

  return (
    <>
      <div className="wrapper">
        <h2 style={{color:'blueviolet', textAlign:'center'}}>Counter using useState Hook</h2>
        <h1> {count} </h1>
        <button onClick = {IncNum}>Click Me</button>
      </div>
    </>
  );
}

export default App;
