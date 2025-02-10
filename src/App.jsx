import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header' 
import "./Header.css"; 
import "./Footer.css"; 
import Footer from './Footer'
import CounterC from './CounterC'
import CounterF from './CounterF'
import Pokemon from './Pokemon'
function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('jihed')
  const [lastname, setlastName] = useState('Lourassi')


  return (
    <>

    <Header name={name} lastname={lastname}/>

    <CounterC counter={10}></CounterC>
    <Pokemon></Pokemon>
    <CounterF />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
