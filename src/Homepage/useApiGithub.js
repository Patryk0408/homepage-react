import axios from 'axios'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setStatus } from './homepageSlice'

export const useApiGithub = () => {
	const [githubProjects, setGithubProjects] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	const dispatch = useDispatch()

	useEffect(() => {
		const fetchData = async () => {
			dispatch(setStatus('loading'))
			setTimeout(async () => {
				try {
					const response = await axios.get('https://api.github.com/users/Patryk0408/repos')
					setGithubProjects(response.data)
					setIsLoading(false)
				} catch (error) {
					setError('Something went wrong while fetching data.')
					setIsLoading(false)
				}
			}, 2000)
		}

		fetchData()
	}, [dispatch])

	return { githubProjects, isLoading, error }
}
