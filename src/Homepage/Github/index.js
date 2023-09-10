import React, { useEffect } from 'react'
import { Wrapper, Paragraph, GithubIcon, Title, Projects, Project, LinkToGh, Description, Name, LinkGh } from './styled'
import Loader from '../States/Loader'
import Error from '../States/Error'
import { useApiGithub } from '../useApiGithub'

const Github = () => {
	const { githubProjects, isLoading, error } = useApiGithub()

	useEffect(() => {
		// ...
		// Inna logika, jeśli jest potrzebna
		// ...
	}, [githubProjects])

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
					{githubProjects.map(project => (
						<Project key={project.id}>
							<Name>{project.name}</Name>
							<Description>{project.description}</Description>
							{project.homepage ? (
								<LinkToGh>
									Demo: <LinkGh href={project.homepage}>{project.homepage}</LinkGh>
								</LinkToGh>
							) : null}
							<LinkToGh>
								Code: <LinkGh href={project.html_url}>{project.html_url}</LinkGh>
							</LinkToGh>
						</Project>
					))}
				</Projects>
			)}
		</Wrapper>
	)
}

export default Github
