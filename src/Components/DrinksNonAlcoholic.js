import { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import arrow_black from '../Images/Arrow-black.svg';
import { motion } from 'framer-motion';
import Pizza from './Pizza.js';
import { PizzaContext } from '../App.js';

export default function DrinksNonAlcoholic() {
	const { pizzas, toogleSideBar, setToogleSideBar } = useContext(PizzaContext);
	const location = useLocation(
		
	)
	console.log(location)

	return (
		<motion.div
			className={'pizza-section pizza-section-classic pizza-section-after'}
			onClick={() => {
				return toogleSideBar ? setToogleSideBar(false) : '';
			}}
		>
			<div className="name ">
				<h1>The 5th Hut</h1>
				<h2>Slow Pizza</h2>
			</div>
			<div className="title flow-content">
				<p className={'text-900'}>Sodas</p>
				<img src={arrow_black} className="arrow"></img>
			</div>
			<div className="pizzas">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</motion.div>
	);
}
