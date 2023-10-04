import { Title, Wrapper, SkillsList, Skill } from './styled'
import mySkills from '../../my-skills.json'
import whatNext from '../../next-skills.json'
import { ReactComponent as ListStyle } from '../img/Ellipse 31.svg'
import { useTheme } from '../ThemeContext'

const Skills = ({ skillsTitle, skills }) => {
	const { darkMode } = useTheme()

	let skillsData

	if (skills === 'my skills') {
		skillsData = mySkills
	} else if (skills === 'what next') {
		skillsData = whatNext
	}

	return (
		<>
			<Wrapper darkMode={darkMode}>
				<Title>{skillsTitle}</Title>
				<SkillsList>
					{skillsData.map(skill => (
						<Skill key={skill.id}>
							<ListStyle />
							{skill.skill}
						</Skill>
					))}
				</SkillsList>
			</Wrapper>
		</>
	)
}

export default Skills
