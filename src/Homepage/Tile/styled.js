import styled from 'styled-components'
import { ReactComponent as Sun } from '../img/brightness.svg'

export const Wrapper = styled.div`
	width: 100%;
	margin: 32px 0 63px;
	display: grid;
	position: relative;

	@media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
		grid-template-columns: auto 1fr;
		grid-gap: 66px;
		margin: 115px 0 63px;
	}
`

export const MyPhoto = styled.img`
	border-radius: 50%;
	max-width: 135px;
	max-height: 135px;
	width: auto;
	height: auto;

	@media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
		max-width: 100%;
		max-height: 100%;
	}
`

export const Description = styled.div`
	margin: 12px 0 0;

	@media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
		margin: 68px 0 0;
	}
`

export const Title = styled.h1`
	margin: 8px 0 16px;
	font-size: 22px;
	font-weight: 900;
	color: ${props => (props.darkMode ? `#FFFFFF` : `#000000`)};
	transition: 0.2s;

	@media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
		font-size: 38px;
		margin: 10px 0 35px;
	}
`

export const Paragraph = styled.p`
	max-width: 633px;
	font-size: 20px;
	color: ${props => (props.darkMode ? `#FFFFFF` : `#6E7E91`)};
	margin: 0 0 35px 0;
	transition: 0.2s;
`

export const Span = styled.span`
	font-size: 12px;
	text-transform: uppercase;
	color: ${props => (props.darkMode ? `#FFFFFF` : `#6E7E91`)};
	transition: 0.2s;
`

export const Link = styled.a`
	padding: 12px 16px;
	background-color: ${props => (props.darkMode ? `#2188FF` : `#0366d6`)};
	color: ${({ theme }) => theme.color.white};
	text-decoration: none;
	display: flex;
	width: fit-content;
	align-items: center;
	gap: 16px;
	border-radius: 4px;
	transition: 0.2s;
	border: 1px solid
		${props =>
			props.darkMode
				? `var(--semi-grey, rgba(209, 213, 218, 0.10))`
				: `var(--diff-bg-neutral, rgba(209, 213, 218, 0.3))`};
	font-size: 18px;
	transition: box-shadow 0.2s;

	&:focus {
		box-shadow: ${props =>
			props.darkMode
				? `-2px -2px 0px 0px #6D93BE, 2px 2px 0px 0px #6D93BE, -2px 2px 0px 0px #6D93BE, 2px -2px 0px 0px #6D93BE`
				: `-2px -2px 0px 0px #8cc2ff, 2px 2px 0px 0px #8cc2ff, -2px 2px 0px 0px #8cc2ff, 2px -2px 0px 0px #8cc2ff`};
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
		font-size: 20px;
	}
`

export const ToggleButton = styled.button`
	color: ${props => (props.darkMode ? 'white' : 'black')};
	border: none;

	text-align: left;
	cursor: pointer;
	position: absolute;
	transition: 0.2s;
	background-color: transparent;
	right: 0;
	-webkit-tap-highlight-color: transparent !important;
	display: flex;
	font-size: 12px;
	gap: 12px;
	justify-content: end;
	align-items: center;
	padding: 0;
	@media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
		justify-content: space-between;
		width: 155px;
	}
`

export const IconWrapper = styled.div`
	position: relative;
`

export const StyledSun = styled(Sun)`
	background-color: #6e7e91;
	padding: 3px;
	height: 17px;
	width: 17px;
	border-radius: 10px;
	position: absolute;
	top: 5.5px;
	left: ${props => (props.darkMode ? '28px' : '5px')};
	transition: all 0.2s ease-in-out;
`

export const BgWrapper = styled.div`
	position: relative;
	width: fit-content;
`

export const SpanText = styled.span`
	display: none;
	@media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
		display: block;
	}
`
