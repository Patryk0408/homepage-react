import React from 'react'
import reportWebVitals from './reportWebVitals'
import { theme } from './theme'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import homepageReducer from './Homepage/homepageSlice'
import { createRoot } from 'react-dom/client'
import { ThemeProvider as ThemeContextProvider } from './Homepage/ThemeContext'

import { RootComponent } from './rootComponent'

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
					<RootComponent />
				</ThemeContextProvider>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
)

reportWebVitals()
