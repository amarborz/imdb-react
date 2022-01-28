import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import MovieCard from '../components/MovieCard'

import { URL, KEY, updateErrorMessage } from '../store/Store'

const PopularShows = () => {
	const [popularShows, setPopularShows] = useState([])
	const navigate = useNavigate()
	const dispatch = useDispatch()

	useEffect(() => {
		const mostPopularShows = async () => {
			const response = await fetch(`${URL}MostPopularTVs/${KEY}`)
			const responseData = await response.json()
			if (responseData.errorMessage) {
				dispatch(updateErrorMessage(responseData.errorMessage))
				navigate('/errorMessage')
			} else {
				setPopularShows(responseData.items)
			}
		}

		mostPopularShows()
	}, [dispatch, navigate])

	return (
		<div>
			<MovieCard movies={popularShows} showHeader={true} />
		</div>
	)
}

export default PopularShows
