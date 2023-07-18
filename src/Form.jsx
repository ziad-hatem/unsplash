import React, { useEffect } from 'react'
import { UseGlobalContext } from './UseGlobalContext'
import './Form.css'
const Form = () => {
  const { setContent, isDarkTheme } = UseGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setContent(searchValue);
  }

  useEffect(() => {
    document.querySelector('#submitForm').classList.toggle('dark', isDarkTheme)
  }, [isDarkTheme])

  return (
    <form onSubmit={handleSubmit} id={'submitForm'}>
          <input type="text" name='search'/>
          <button type='submit'>Search</button>
    </form>
  )
}

export default Form