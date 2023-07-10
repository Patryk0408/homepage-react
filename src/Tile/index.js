import { Wrapper, MyPhoto, Description, Title, Paragraph, Span, Link } from './styled'
import myImage from '../img/patryk-k.jpg'
import { ReactComponent as MailIcon } from '../img/Message.svg'

export const Tile = ({ name }) => {
	return (
		<Wrapper>
			<MyPhoto src={myImage} alt='Patryk Krawczyk' height='398' width='398' />
			<Description>
				<Span>This is</Span>
				<Title>{name}</Title>
				<Paragraph>
					👨🏻‍💻 I'm a passionate Frontend Developer in love with React,currently looking for new job opportunities.
				</Paragraph>
				<Link href='mailto:patryk.krwaczyk.it@gmail.com'>
					<MailIcon />
					Hire me
				</Link>
			</Description>
		</Wrapper>
	)
}
