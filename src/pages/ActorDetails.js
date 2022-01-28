import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import classes from './ActorDetails.module.css'
import { URL, KEY, updateErrorMessage } from '../store/Store'

import MovieCard from '../components/MovieCard'
import { useDispatch } from 'react-redux'
import { Spinner } from 'react-bootstrap'

const ActorDetails = () => {
	const { actorId } = useParams()
	const [details, setDetails] = useState([])
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const searchItems = async () => {
			setLoading(true)
			const response = await fetch(`${URL}Name/${KEY}/${actorId}`)
			const responseData = await response.json()
			if (responseData.errorMessage) {
				dispatch(updateErrorMessage(responseData.errorMessage))
				navigate('/errorMessage')
			} else {
				console.log(responseData)
				setDetails(responseData)
				setLoading(false)
			}
		}

		searchItems()
	}, [actorId, dispatch, navigate])

	return (
		<div className={classes.detailWrapper}>
			{loading ? (
				<Spinner animation="border" className={classes.spinner} />
			) : (
				<div>
					<div className={classes.detailWrapper}>
						<h1 className={classes.header}>{details.name}</h1>
						<img
							src={details.image}
							alt={details.name}
							className={classes.image}
						/>
						<h2 className={classes.header}>General Information:</h2>
						<div className={classes.text}>
							<h6>Role: </h6>
							<p>{details.role}</p>

							<h6>Date of Birth: </h6>
							<p>{details.birthDate}</p>

							<h6>Height: </h6>
							<p>{details.height}</p>

							<h6>Awards: </h6>
							<p>{details.awards}</p>

							<h6>Summary: </h6>
							<p>{details.summary}</p>
						</div>
					</div>
					<MovieCard knownFor={details.knownFor} />
				</div>
			)}
		</div>
	)
}

export default ActorDetails
