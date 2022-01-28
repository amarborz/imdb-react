import React, { useState } from 'react'
import {
	Container,
	Form,
	FormControl,
	Nav,
	Navbar,
	NavDropdown,
	Button,
} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { updateSearchTerm } from '../store/Store'

const NavBar = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [inputTerm, setInputTerm] = useState('')

	const searchHandler = (e) => {
		e.preventDefault()
		if (inputTerm.trim().length === 0) {
			return
		}
		dispatch(updateSearchTerm(inputTerm))
		navigate('/searchResults')
		setInputTerm('')
	}

	return (
		<Navbar bg="light" expand="lg">
			<Container fluid>
				<Navbar.Brand as={Link} to="/">
					IMDB
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav className="me-auto my-2 my-lg-0">
						<Nav.Link as={Link} to="/">
							Home
						</Nav.Link>
						<NavDropdown title="Lists" id="navbarScrollingDropdown">
							<NavDropdown.Item as={Link} to="topMovies">
								Top 250 Movies
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="topShows">
								Top 250 TV Shows
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="mostPopularMovies">
								Most Popular Movies
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="mostPopularShows">
								Most Popular TV Shows
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="boxOfficeWeek">
								Highest Box Office This Week
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="boxOfficeAllTime">
								Highest Box Office Of All Time
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link as={Link} to="/inCinemas">
							In Cinemas
						</Nav.Link>
						<Nav.Link as={Link} to="comingSoon">
							Coming Soon
						</Nav.Link>
					</Nav>
					<Form className="d-flex" onSubmit={searchHandler}>
						<FormControl
							type="search"
							placeholder="Search Movie..."
							className="me-2"
							aria-label="Search"
							value={inputTerm}
							onChange={(e) => setInputTerm(e.target.value)}
						/>
						<Button variant="outline-primary" type="submit">
							Search
						</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavBar
