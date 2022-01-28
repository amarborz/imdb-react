import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import MovieCard from '../components/MovieCard'

import { URL, KEY, updateErrorMessage } from '../store/Store'

const BoxOfficeAllTime = () => {
	const [boxOfficeAllTime, setBoxOfficeAllTime] = useState([])
	const navigate = useNavigate()
	const dispatch = useDispatch()

	useEffect(() => {
		const searchItems = async () => {
			const response = await fetch(`${URL}BoxOfficeAllTime/${KEY}`)
			const responseData = await response.json()
			if (responseData.errorMessage) {
				dispatch(updateErrorMessage(responseData.errorMessage))
				navigate('/errorMessage')
			} else {
				setBoxOfficeAllTime(responseData.items)
			}
		}

		searchItems()
	}, [dispatch, navigate])

	return (
		<div>
			<MovieCard boxOfficeAllTime={boxOfficeAllTime} />
		</div>
	)
}

export default BoxOfficeAllTime
