import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import MovieCard from '../components/MovieCard'

import { URL, KEY, updateErrorMessage } from '../store/Store'

const InCinemas = () => {
	const [inCinemaMovies, setinCinemaMovies] = useState([])
	const navigate = useNavigate()
	const dispatch = useDispatch()

	useEffect(() => {
		const searchItems = async () => {
			const response = await fetch(`${URL}InTheaters/${KEY}`)
			const responseData = await response.json()
			if (responseData.errorMessage) {
				dispatch(updateErrorMessage(responseData.errorMessage))
				navigate('/errorMessage')
			} else {
				console.log(responseData)
				setinCinemaMovies(responseData.items)
			}
		}

		searchItems()
	}, [navigate, dispatch])

	return (
		<div>
			<MovieCard showingMovies={inCinemaMovies} />
		</div>
	)
}

export default InCinemas
