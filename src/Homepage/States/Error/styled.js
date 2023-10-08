import { styled } from 'styled-components'

export const Message = styled.div`
	max-width: 410px;
	margin: 0 auto;
	text-align: center;
	transition: 0.2s;
	color: ${props => (props.darkMode ? `#FFFFFF` : `#000000`)};
`

export const Title = styled.h2`
	display: block;
	color: ${({ theme }) => theme.color.red};
`

export const Info = styled.span`
	display: block;
	font-family: Inter;
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	line-height: 140%; /* 28px */
	letter-spacing: 1px;
`

export const Image = styled.img`
	display: block;
	margin: 64px auto 0;
	transition: 0.2s;

	${props =>
		props.darkMode
			? `filter: invert(100%) sepia(4%) saturate(2%) hue-rotate(85deg) brightness(103%) contrast(101%)`
			: ``};
`

export const Button = styled.a`
	margin: 32px auto 20px;
	display: block;
	padding: 12px 16px;
	text-decoration: none;
	text-align: center;
	font-family: Inter;
	font-size: 20.058px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	letter-spacing: 1.003px;
	color: ${({ theme }) => theme.color.white};
	background: ${props => (props.darkMode ? `#2188FF` : `#0366D6`)};
	width: fit-content;
	border-radius: 4px;
	border: 1px solid var(--semi-grey, rgba(209, 213, 218, 0.1));
	transition: 0.2s;

	&:focus {
		box-shadow: ${props =>
			props.darkMode
				? `-2px -2px 0px 0px #6D93BE, 2px 2px 0px 0px #6D93BE, -2px 2px 0px 0px #6D93BE, 2px -2px 0px 0px #6D93BE`
				: `-2px -2px 0px 0px #8cc2ff, 2px 2px 0px 0px #8cc2ff, -2px 2px 0px 0px #8cc2ff, 2px -2px 0px 0px #8cc2ff`};
	}
`
