import React from 'react'

import classes from './ErrorPage.module.css'
import errorImage from '../assets/404.jpg'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
	return (
		<div className={classes.wrapper}>
			<div className={classes.text}>
				<h1>404!</h1>
				<h2>Looks like you are just as lost as we are!</h2>
				<h2>Abort Mission! Back to base!</h2>
				<Button as={Link} to="/" variant="outline-primary">
					Back to Homepage
				</Button>
			</div>
			<img src={errorImage} alt="404 message" className={classes.image} />
		</div>
	)
}

export default ErrorPage
