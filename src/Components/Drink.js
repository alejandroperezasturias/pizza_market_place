import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BottomRed from '../styles-material/bottomAdd';
import { PizzaContext } from '../App.js';

export default function Drink({ drink }) {
	const { image, name, id, price } = drink;
	const fullDrink = drink;
	const { handleAddToTrolly, trollyItems } = useContext(PizzaContext);
	const [drinkInTheTrolly, setDrinkInTheTrolly] = useState(false)

	useEffect(()=> {
		const inTheTrollyAlready = trollyItems.find(
			(item) =>
				item.name ===
				drink.name
		);
		inTheTrollyAlready ? setDrinkInTheTrolly(true) : setDrinkInTheTrolly(false);
	},[trollyItems])
	

	return (
		<div className={'flow-content split drink'}>
			<div className="image">
				<div className="pizza-image-wrapper">
					<img src={image} alt="pizza-image"></img>
				</div>
			</div>
			<div className="pizza-info">
				<motion.h2
					className="pizza-info-name"
					layoutId={`card-name-container-${id}`}
				>
					{name}
				</motion.h2>
				<p className="text-400">
					<span>CZK </span>
					{price}
				</p>
				<div
					onClick={() => {
						handleAddToTrolly(fullDrink);
					}}
					className="split pizza-buttons-container"
				>
					<BottomRed drinkInTheTrolly={drinkInTheTrolly}/>
				</div>
			</div>
		</div>
	);
}
