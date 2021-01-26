import {  useContext } from 'react';
import Pizza from './Pizza.js';
import { PizzaContext } from '../App.js';

export default function Pizzas_Second_Section() {
	const { pizzas } = useContext(PizzaContext);
	return (
		<>
			<div className={'pizza-section pizza-section-veggie xl-space'}>
				<div className="info">
					<div className="title-second-section flow-content title">
						<p className={'text-900'}>Mouth Watering...</p>
			
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
