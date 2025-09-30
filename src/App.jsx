import { useState } from 'react'
import reactLogo from '/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Mi Portafolio React + JavaScript</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Contador: {count}
        </button>
        <p>
          Edita <code>src/App.jsx</code> y guarda para ver los cambios.
        </p>
      </div>
      <p className="read-the-docs">
        ¡Tu entorno React con JavaScript está listo para programar!
      </p>
    </div>
  )
}

export default App