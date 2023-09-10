import { Message, Info, Title } from './styled'
import { ReactComponent as ErrorIcon } from '../../img/Danger.svg'

const Error = () => (
	<Message>
		<ErrorIcon />
		<Title>Przepraszamy!</Title>
		<Info>Wystąpił błąd i nie możemy Cię połączyć. Sprawdź swoje połączenie z internetem lub napisz do nas! 🙌</Info>
	</Message>
)

export default Error
