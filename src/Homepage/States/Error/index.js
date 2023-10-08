import { Message, Info, Title, Image, Button } from './styled'
import ErrorIcon from '../../img/Danger.svg'
import { useTheme } from '../../ThemeContext'

const Error = () => {
	const { darkMode } = useTheme()
	return (
		<Message darkMode={darkMode}>
			<Image darkMode={darkMode} src={ErrorIcon} />
			<Title>Ooops! Something went wrong...</Title>
			<Info>
				Sorry, failed to load Github projects. <br /> You can check them directly on Github.
			</Info>
			<Button darkMode={darkMode} href='https://github.com/Patryk0408' target='_blank'>
				Go to Github
			</Button>
		</Message>
	)
}

export default Error
