import { Wrapper, Description, Talk, Mail, About, SocialWrapper, Image } from './styled'
import GitHubLogo from '../img/Githublogo.svg'
import FacebookLogo from '../img/Facebook.svg'
import LinkedInLogo from '../img/LinkedIN.svg'
import InstagramLogo from '../img/Instagram.svg'
import { useTheme } from '../ThemeContext'

const Footer = () => {
	const { darkMode } = useTheme()

	return (
		<Wrapper>
			<Description>
				<Talk darkMode={darkMode}>Let's talk!</Talk>
				<Mail href='mailto:patryk.krawczyk.it@gmail.com' darkMode={darkMode}>
					patryk.krawczyk.it@gmail.com
				</Mail>
				<About darkMode={darkMode}>
					I'm always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in
					mind and need some help to make your ideas come to life, feel free to conatct me 🤞
				</About>
			</Description>
			<SocialWrapper>
				<a href='https://github.com/Patryk0408' target='_blank' rel='noreferrer'>
					<Image src={GitHubLogo} alt='GitHub' darkMode={darkMode} />
				</a>
				<a href='https://www.facebook.com/profile.php?id=100010225308738' target='_blank' rel='noreferrer'>
					<Image src={FacebookLogo} alt='Facebook' darkMode={darkMode} />
				</a>
				<a href='https://www.linkedin.com/in/patryk-krawczyk-b651b8260/' target='_blank' rel='noreferrer'>
					<Image src={LinkedInLogo} alt='LinkedIn' darkMode={darkMode} />
				</a>
				<a href='https://www.instagram.com/xpatryyysx/' target='_blank' rel='noreferrer'>
					<Image src={InstagramLogo} alt='Instagram' darkMode={darkMode} />
				</a>
			</SocialWrapper>
		</Wrapper>
	)
}

export default Footer
