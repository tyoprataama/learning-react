import './App.css';
import React, { useState } from 'react';

function App() {  
  // Nama
  const myName = 'Tyo';
  const [displayName, setDisplayName] = useState(myName);
  //  Button increment & decrement
  const [count, setCount] = useState(0);
  //  Merubah nama pada sebelumnya menjadi wazowski selama 3 detik
  function handleClick () {
    setDisplayName('Wazowski');
    setTimeout(() => {
      setDisplayName(myName);
    }, 3000);
  }
  //  Increment & Decrement btn
  function decrementCount () {
    setCount(prevCount => prevCount -1)
  }
  function incrementCount () {
    setCount(prevCount => prevCount +1)
  }
  return (
    <div className="App">
      <h1>Hello my name is <button className='mynama' onClick={handleClick}>{displayName}</button></h1>
      <h1>👇👇👇</h1>
      <h3>(Click into the name above (<span className='blueone'>the blue one</span>) to change it for 3 second!)</h3>
      <h3>Click the button to increase and decrease the number below!</h3>
      <div className='btn-wrap'>
      <button className='btn-dec' onClick={decrementCount}>-</button>
      <span className='count'>{count}</span>
      <button className='btn-inc' onClick={incrementCount}>+</button>
      </div>
    </div>
  );
}

export default App;
