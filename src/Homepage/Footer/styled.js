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
	line-height: 130%; /* 15.6px */
	text-transform: uppercase;
`

export const Mail = styled.a`
	color: ${({ theme }) => theme.color.mineShaft};
	font-family: Inter;
	font-size: 32px;
	font-style: normal;
	font-weight: 900;
	line-height: normal;
	letter-spacing: 1.6px;
	text-decoration: none;
	width: fit-content;
`
export const About = styled.span``

export const SocialWrapper = styled.div`
	display: flex;
	gap: 24px;
	margin: 40px 0 0;

	@media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
		margin: 56px 0 0;
	}
`
