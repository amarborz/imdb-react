import React from 'react'

import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import classes from './SlideShow.module.css'

import BladeRunner from '../assets/BladeRunner3.jpg'
import JohnWick from '../assets/JohnWick.jpg'
import Batman from '../assets/Batman.jpg'
import Gotg from '../assets/Gotg2.jpg'
import { useNavigate } from 'react-router-dom'

const SlideShow = () => {
	const navigate = useNavigate()

	return (
		<AwesomeSlider className={classes.slideShow}>
			<div
				data-src={JohnWick}
				onClick={() => navigate('movieDetails/tt6146586')}
			></div>
			<div
				data-src={Gotg}
				onClick={() => navigate('movieDetails/tt2015381')}
			></div>
			<div
				data-src={Batman}
				onClick={() => navigate('movieDetails/tt1345836')}
			></div>
			<div
				data-src={BladeRunner}
				onClick={() => navigate('movieDetails/tt1856101')}
			></div>
		</AwesomeSlider>
	)
}

export default SlideShow
