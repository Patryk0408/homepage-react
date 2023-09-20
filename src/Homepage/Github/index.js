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

const Github = () => {
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
			<Title>Portfolio</Title>
			<Paragraph>My recent projects</Paragraph>
			{isLoading ? (
				<Loader />
			) : error ? (
				<Error />
			) : (
				<Projects>
					{sortedProjects.map(project => (
						<Project key={project.id}>
							<Name>{project.name}</Name>
							<Description>{project.description}</Description>
							{project.homepage ? (
								<LinkToGh>
									<Short>Demo:&nbsp;</Short>
									<LinkGh href={project.homepage} target='_blank'>
										{project.homepage}
									</LinkGh>
								</LinkToGh>
							) : null}
							<LinkToGh>
								<Short>Code:&nbsp;</Short>
								<LinkGh href={project.html_url} target='_blank'>
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
