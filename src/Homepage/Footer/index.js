import { Wrapper, Description, Talk, Mail, About } from './styled'
const Footer = () => {
	return (
		<Wrapper>
			<Description>
				<Talk>Let's talk!</Talk>
				<Mail href='mailto:patryk.krawczyk.it@gmail.com'>patryk.krawczyk.it@gmail.com</Mail>
				<About>I'm always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me</About>
			</Description>
		</Wrapper>
	)
}

export default Footer
