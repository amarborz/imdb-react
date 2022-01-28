import React from 'react'
import { useSelector } from 'react-redux'

import classes from './ErrorMessage.module.css'

const ErrorMessage = () => {
	const errorMessage = useSelector((state) => state.errorMessage)
	console.log(errorMessage)

	return (
		<div className={classes.background}>
			<h1 className={classes.huge}>( ._.)</h1>
			<div className={classes.center}>
				<h1>Something is wrong, I can feel it...</h1>
				<h2>You should... uhmm...</h2>
				<h2>Google it or something...</h2>
				<h5>
					But in all seriousness, we either don't have the information you are
					looking for or you exceeded the daily API calls (very likely, since
					you only get 100 calls a day).
				</h5>
				<h6>For all the good it will do you, here is the error message:</h6>
				<h6>{errorMessage}</h6>
			</div>
		</div>
	)
}

export default ErrorMessage
