import React, { useContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import PizzasClassic from '../Components/Pizzas_Classics';
import Pizzas_Veggie from '../Components/Pizzas_Veggie';
import PizzaDetail from '../Components/PizzaDetail';
import { PizzaContext } from '../App.js';

export default function Pizza() {

	const { itemModifier } = useContext(PizzaContext);

	return (
		<div>
			<AnimatePresence exitBeforeEnter >{itemModifier && <PizzaDetail />}</AnimatePresence>
			<PizzasClassic />
			<Pizzas_Veggie />
		</div>
	);
}
