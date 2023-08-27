import axios from 'axios'
import { useState, useEffect } from 'react'

export const useApiGithub = () => {
	const [githubProjects, setGithubProjects] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('https://api.github.com/users/Patryk0408/repos')
				setGithubProjects(response.data)
			} catch (error) {
				console.error('Something went wrong')
			}
		}

		fetchData()
	}, [])

	return githubProjects
}
