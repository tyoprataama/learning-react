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
  //  Hover style
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  //  React Style
  const btnInc = {
    padding: '10px 40px',
    fontSize: '20px',
    backgroundColor: isHovering ? 'red' : 'white',
    color: isHovering ? 'white' : 'red',
    border: '1px solid red',
    cursor: 'pointer',
  }
  const countNum = {
    padding: '2px 20px',
    fontSize: '30px',
    border: 'none',
    marginRight: '5px',
    marginLeft: '5px',
    borderRadius: '15px',
  }
  const btnWrap = {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  }
  const appwrap = {
    padding: '10px',
    justifyContent: 'center',
    textAlign: 'center',
  }
  const mynama = {
    padding: '3px',
    fontSize: '30px',
    fontWeight: 'bold',
    backgroundColor: '#fff',
    border: 'none',
    cursor: 'pointer',
    color: 'green',
    textDecorationLine: 'underline',
    display: 'inline',
  }
  const blueOne = {
    color: 'green',
  }
  return (
    <div className="App" style={appwrap}>
      <h1>Hello my name is <button style={mynama} onClick={handleClick}>{displayName}</button></h1>
      <h1>👇👇👇</h1>
      <h3>(Click into the name above (<span style={blueOne}>the green one</span>) to change it for 3 second!)</h3>
      <h3>Click the button to increase and decrease the number below!</h3>
      <div style={btnWrap}>
      <button style={btnInc} onClick={decrementCount} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>-</button>
      <span style={countNum}>{count}</span>
      <button style={btnInc} onClick={incrementCount} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>+</button>
      </div>
    </div>
  );
}

export default App;
