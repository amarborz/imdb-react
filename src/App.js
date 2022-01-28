import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import ActorDetails from './pages/ActorDetails'
import BoxOfficeAllTime from './pages/BoxOfficeAllTime'
import BoxOfficeWeek from './pages/BoxOfficeWeek'
import ComingSoon from './pages/ComingSoon'
import ErrorMessage from './pages/ErrorMessage'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import InCinemas from './pages/InCinemas'
import MovieDetails from './pages/MovieDetails'
import PopularMovies from './pages/PopularMovies'
import PopularShows from './pages/PopularShows'
import SearchResults from './pages/SearchResults'
import TopMovies from './pages/TopMovies'
import TopShows from './pages/TopShows'

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="searchResults" element={<SearchResults />} />
				<Route path="comingSoon" element={<ComingSoon />} />
				<Route path="inCinemas" element={<InCinemas />} />
				<Route path="movieDetails/:movieId" element={<MovieDetails />} />
				<Route path="actorDetails/:actorId" element={<ActorDetails />} />
				<Route path="topMovies" element={<TopMovies />} />
				<Route path="topShows" element={<TopShows />} />
				<Route path="mostPopularMovies" element={<PopularMovies />} />
				<Route path="mostPopularShows" element={<PopularShows />} />
				<Route path="boxOfficeWeek" element={<BoxOfficeWeek />} />
				<Route path="boxOfficeAllTime" element={<BoxOfficeAllTime />} />
				<Route path="errorMessage" element={<ErrorMessage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</div>
	)
}

export default App
