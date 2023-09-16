import { Wrapper, Description, Talk, Mail, About, SocialWrapper } from './styled'
import GitHubLogo from '../img/Githublogo.svg'
import FacebookLogo from '../img/Facebook.svg'
import LinkedInLogo from '../img/LinkedIN.svg'
import InstagramLogo from '../img/Instagram.svg'

const Footer = () => {
	return (
		<Wrapper>
			<Description>
				<Talk>Let's talk!</Talk>
				<Mail href='mailto:patryk.krawczyk.it@gmail.com'>patryk.krawczyk.it@gmail.com</Mail>
				<About>
					I'm always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in
					mind and need some help to make your ideas come to life, feel free to conatct me 🤞
				</About>
			</Description>
			<SocialWrapper>
				<img src={GitHubLogo} alt='GitHub' />
				<img src={FacebookLogo} alt='Facebook' />
				<img src={LinkedInLogo} alt='LinkedIn' />
				<img src={InstagramLogo} alt='Instagram' />
			</SocialWrapper>
		</Wrapper>
	)
}

export default Footer
