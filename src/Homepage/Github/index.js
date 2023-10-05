import {
	Wrapper,
	Paragraph,
	GithubIcon,
	Title,
	Projects,
	Project,
	LinkToGh,
	Description,
	Name,
	LinkGh,
	Short,
} from './styled'
import Loader from '../States/Loader'
import Error from '../States/Error'
import { useApiGithub } from '../useApiGithub'
import { useTheme } from '../ThemeContext'

const Github = () => {
	const { darkMode } = useTheme()

	const { githubProjects, isLoading, error } = useApiGithub()

	const sortedProjects = githubProjects
		? [...githubProjects].sort((projectA, projectB) => {
				const dateA = new Date(projectA.updated_at)
				const dateB = new Date(projectB.updated_at)
				return dateB - dateA
		  })
		: []

	return (
		<Wrapper>
			<GithubIcon />
			<Title darkMode={darkMode}>Portfolio</Title>
			<Paragraph darkMode={darkMode}>My recent projects</Paragraph>
			{isLoading ? (
				<Loader />
			) : error ? (
				<Error />
			) : (
				<Projects darkMode={darkMode}>
					{sortedProjects.map(project => (
						<Project key={project.id} darkMode={darkMode}>
							<Name darkMode={darkMode}>{project.name}</Name>
							<Description>{project.description}</Description>
							{project.homepage ? (
								<LinkToGh>
									<Short>Demo:&nbsp;</Short>
									<LinkGh href={project.homepage} target='_blank' darkMode={darkMode}>
										{project.homepage}
									</LinkGh>
								</LinkToGh>
							) : null}
							<LinkToGh>
								<Short>Code:&nbsp;</Short>
								<LinkGh href={project.html_url} target='_blank' darkMode={darkMode}>
									{project.html_url}
								</LinkGh>
							</LinkToGh>
						</Project>
					))}
				</Projects>
			)}
		</Wrapper>
	)
}

export default Github
