import React from 'react'
import logo from './logo.svg'
import './App.css'
import Button from './components/button'

function App () {
  const count = 0

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. {count}
        </p>
        <Button label="Click me please" />

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
  )
}

export default App
