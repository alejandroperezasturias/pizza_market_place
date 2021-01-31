import React, { useContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import PizzasFavourites from '../Components/PizzasFavourties';
import PizzasSecondSection from '../Components/PizzasSecondSection';
import PizzaDetail from '../Components/PizzaDetail';
import { PizzaContext } from '../App.js';


export default function Pizza() {
	const { itemModifier } = useContext(PizzaContext);

	return (
		<div>
			<AnimatePresence >
				{itemModifier && <PizzaDetail />}
			</AnimatePresence>
			<PizzasFavourites />
			<PizzasSecondSection />
		</div>
	);
}
