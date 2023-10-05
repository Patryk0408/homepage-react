import { styled } from 'styled-components'

export const Loading = styled.div`
	height: 200px;
	margin: 0 auto 120px;
	text-align: center;
`

export const Title = styled.h2`
	color: ${props => (props.darkMode ? `#FFFFFF` : `#252525`)};
	text-align: center;
	font-family: Inter;
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	line-height: 140%;
	letter-spacing: 1px;
	margin: 30px 0 40px;

	@media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
		margin: 64px 0 48px;
	}
`
export const Image = styled.img`
	display: block;
	margin: 0 auto;
`
