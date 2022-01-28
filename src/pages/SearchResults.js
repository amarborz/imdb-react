import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import MovieCard from '../components/MovieCard'
import classes from './SearchResults.module.css'

import { URL, KEY, updateErrorMessage } from '../store/Store'
import { useNavigate } from 'react-router-dom'

const SearchResults = () => {
	const searchTerm = useSelector((state) => state.searchTerm)
	const [foundSearchItems, setFoundSearchItems] = useState([])
	const [loading, setLoading] = useState(false)
	const [emptySearch, setEmptySearch] = useState(false)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	useEffect(() => {
		const searchItems = async () => {
			setLoading(true)
			const response = await fetch(`${URL}Search/${KEY}/${searchTerm}`)
			const responseData = await response.json()
			console.log(responseData)
			if (responseData.errorMessage) {
				dispatch(updateErrorMessage(responseData.errorMessage))
				navigate('/errorMessage')
			} else if (responseData.results.length === 0) {
				setEmptySearch(true)
				setLoading(false)
			} else {
				setEmptySearch(false)
				setLoading(false)
				setFoundSearchItems(responseData.results)
			}
		}

		searchItems()
	}, [searchTerm, navigate, dispatch])

	return (
		<div className={classes.detailWrapper}>
			{loading && <Spinner animation="border" className={classes.spinner} />}
			{emptySearch && !loading && (
				<h2 className={classes.header}>
					No Search Results Found. Please Try Another Movie.
				</h2>
			)}
			{foundSearchItems.length > 0 && !loading && (
				<MovieCard searchedMovies={foundSearchItems} />
			)}
		</div>
	)
}

export default SearchResults
