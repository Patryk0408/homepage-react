import Tile from './Tile'
import Skills from './Skills'
import Github from './Github'
import { Container } from './styled'

const App = () => {
	return (
		<Container>
			<Tile name='Patryk Krawczyk' />
			<Skills skillsTitle='My skillset includes 🛠️' skills='my skills' />
			<Skills skillsTitle='What I want to learn next 🚀' skills='what next' />
			<Github />
		</Container>
	)
}

export default App
