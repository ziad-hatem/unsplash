import React from 'react';
import './App.css';
import Form from './Form';
import Gallery from './Gallery';
import ThemeToggle from './ThemeToggle';
function App() {
  return (
    <>
      <header style={{}}>
        <h1>UNSPLASH IMAGES</h1>
        <ThemeToggle />
      </header>
      <Form />
      <Gallery />
    </>
  )
}

export default App
