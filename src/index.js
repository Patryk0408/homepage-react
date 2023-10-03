import React from 'react'
import reportWebVitals from './reportWebVitals'
import App from './App'
import { theme } from './theme'
import { GlobalStyle } from './GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import homepageReducer from './Homepage/homepageSlice'
import { createRoot } from 'react-dom/client'
import { ThemeProvider as ThemeContextProvider } from './Homepage/ThemeContext'

const store = configureStore({
	reducer: {
		homepage: homepageReducer,
	},
})

const root = createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<ThemeContextProvider>
					<GlobalStyle />
					<App />
				</ThemeContextProvider>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
)

reportWebVitals()
