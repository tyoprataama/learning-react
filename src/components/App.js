import React, { useState, useContext, useEffect } from 'react';
import { darkThemeContext } from '../contexts/ThemeContext';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function App(props) {  
  //  Hover style
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
    //  Theme Context
  const {turnOn, setTurnOn, mainColor} = useContext(darkThemeContext);
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
    padding: '10rem',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: mainColor.bg,
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
  const greenOne = {
    color: 'green',
  }

  // Nama
  // const myName = 'Tyo';
  const [displayName, setDisplayName] = useState(props.name);
  //  Button increment & decrement
  const [count, setCount] = useState(0);
  //  React side effect
  useEffect(() => {
    document.title = `You clicked ${count} times`
  });

  //  Merubah nama pada sebelumnya menjadi wazowski selama 3 detik
  function handleClick () {
    setDisplayName('Wazowski');
    setTimeout(() => {
      setDisplayName(props.name);
    }, 3000);
    setCount(count + 1);
  }
  //  Increment & Decrement btn
  function decrementCount () {
    setCount(prevCount => prevCount -1)
  }
  function incrementCount () {
    setCount(prevCount => prevCount +1)
  }
  return (
    <div className='App' style={appwrap}>
      <DarkModeSwitch onChange={setTurnOn}checked={turnOn} size={80} style={{color: '#FFE9A0'}}/>
      <div style={{ color: mainColor.txt }}>
      <p>👆 Change Theme 👆</p>
      <h1>Hello my name is "<button style={mynama} onClick={handleClick}>{displayName}</button>" 👈 (Click it)</h1>
      <h3>(You clicked <span style={greenOne}>green name {count} times</span> click again to change it for 3 second!)</h3>
      <h3>Click the button to increase and decrease the number below!</h3>
      <div style={btnWrap}>
      <button style={btnInc} onClick={decrementCount} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>-</button>
      <span style={countNum}>{count}</span>
      <button style={btnInc} onClick={incrementCount} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>+</button>
      </div>
      </div>
    </div>
  );
}

export default App;
