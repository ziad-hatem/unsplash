import React from 'react';
import './App.css';
import Form from './Form';
import Gallery from './Gallery';
import ThemeToggle from './ThemeToggle';
function App() {
  return (
    <>
      <header>
        <h1>UNSPLASH IMAGES</h1>
        <div className='toggle'><ThemeToggle /></div>
      </header>
      <Form />
      <Gallery />
    </>
  )
}

export default App
