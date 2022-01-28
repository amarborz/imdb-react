import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieCard from '../components/MovieCard'
import SlideShow from '../components/SlideShow'

import { URL, KEY, updateErrorMessage } from '../store/Store'

const Home = () => {
	const [popularMovies, setPopularMovies] = useState([])
	const [reachedLimit, setReachedLimit] = useState(false)
	const dispatch = useDispatch()
	const errorMessage = useSelector((state) => state.errorMessage)

	useEffect(() => {
		const mostPopularMovies = async () => {
			setReachedLimit(false)
			const response = await fetch(`${URL}MostPopularMovies/${KEY}`)
			const responseData = await response.json()
			if (responseData.errorMessage) {
				dispatch(updateErrorMessage(responseData.errorMessage))
				setReachedLimit(true)
				return
			}
			setPopularMovies(responseData.items)
		}

		mostPopularMovies()
	}, [dispatch])

	return (
		<div>
			<SlideShow />
			<MovieCard movies={popularMovies} movieHeader={true} />
			{reachedLimit && (
				<h2 style={{ marginTop: 50, textAlign: 'center' }}>
					Looks like you reached the maximum API calls for today.
					<br />
					Error Message: {errorMessage}
				</h2>
			)}
		</div>
	)
}

export default Home
