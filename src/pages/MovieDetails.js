import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import classes from './MovieDetails.module.css'
import { URL, KEY, updateErrorMessage } from '../store/Store'

import ActorCard from '../components/ActorCard'
import MovieCard from '../components/MovieCard'
import { Spinner } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const MovieDetails = () => {
	const [details, setDetails] = useState([])
	const [showDetails, setShowDetails] = useState(false)
	const { movieId } = useParams()
	const navigate = useNavigate()
	const dispatch = useDispatch()

	useEffect(() => {
		const searchItems = async () => {
			setShowDetails(false)
			const response = await fetch(
				`${URL}Title/${KEY}/${movieId}/Trailer,Ratings,`,
			)
			const responseData = await response.json()
			if (responseData.errorMessage) {
				dispatch(updateErrorMessage(responseData.errorMessage))
				navigate('/errorMessage')
			} else {
				console.log(responseData)
				setDetails(responseData)
				setShowDetails(true)
			}
		}

		searchItems()
	}, [movieId, navigate, dispatch])

	return (
		<div className={classes.detailWrapper}>
			{!showDetails ? (
				<Spinner animation="border" className={classes.spinner} />
			) : (
				<>
					<div className={classes.detailWrapper}>
						<h1 className={classes.header}>{details.fullTitle}</h1>
						{details.trailer.linkEmbed ? (
							<iframe
								width="860"
								height="480"
								src={details.trailer.linkEmbed}
								title={details.trailer.videoTitle}
								scrolling="no"
								className={classes.video}
								allowFullScreen
							></iframe>
						) : (
							<h2>No Trailer Available!</h2>
						)}
						<h2 className={classes.header}>General Information:</h2>
						<div className={classes.text}>
							<h6>Title: </h6>
							<p>{details.title}</p>

							<h6>Type: </h6>
							<p>{details.type}</p>

							<h6>Year: </h6>
							<p>{details.year}</p>

							<h6>Genres: </h6>
							<p>{details.genres}</p>

							<h6>Release Date: </h6>
							<p>{details.releaseDate}</p>

							<h6>Runtime: </h6>
							<p>{details.runtimeStr}</p>

							<h6>Plot: </h6>
							<p>{details.plot}</p>

							<h6>Awards: </h6>
							<p>{details.awards}</p>

							<h6>Companies: </h6>
							<p>{details.companies}</p>

							<h6>Content Rating: </h6>
							<p>{details.contentRating}</p>

							<h6>IMDB Rating: </h6>
							<p>{details.imDbRating}/10</p>

							<h6>MetaCritic Rating: </h6>
							<p>{details.metacriticRating}/100</p>

							<h6>Budget: </h6>
							<p>{details.boxOffice.budget}</p>

							<h6>Opening Weekend USA: </h6>
							<p>{details.boxOffice.openingWeekendUSA}</p>

							<h6>Grossed in USA: </h6>
							<p>{details.boxOffice.grossUSA}</p>

							<h6>Grossed Worldwide: </h6>
							<p>{details.boxOffice.cumulativeWorldwideGross}</p>

							<h6>Quote: </h6>
							<p>{details.tagline}</p>

							<h6>Director(s): </h6>
							<p>{details.directors}</p>

							<h6>Stars: </h6>
							<p>{details.stars}</p>
						</div>
						<h2 className={classes.header}>Actor List:</h2>
					</div>
					<ActorCard actors={details.actorList} />
					<h2 className={classes.header} style={{ textAlign: 'center' }}>
						Similar Movies:
					</h2>
					{details.similars.length > 0 ? (
						<MovieCard similarMovies={details.similars} />
					) : (
						<h2>No Similar Movies Found!</h2>
					)}{' '}
				</>
			)}
		</div>
	)
}

export default MovieDetails
