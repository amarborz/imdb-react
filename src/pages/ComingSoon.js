import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import MovieCard from '../components/MovieCard'

import { URL, KEY, updateErrorMessage } from '../store/Store'

const ComingSoon = () => {
	const [comingSoonMovies, setComingSoonMovies] = useState([])
	const navigate = useNavigate()
	const dispatch = useDispatch()

	useEffect(() => {
		const searchItems = async () => {
			const response = await fetch(`${URL}ComingSoon/${KEY}`)
			const responseData = await response.json()
			if (responseData.errorMessage) {
				dispatch(updateErrorMessage(responseData.errorMessage))
				navigate('/errorMessage')
			} else {
				console.log(responseData)
				setComingSoonMovies(responseData.items)
			}
		}

		searchItems()
	}, [dispatch, navigate])

	return (
		<div>
			<MovieCard comingMovies={comingSoonMovies} />
		</div>
	)
}

export default ComingSoon
