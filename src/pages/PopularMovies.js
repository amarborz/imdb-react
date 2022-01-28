import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import MovieCard from '../components/MovieCard'

import { URL, KEY, updateErrorMessage } from '../store/Store'

const PopularMovies = () => {
	const [popularMovies, setPopularMovies] = useState([])
	const navigate = useNavigate()
	const dispatch = useDispatch()

	useEffect(() => {
		const mostPopularMovies = async () => {
			const response = await fetch(`${URL}MostPopularMovies/${KEY}`)
			const responseData = await response.json()
			if (responseData.errorMessage) {
				dispatch(updateErrorMessage(responseData.errorMessage))
				navigate('/errorMessage')
			} else {
				setPopularMovies(responseData.items)
			}
		}

		mostPopularMovies()
	}, [dispatch, navigate])

	return (
		<div>
			<MovieCard movies={popularMovies} movieHeader={true} />
		</div>
	)
}

export default PopularMovies
