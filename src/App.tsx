import React, { useState } from 'react'
import logo from './logo.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex bg-slate-900 h-screen items-center">
      <header className="p-6 max-w-sm mx-auto text-slate-100 font-medium space-x-4 space-y-4">
        <img src={logo} className="object-center" alt="logo" />
        <p className="font-semibold text-center">Hello Vite + React!</p>
        <p className="text-center">
          <button
            className="bg-sky-500/50 rounded-lg p-2"
            type="button"
            onClick={() => setCount(() => count + 1)}
          >
            count is:
            {count}
          </button>
        </p>
        <p className="text-slate-500 text-center">
          Edit
          <code> App.tsx </code>
          and save to test HMR updates.
        </p>
        <p className="text-center">
          <a
            className="hover:text-cyan-300/80"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="hover:text-cyan-300/80"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
