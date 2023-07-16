import { styled } from 'styled-components'

export const Message = styled.div`
	max-width: 400px;
	height: 200px;
	margin: 0 auto;
	text-align: center;
`

export const Title = styled.h2`
	color: ${({ theme }) => theme.color.red};
	text-decoration: underline;
`

export const Info = styled.span`
	font-size: 1.75em;
`
