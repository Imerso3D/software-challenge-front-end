import React from 'react'

import ScanList from "./components/ScanList"

import './app.css'

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        Software Challenge
      </header>
      <ScanList />
    </div>
  )
}

export default App
