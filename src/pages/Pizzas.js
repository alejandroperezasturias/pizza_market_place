import React, { useContext, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import PizzasFavourites from '../Components/PizzasFavourties';
import PizzasSecondSection from '../Components/PizzasSecondSection';
// import PizzaDetail from '../Components/PizzaDetail';
import { PizzaContext } from '../App.js';
const PizzaDetail = React.lazy(() => import('../Components/PizzaDetail'));

// {toogleSideBar && (
// 	<Suspense fallback={<div>Loading Sidebar...</div>}>
// 		<Trolly />
// 	</Suspense>
// )}
export default function Pizza() {
	const { itemModifier } = useContext(PizzaContext);

	return (
		<div>
			<AnimatePresence>
				{itemModifier && (
					<Suspense fallback={<div>Loading Modifier...</div>}>
						<PizzaDetail />
					</Suspense>
				)}
			</AnimatePresence>
			<PizzasFavourites />
			<PizzasSecondSection />
		</div>
	);
}
