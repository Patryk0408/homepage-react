import { useTheme } from './Homepage/ThemeContext'
import App from './App'
import { GlobalStyle } from './GlobalStyle'

export const RootComponent = () => {
	const { darkMode } = useTheme()

	return (
		<>
			<GlobalStyle darkMode={darkMode} />
			<App />
		</>
	)
}
