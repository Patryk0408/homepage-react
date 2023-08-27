import { useState, useEffect } from 'react'
import { Wrapper, Paragraph, GithubIcon, Title, Projects, Project, LinkToGh, Description, Name } from './styled'
import Loader from '../States/Loader'
// import Error from '../States/Error'
import { useApiGithub } from '../useApiGithub' // Importowanie własnego hooka

const Github = () => {
	const [isLoading, setIsLoading] = useState(true)
	// const [error, setError] = useState(false)

	const githubProjects = useApiGithub()
	const myProjects = githubProjects

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setIsLoading(false)
		}, 1000)

		return () => {
			clearTimeout(timeoutId)
		}
	}, [])

	// useEffect(() => {
	// 	if (!isLoading && githubProjects) {
	// 		// const myProjects = githubProjects
	// 	} else if (!isLoading && !githubProjects) {
	// 		// setError(true)
	// 	}
	// }, [isLoading, githubProjects])

	return (
		<Wrapper>
			<GithubIcon />
			<Title>Portfolio</Title>
			<Paragraph>My recent projects</Paragraph>
			{isLoading ? (
				<Loader />
			) : (
				<Projects>
					{myProjects.map(projects => (
						<Project key={projects.id}>
							<Name>{projects.name}</Name>
							<Description>{projects.description}</Description>
							<LinkToGh>
								Demo: <a href={projects.homepage}>{projects.homepage}</a>
							</LinkToGh>
							<LinkToGh>
								Code: <a href={projects.html_url}>{projects.html_url}</a>
							</LinkToGh>
						</Project>
					))}
				</Projects>
			)}
		</Wrapper>
	)
}

export default Github
