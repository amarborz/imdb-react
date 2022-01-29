import React from 'react'
import { useNavigate } from 'react-router-dom'

import classes from './ActorCard.module.css'

const ActorCard = (props) => {
	const navigate = useNavigate()

	const actorsList = props.actors
		? props.actors.map((actor) => (
				<div
					className={classes.card}
					key={actor.id}
					onClick={() => {
						navigate(`/actorDetails/${actor.id}`)
						window.scrollTo(0, 0)
					}}
				>
					<img src={actor.image} alt={actor.name} className={classes.cardImg} />
					<div className={classes.container}>
						<h4>{actor.name}</h4>
						<p>
							Playing:{' '}
							{actor.asCharacter
								.split(' ')
								.slice(-2)
								.filter((name) => !name.endsWith('as'))
								.join(' ')}
						</p>
					</div>
				</div>
		  ))
		: ''

	return <div className={classes.cardWrapper}>{actorsList}</div>
}

export default ActorCard
