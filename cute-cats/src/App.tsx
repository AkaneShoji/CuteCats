import React from 'react';
import './App.css';

function App() {

  const text = '%20'
  const fontSize = '50'
  const color = 'white'
  const url = `https://cataas.com/cat/says/${text}?s=${fontSize}&c=${color}`;

  return (
    <div>
      <header className="App-header">
        
        <p>Catstagram</p>  
      </header>
      <div className="App-body">
        <p>ここに猫が入ります。</p>
        <img src={url}/>
      </div>
    </div>
  );
}

export default App;
