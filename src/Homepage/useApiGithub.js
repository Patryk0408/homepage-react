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
			try {
				dispatch(setStatus('loading'))
				setTimeout(async () => {
					const response = await axios.get('https://api.github.com/users/Patryk0408/repos')
					setGithubProjects(response.data)
					setIsLoading(false)
				}, 100000000)
			} catch (error) {
				console.error('Something went wrong', error)
				setError('Something went wrong while fetching data.')
				setIsLoading(false)
			}
		}

		fetchData()
	}, [dispatch])

	return { githubProjects, isLoading, error }
}
