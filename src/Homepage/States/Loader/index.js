import { Loading, Title, Image } from './styled.js'
import LoaderWhile from '../../img/icon-spinner.svg'
import { useTheme } from '../../ThemeContext'

const Loader = () => {
	const { darkMode } = useTheme()

	return (
		<Loading>
			<Title darkMode={darkMode}>Please wait, projects are being loaded...</Title>
			<Image src={LoaderWhile} alt='GitHub' />
		</Loading>
	)
}

export default Loader
