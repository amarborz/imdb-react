import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import MovieCard from '../components/MovieCard'

import { URL, KEY, updateErrorMessage } from '../store/Store'

const TopMovies = () => {
	const [topMovies, setTopMovies] = useState([])
	const navigate = useNavigate()
	const dispatch = useDispatch()

	useEffect(() => {
		const searchItems = async () => {
			const response = await fetch(`${URL}Top250Movies/${KEY}`)
			const responseData = await response.json()
			if (responseData.errorMessage) {
				dispatch(updateErrorMessage(responseData.errorMessage))
				navigate('/errorMessage')
			} else {
				console.log(responseData)
				setTopMovies(responseData.items)
			}
		}

		searchItems()
	}, [dispatch, navigate])

	return (
		<div>
			<MovieCard topMovies={topMovies} movieHeader={true} />
		</div>
	)
}

export default TopMovies
