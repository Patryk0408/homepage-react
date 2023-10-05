import styled from 'styled-components'
import { ReactComponent as Icon } from '../img/mark-github.svg'

export const Wrapper = styled.div`
	display: grid;
	justify-content: center;
	grid-template-columns: auto;
`

export const Paragraph = styled.p`
	font-size: 20px;
	margin: 0 0 24px;
	text-align: center;
	color: ${props => (props.darkMode ? `#FFFFFF` : `#000000`)};
	transition: 0.2s;
`

export const GithubIcon = styled(Icon)`
	margin: auto;
`

export const Title = styled.h2`
	text-align: center;
	margin: 12px 0 8px;
	color: ${props => (props.darkMode ? `#FFFFFF` : `#000000`)};
	transition: 0.2s;
`

export const Projects = styled.div`
	max-width: 1216px;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
	gap: 16px;
	color: ${props => (props.darkMode ? `#FFFFFF` : `var(--text-secondary, #6e7e91)`)};
	font-family: Inter;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 140%;
	letter-spacing: 0.9px;

	@media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
		grid-template-columns: repeat(2, 1fr);
		gap: 32px;
	}
`

export const Project = styled.div`
	display: grid;
	min-height: 230px;
	width: 100%;
	border-radius: 4px;
	border: 6px solid var(--diff-bg-neutral, rgba(209, 213, 218, 0.3));
	background: ${props => (props.darkMode ? `rgba(54, 54, 54, 0.72)` : `#FFFFFF`)};
	box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03), 0px -2px 50px 0px rgba(9, 10, 51, 0.02);
	padding: 24px;
	transition: 0.2s;
	word-break: break-all;

	&:hover {
		transform: scale(1.02);
		${props => (props.darkMode ? `` : `border: 6px solid rgba(3, 102, 214, 0.2);`)}
	}

	&:focus {
		${props => (props.darkMode ? `border: 6px solid rgba(3, 102, 214, 0.50);` : ``)}
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
		max-width: 592px;
		padding: 56px;
		min-height: unset;
	}
`

export const Name = styled.span`
	display: block;
	text-transform: capitalize;
	color: ${props => (props.darkMode ? `#FFFFFF` : `#0366d6`)};
	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 0.8px;
	margin: 0 0 24px;
	transition: 0.2s;

	@media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
		font-size: 24px;
		font-style: normal;
		letter-spacing: 1.2px;
	}
`
export const LinkToGh = styled.span`
	display: flex;
	gap: 8px;
	font-family: Inter;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.7px;
	word-break: normal;

	@media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
		font-size: 18px;
		line-height: 140%;
		letter-spacing: 0.9px;
	}
`

export const LinkGh = styled.a`
	color: ${props => (props.darkMode ? `#2188FF` : `#0366d6`)};
	word-break: break-all;
	margin-bottom: 8px;
	transition: 0.2s;

	&:focus {
		opacity: 0.8;
		color: ${props => (props.darkMode ? `#2188FF` : `#0366d6`)};
	}

	&:visited {
		color: ${props => (props.darkMode ? `#2188FF` : `#0366d6`)};
	}
`

export const Description = styled.span`
	display: block;
	font-family: Inter;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.7px;
	word-break: break-word;
	margin-bottom: 16px;

	@media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
		font-size: 18px;
		line-height: 140%;
		letter-spacing: 0.9px;
		margin-bottom: 24px;
	}
`

export const Short = styled.span`
	width: 70px;
`
