import React from 'react'
import { UseState, UseEffect, Home, UseRef } from './components';
import './App.css'

function App() {

  return (
    <div className="App">
      {/* This will be a gallery of websites using react Router */}
      <UseState />
      <UseEffect />
      {/* <Home /> */}
      <UseRef />
    </div>
  )
}

export default App
