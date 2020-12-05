import { useState, useContext } from 'react';
import arrow_black from '../Images/Arrow-black.svg';
import { motion } from 'framer-motion';
import Pizza from './Pizza.js';
import { PizzaContext } from '../App.js';

export default function Pizzas() {
	const { pizzas, toogleSideBar, setToogleSideBar } = useContext(PizzaContext);

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
			<div className={'quote'}>
				<p className="text-500 quote-text">
					Pizza as it should be. Slow and mouth-watering. Only sourdough.
				</p>
			</div>
			<div className="title flow-content">
				<p className={'text-900'}>All Time</p>
				<p className={'text-900'}>Favourites</p>
				<img src={arrow_black} className="arrow"></img>
			</div>
			<div className="pizzas">
				{pizzas.map((pizza) => {
					console.log(pizza)
					if (pizza.all_time_favourite)
						return <Pizza pizza={pizza} key={pizza.id} />;
				})}
			</div>
		</motion.div>
	);
}
