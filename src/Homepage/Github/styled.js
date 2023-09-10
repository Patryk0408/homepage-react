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
`

export const GithubIcon = styled(Icon)`
	margin: auto;
`

export const Title = styled.h2`
	text-align: center;
	margin: 12px 0 8px;
`

export const Projects = styled.div`
	max-width: 1216px;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 32px;
	color: var(--text-secondary, #6e7e91);
	font-family: Inter;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 140%;
	letter-spacing: 0.9px;
`

export const Project = styled.div`
	display: grid;
	height: 320px;
	max-width: 592px;
	width: 100%;
	border-radius: 4px;
	border: 6px solid var(--diff-bg-neutral, rgba(209, 213, 218, 0.3));
	background: var(--white, #fff);
	box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03), 0px -2px 50px 0px rgba(9, 10, 51, 0.02);
	padding: 56px;
	transition: transform 0.2s;

	&:hover {
		transform: scale(1.02);
	}
`

export const Name = styled.span`
	color: #0366d6;
	text-transform: capitalize;
	font-family: Inter;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 1.2px;
`
export const LinkToGh = styled.span`
	display: flex;
	gap: 8px;
`

export const LinkGh = styled.a`
	color: ${({ theme }) => theme.color.cornflowerBlue};

	&:visited {
		color: ${({ theme }) => theme.color.cornflowerBlue};
	}
`

export const Description = styled.span``
