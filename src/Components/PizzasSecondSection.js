import { useContext } from 'react';
import Pizza from './Pizza.js';
import { PizzaContext } from '../App.js';


export default function PizzasSecondSection() {
	const { pizzas } = useContext(PizzaContext);
	return (
		<>
			<div className={'pizza-section pizza-second-section xl-space'}>
				<div className="info xl-space">
					<div className="title">
						<p className={'text-900'}>Classics</p>
		
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
