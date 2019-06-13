import React, { useEffect } from 'react';
import logo from './logo.svg';
import hammy from './hammy.jpg';
import './App.css';

function App() {
  const getDad = async () => {
    const res = await fetch('https://icanhazdadjoke.co/', {
      headers: {
        Accept: 'application/json'
      }
    });
    const data = await res.json();
    console.log('data:', data);
  };

  useEffect(() => {
    getDad();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={hammy} className="App-logo" alt="logo" />
        <div className="offscreen" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
