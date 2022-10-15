import React from 'react';
import './App.css';
import Title from './components/Title';
import Tick from './components/Tick';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title name={'Time Tracker'} />
        <section>Yooo</section>
        <Tick></Tick>
        <Tick primary></Tick>
        <Tick checked></Tick>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.  zzzzzz
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
