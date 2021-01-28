import {  useContext } from 'react';
import Pizza from './Pizza.js';
import { PizzaContext } from '../App.js';
import deco from '../Images/deco_underline_2.svg';

export default function PizzasSecondSection() {
	const { pizzas } = useContext(PizzaContext);
	return (
		<>
			<div className={'pizza-section pizza-section-veggie xl-space'}>
				<div className="info">
					<div className="title-second-section title">
						<p className={'text-900'}>The Classics</p>
						<img src={deco} alt={"decoration item"}/>
			
					</div>
				</div>
				<div className="pizzas flow-content">
					{pizzas.map((pizza) => {
						if (!pizza.all_time_favourite && pizza.is_pizza) return <Pizza pizza={pizza} key={pizza.id} />;
					})}
				</div>
			</div>
		</>
	);
}
