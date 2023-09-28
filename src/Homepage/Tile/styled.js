import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 100%;
	margin: 32px 0 63px;
	display: grid;

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

	@media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
		font-size: 38px;
		margin: 10px 0 35px;
	}
`

export const Paragraph = styled.p`
	max-width: 633px;
	font-size: 20px;
	color: ${({ theme }) => theme.color.slateGray};
	margin: 0 0 35px 0;
`

export const Span = styled.span`
	font-size: 12px;
	text-transform: uppercase;
	color: ${({ theme }) => theme.color.slateGray};
`

export const Link = styled.a`
	padding: 12px 16px;
	background-color: ${({ theme }) => theme.color.cornflowerBlue};
	color: ${({ theme }) => theme.color.white};
	text-decoration: none;
	display: flex;
	width: fit-content;
	align-items: center;
	gap: 16px;
	border-radius: 4px;
	border: 1px solid var(--diff-bg-neutral, rgba(209, 213, 218, 0.3));
	font-size: 18px;

	@media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
		font-size: 20px;
	}
`
