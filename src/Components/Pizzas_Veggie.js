import { useState, useContext } from 'react';
import arrow_white from '../Images/Arrow-white.svg';
import Pizza from './Pizza.js';
import { PizzaContext } from '../App.js';

export default function Pizzas_Veggie() {
	const { pizzas, toogleSideBar } = useContext(PizzaContext);
	return (
		<>
			<div
				className={
					toogleSideBar
						? 'pizza-section pizza-section-veggie xl-space display-none'
						: 'pizza-section pizza-section-veggie xl-space '
				}
			>
				<div className="title flow-content">
					<p className={'text-900'}>100%</p>
					<p className={'text-900'}>Veggie</p>
					<img src={arrow_white} className="arrow"></img>
				</div>
				<div className="pizzas">
					{pizzas.map((pizza) => {
						if (pizza.vegetarian) return <Pizza pizza={pizza} key={pizza.id} />;
					})}
				</div>
			</div>
		</>
	);
}
