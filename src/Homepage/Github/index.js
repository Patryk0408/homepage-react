import React, { useState, useEffect } from 'react'
import { Wrapper, Paragraph, GithubIcon, Title, Projects, Project, LinkToGh, Description, Name, LinkGh } from './styled'
import Loader from '../States/Loader'
import Error from '../States/Error'
import { useApiGithub } from '../../useApiGithub'

const Github = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setError] = useState(false)

	const githubProjects = useApiGithub()
	const myProjects = githubProjects

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setIsLoading(false)
		}, 2000)

		return () => {
			clearTimeout(timeoutId)
		}
	}, [])

	useEffect(() => {
		if (!isLoading && githubProjects) {
			console.log('ste')
		} else if (!isLoading && !githubProjects) {
			setError(true)
		}
	}, [isLoading, githubProjects])

	return (
		<Wrapper>
			<GithubIcon />
			<Title>Portfolio</Title>
			<Paragraph>My recent projects</Paragraph>
			{isLoading ? (
				<Loader />
			) : isError ? (
				<Error />
			) : (
				<Projects>
					{myProjects.map(project => (
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
