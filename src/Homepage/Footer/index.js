import {
	Wrapper,
	Description,
	Talk,
	Mail,
	About,
	SocialWrapper, // Image
} from './styled'
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
				<a href='https://github.com/Patryk0408' target='_blank' rel='noreferrer'>
					<img src={GitHubLogo} alt='GitHub' />
				</a>
				<a href='https://www.facebook.com/profile.php?id=100010225308738' target='_blank' rel='noreferrer'>
					<img src={FacebookLogo} alt='Facebook' />
				</a>
				<a href='https://www.linkedin.com/in/patryk-krawczyk-b651b8260/' target='_blank' rel='noreferrer'>
					<img src={LinkedInLogo} alt='LinkedIn' />
				</a>
				<a href='https://www.instagram.com/xpatryyysx/' target='_blank' rel='noreferrer'>
					<img src={InstagramLogo} alt='Instagram' />
				</a>
			</SocialWrapper>
		</Wrapper>
	)
}

export default Footer
