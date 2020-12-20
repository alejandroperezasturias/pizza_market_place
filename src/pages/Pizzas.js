import React, { useContext, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Pizzas from '../Components/Pizzas_Classics';
import Pizzas_Veggie from '../Components/Pizzas_Veggie';
import { useLocation } from 'react-router-dom';
import PizzaDetail from '../Components/PizzaDetail';
import { PizzaContext } from '../App.js';

export default function Pizza() {
	const { pathname } = useLocation();
	const { pizzaBuilderOn, setPizzaBuilderOn } = useContext(PizzaContext);

	useEffect(() => {
		setPizzaBuilderOn(pathname.split('/')[2]);
		console.log(pathname.split('/')[2])
	}, [pathname]);

	return (
		<div>
			<AnimatePresence exitBeforeEnter >{pizzaBuilderOn && <PizzaDetail />}</AnimatePresence>
			<Pizzas />
			<Pizzas_Veggie />
		</div>
	);
}
