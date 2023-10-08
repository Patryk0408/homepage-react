import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
	return useContext(ThemeContext)
}

export const ThemeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(() => {
		try {
			const item = window.localStorage.getItem('darkMode')
			return item ? JSON.parse(item) : false
		} catch (error) {
			console.log(error)
			return false
		}
	})

	useEffect(() => {
		try {
			window.localStorage.setItem('darkMode', JSON.stringify(darkMode))
		} catch (error) {
			console.log(error)
		}
	}, [darkMode])

	const toggleTheme = () => {
		setDarkMode(!darkMode)
	}

	return <ThemeContext.Provider value={{ darkMode, toggleTheme }}>{children}</ThemeContext.Provider>
}
