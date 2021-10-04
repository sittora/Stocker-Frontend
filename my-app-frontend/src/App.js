import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import logo from './logo.svg';
import './App.css';

function App() {
  const [response], setResponse] = useState([])

  useEffect(() => {
    // need this path to exist
    fetch("http://localhost:9292/test")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setResponse(data);
      });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      <p>This is the test response:</p>
      <p>{response}</p>
    </div>
  );
}

export default App;
