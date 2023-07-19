import React from 'react'
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'
import { UseGlobalContext } from './UseGlobalContext'
const ThemeToggle = () => {
    const {isDarkTheme, ThemeToggle} = UseGlobalContext()

  return (
    <button onClick={ThemeToggle} style={{
    alignSelf: 'center',
    position: 'relative',
    height: 'maxContent',
      left: '180px',
      backgroundColor: 'transparent',
      outline: 'none',
      border: 'none'
    }}>{isDarkTheme ?  <BsFillSunFill color='white' /> : <BsFillMoonFill/>}</button>
  )
}

export default ThemeToggle