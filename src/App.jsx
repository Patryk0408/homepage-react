import Tile from './Tile'
import Skills from './Skills'
import { Container } from './styled'

const App = () => {
	return (
		<Container>
			<Tile name='Patryk Krawczyk' />
			<Skills skillsTitle='My skillset includes 🛠️' skills='my skills' />
			<Skills skillsTitle='What I want to learn next 🚀' skills='what next' />
		</Container>
	)
}

export default App
