import React,{ useState } from 'react';
import './App.css';

function App() {
  const[count , setCount]=useState(5);
  const incrementCounter =() =>{
    setCount(count + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>
        <p>Count : {count}</p>
        <button onclick={incrementCounter}>Increment</button>
        </header>
    </div>
  );
}
export default App;
