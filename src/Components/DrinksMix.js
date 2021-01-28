import { useContext } from 'react';
import Drink from './Drink.js';
import { PizzaContext } from '../App.js';
import deco from '../Images/deco_underline_2.svg';

export default function DrinksMix() {
	const { pizzas } = useContext(PizzaContext);

	return (
		<>
			<div className={'pizza-section'}>
				<div className="info">
					<div className="title xl-space flow-content title">
						<p className={'text-900'}>Something To Drink?</p>
						<img src={deco} alt={'decoration item'} />
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
