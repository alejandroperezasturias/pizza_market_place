import React, { useContext, useEffect } from 'react';
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
	}, [pathname]);

	return (
		<div>
			{pizzaBuilderOn && <PizzaDetail />}
			<Pizzas />
			<Pizzas_Veggie />
		</div>
	);
}
