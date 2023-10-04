import { Wrapper, MyPhoto, Description, Title, Paragraph, Span, Link, ToggleButton } from './styled'
import myImage from '../img/patryk-k.jpg'
import { ReactComponent as MailIcon } from '../img/Message.svg'
import { useTheme } from '../ThemeContext'

const Tile = ({ name }) => {
	const { darkMode, toggleTheme } = useTheme()

	return (
		<Wrapper>
			<ToggleButton darkMode={darkMode} onClick={toggleTheme}>
				{darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
			</ToggleButton>
			<MyPhoto src={myImage} alt='Patryk Krawczyk' height='398' width='398' />
			<Description>
				<Span>This is</Span>
				<Title>{name}</Title>
				<Paragraph darkMode={darkMode}>👨🏻‍💻 I'm a passionate Web Developer in love with Java Script.</Paragraph>
				<Link href='mailto:patryk.krwaczyk.it@gmail.com' darkMode={darkMode}>
					<MailIcon />
					Hire me
				</Link>
			</Description>
		</Wrapper>
	)
}

export default Tile
