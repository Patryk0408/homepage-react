import styled from 'styled-components'

export const Title = styled.h2`
	font-family: Inter;
	font-size: 30px;
	font-weight: 900;
	letter-spacing: 1.5px;
	padding: 0 0 15px;
	margin: 0;
	border-bottom: 1px solid rgba(209, 213, 218, 0.3);
`

export const Wrapper = styled.div`
	width: 100%;
	background-color: ${props => (props.darkMode ? `rgba(54, 54, 54, 0.72)` : `#FFFFFF`)};
	padding: 32px;
	margin: 0 0 50px;
	border-radius: 4px;
	box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03), 0px -2px 50px 0px rgba(9, 10, 51, 0.02);
	transition: ${({ theme }) => theme.time.default};
	color: ${props => (props.darkMode ? `#FFFFFF` : `#000000`)};

	@media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
		margin: 0 0 72px;
	}
`

export const Skill = styled.li`
	list-style-type: none;
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 16px;
	align-items: center;
`

export const SkillsList = styled.ul`
	display: grid;
	gap: 10px;
	margin: 32px 0 0;
	padding: 0;

	@media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
		grid-template-columns: repeat(3, 1fr);
	}
`
