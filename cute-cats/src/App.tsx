import React from 'react'
import Cat from './Cat'
import './App.css'
function App() {
  const numbers = Array.from(new Array(2)).map((v,i) => i)
  const listItems = numbers.map(() =>
    <Cat uniqueNum={Math.random()} />
  )

  return (
    <div>
      <header className="App-header"> 
        <p>Catstagram</p>
      </header>
      {listItems}
    </div>
  )
}

export default App
