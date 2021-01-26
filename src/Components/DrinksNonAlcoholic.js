import {  useContext } from 'react';
import Drink from './Drink.js';
import { PizzaContext } from '../App.js';

export default function DrinksNonAlcoholic() {
	const { pizzas,  } = useContext(PizzaContext);
	

	return (
		<>
			<div className={'pizza-section'}>
				<div className="info">
					<div className="title-second-section flow-content title">
						<p className={'text-900'}>Thirsty?</p>
			
					</div>
				</div>
				<div className="pizzas flow-content">
					{pizzas.map((drink) => {
						if (!drink.is_pizza) return <Drink drink={drink} key={drink.id} />;
					})}
				</div>
			</div>
		</>
	);
}
