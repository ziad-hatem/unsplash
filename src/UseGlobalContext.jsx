import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useContext, createContext } from 'react'
const url =  `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`
const AppContext = createContext()
const getDefaultDarkMode = () => {
    const prefersDarkMode = window.matchMedia(
        '(prefers-color-scheme:dark)'
    ).matches
    const storedDarkMode = localStorage.getItem('UserPreferTheme') === 'true';
    return storedDarkMode || prefersDarkMode;
}

export const AppProvider = ({ children }) => {
    const [content, setContent] = useState('cat')
    const [isDarkTheme, setIsDarkTheme] = useState(getDefaultDarkMode())
    
    const ThemeToggle = () => {
        const newDarkTheme = !isDarkTheme
        setIsDarkTheme(newDarkTheme)
        localStorage.setItem('UserPreferTheme', newDarkTheme)
    }
    useEffect(() => {
        document.body.classList.toggle('DarkTheme', isDarkTheme )
    }, [isDarkTheme])

    return (
    <AppContext.Provider value={{url, ThemeToggle, isDarkTheme, content, setContent}}>
    {children}
    </AppContext.Provider>
)
}



export const UseGlobalContext = () => {
    return useContext(AppContext)
}