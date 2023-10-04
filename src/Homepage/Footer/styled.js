import styled from 'styled-components'

export const Wrapper = styled.div`
	margin: 48px 0 31px;

	@media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
		margin: 120px 0 110px;
	}
`

export const Description = styled.div`
	display: grid;
	gap: 12px;
	max-width: 670px;
	word-break: break-all;

	@media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
		gap: 24px;
	}
`

export const Talk = styled.span`
	color: ${({ theme }) => theme.color.slateGray};
	font-family: Inter;
	font-size: 12px;
	font-style: normal;
	font-weight: 700;
	line-height: 130%;
	text-transform: uppercase;
`

export const Mail = styled.a`
	color: ${props => (props.darkMode ? `#FFFFFF` : `#252525`)};
	font-family: Inter;
	font-size: 18px;
	font-style: normal;
	font-weight: 900;
	line-height: normal;
	letter-spacing: 1.6px;
	text-decoration: none;
	width: fit-content;
	transition: color 0.2s;

	&:hover {
		color: ${props => (props.darkMode ? `#2188FF` : `#0366d6`)};
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
		font-size: 32px;
	}
`
export const About = styled.span`
	font-family: Inter;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.7px;
	word-break: initial;

	@media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
		font-size: 18px;
		line-height: 140%;
	}
`

export const SocialWrapper = styled.div`
	display: flex;
	gap: 24px;
	margin: 40px 0 0;

	@media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
		margin: 56px 0 0;
	}
`

export const Image = styled.img`
	filter: ${props =>
		props.darkMode ? `invert(100%) sepia(4%) saturate(2%) hue-rotate(85deg) brightness(103%) contrast(101%);` : ``};
	&:focus {
		filter: ${props =>
			props.darkMode
				? `invert(41%) sepia(26%) saturate(6696%) hue-rotate(201deg) brightness(107%) contrast(101%)`
				: `invert(29%) sepia(62%) saturate(5563%) hue-rotate(202deg) brightness(90%) contrast(98%)`};
	}
`
