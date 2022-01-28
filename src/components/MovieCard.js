import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import classes from './MovieCard.module.css'

const MovieCard = (props) => {
	const searchTerm = useSelector((state) => state.searchTerm)
	const navigate = useNavigate()

	let header
	let shownMovies

	if (props.movies && props.movieHeader) {
		header = <h2 className={classes.cardHeader}>Most Popular Movies:</h2>
	} else if (props.movies && props.showHeader) {
		header = <h2 className={classes.cardHeader}>Most Popular TV Shows:</h2>
	} else if (props.searchedMovies) {
		header = (
			<h2 className={classes.cardHeader}>Search results for {searchTerm}:</h2>
		)
	} else if (props.comingMovies) {
		header = <h2 className={classes.cardHeader}>Coming Soon:</h2>
	} else if (props.showingMovies) {
		header = <h2 className={classes.cardHeader}>in Cinemas:</h2>
	} else if (props.topMovies && props.movieHeader) {
		header = <h2 className={classes.cardHeader}>Top 250 Movies:</h2>
	} else if (props.topMovies && props.showHeader) {
		header = <h2 className={classes.cardHeader}>Top 250 TV Shows:</h2>
	} else if (props.boxOfficeWeek) {
		header = (
			<h2 className={classes.cardHeader}>Highest Grossing Movies This Week:</h2>
		)
	} else if (props.boxOfficeAllTime) {
		header = (
			<h2 className={classes.cardHeader}>
				Highest Grossing Movies of All Time:
			</h2>
		)
	} else if (props.knownFor) {
		header = <h2 className={classes.cardHeader}>Known For:</h2>
	} else {
		header = null
	}

	if (props.movies) {
		shownMovies = props.movies.map((movie) => (
			<div
				className={classes.card}
				key={movie.id}
				onClick={() => {
					navigate(`/movieDetails/${movie.id}`)
					window.scrollTo(0, 0)
				}}
			>
				<img
					src={movie.image}
					alt={movie.fullTitle}
					className={classes.cardImg}
				/>
				<div className={classes.container}>
					<h4>{movie.fullTitle}</h4>
					<p>Rank: {movie.rank}</p>
					<p>IMDB Rating: {movie.imDbRating}</p>
				</div>
			</div>
		))
	} else if (props.searchedMovies) {
		shownMovies = props.searchedMovies.map((movie) => (
			<div
				className={classes.card}
				key={movie.id}
				onClick={() => {
					navigate(`/movieDetails/${movie.id}`)
					window.scrollTo(0, 0)
				}}
			>
				<img src={movie.image} alt={movie.title} className={classes.cardImg} />
				<div className={classes.container}>
					<h4>{movie.title}</h4>
					<p>Year: {movie.description}</p>
				</div>
			</div>
		))
	} else if (props.comingMovies) {
		shownMovies = props.comingMovies.map((movie) => (
			<div
				className={classes.card}
				key={movie.id}
				onClick={() => {
					navigate(`/movieDetails/${movie.id}`)
					window.scrollTo(0, 0)
				}}
			>
				<img src={movie.image} alt={movie.title} className={classes.cardImg} />
				<div className={classes.container}>
					<h4>{movie.title}</h4>
					<p>Release: {movie.releaseState}</p>
					<p>Genres: {movie.genres}</p>
					<p>Stars: {movie.stars}</p>
				</div>
			</div>
		))
	} else if (props.showingMovies) {
		shownMovies = props.showingMovies.map((movie) => (
			<div
				className={classes.card}
				key={movie.id}
				onClick={() => {
					navigate(`/movieDetails/${movie.id}`)
					window.scrollTo(0, 0)
				}}
			>
				<img src={movie.image} alt={movie.title} className={classes.cardImg} />
				<div className={classes.container}>
					<h4>{movie.title}</h4>
					<p>Release: {movie.releaseState}</p>
					<p>Genres: {movie.genres}</p>
					<p>Stars: {movie.stars}</p>
				</div>
			</div>
		))
	} else if (props.similarMovies) {
		shownMovies = props.similarMovies.map((movie) => (
			<div
				className={classes.card}
				key={movie.id}
				onClick={() => {
					navigate(`/movieDetails/${movie.id}`)
					window.scrollTo(0, 0)
				}}
			>
				<img src={movie.image} alt={movie.title} className={classes.cardImg} />
				<div className={classes.container}>
					<h4>{movie.fullTitle}</h4>
				</div>
			</div>
		))
	} else if (props.topMovies) {
		shownMovies = props.topMovies.map((movie) => (
			<div
				className={classes.card}
				key={movie.id}
				onClick={() => {
					navigate(`/movieDetails/${movie.id}`)
					window.scrollTo(0, 0)
				}}
			>
				<img
					src={movie.image}
					alt={movie.fullTitle}
					className={classes.cardImg}
				/>
				<div className={classes.container}>
					<h4>{movie.fullTitle}</h4>
					<p>Rank: {movie.rank}</p>
					<p>IMDB Rating: {movie.imDbRating}</p>
				</div>
			</div>
		))
	} else if (props.boxOfficeWeek) {
		shownMovies = props.boxOfficeWeek.map((movie) => (
			<div
				className={classes.card}
				key={movie.id}
				onClick={() => {
					navigate(`/movieDetails/${movie.id}`)
					window.scrollTo(0, 0)
				}}
			>
				<img src={movie.image} alt={movie.title} className={classes.cardImg} />
				<div className={classes.container}>
					<h4>{movie.title}</h4>
					<p>Rank: {movie.rank}</p>
					<p>This Week: {movie.weekend}</p>
					<p>Overall: {movie.gross}</p>
					<p>Week: {movie.weeks}</p>
				</div>
			</div>
		))
	} else if (props.boxOfficeAllTime) {
		shownMovies = props.boxOfficeAllTime.map((movie) => (
			<div
				className={classes.card}
				key={movie.id}
				onClick={() => {
					navigate(`/movieDetails/${movie.id}`)
					window.scrollTo(0, 0)
				}}
			>
				<div className={classes.container}>
					<h4>{movie.title}</h4>
					<p>Rank: {movie.rank}</p>
					<p>Year: {movie.year}</p>
					<p>Domestic Gross: {movie.domesticLifetimeGross}</p>
					<p>Foreign Gross: {movie.foreignLifetimeGross}</p>
					<p>Overall: {movie.worldwideLifetimeGross}</p>
				</div>
			</div>
		))
	} else if (props.knownFor) {
		shownMovies = props.knownFor.map((movie) => (
			<div
				className={classes.card}
				key={movie.id}
				onClick={() => {
					navigate(`/movieDetails/${movie.id}`)
					window.scrollTo(0, 0)
				}}
			>
				<img
					src={movie.image}
					alt={movie.fullTitle}
					className={classes.cardImg}
				/>
				<div className={classes.container}>
					<h4>{movie.fullTitle}</h4>
					<p>Role: {movie.role}</p>
				</div>
			</div>
		))
	}

	return (
		<>
			{header}
			<div className={classes.cardWrapper}>{shownMovies}</div>
		</>
	)
}

export default MovieCard
