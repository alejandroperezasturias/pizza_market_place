import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/App.css';
import Nav from './Components/Nav';
import Pizza from './pages/Pizza';
import { PizzasData } from './Components/PizzasData';
import Trolly from './Components/Trolly';
import Drinks from './pages/Drinks';
export const PizzaContext = React.createContext({});
const LOCAL_STORAGE_KEY = 'the_5ht_hut_trolly';

function App() {
	const [pizzas] = useState(PizzasData);
	const [trollyItems, setTrollyItems] = useState([]);
	const [itemsInTheTrolly, setItemsInTheTrolly] = useState(false);
	const [totalOrderPrice, setTotalOrderPrice] = useState(0);
	const [totalOrderSize, setTotalOrderSize] = useState(0);
	const [toogleSideBar, setToogleSideBar] = useState(false);

	useEffect(() => {
		const itemsJson = localStorage.getItem(LOCAL_STORAGE_KEY);
		if (itemsJson != null) setTrollyItems(JSON.parse(itemsJson));
		if (trollyItems.length > 0) setItemsInTheTrolly(true);
	}, []);

	useEffect(() => {
		// Check if we have items in the trolly
		if (trollyItems.length > 0) setItemsInTheTrolly(true);
		if (trollyItems.length === 0) setItemsInTheTrolly(false);
		// Update Total Price
		let totalPrice = 0;
		trollyItems.forEach((item) => (totalPrice += item.price * item.amount));
		setTotalOrderPrice(totalPrice);
		// Update Total Size
		let totalAmount = 0;
		trollyItems.forEach((item) => (totalAmount += item.amount));
		setTotalOrderSize(totalAmount);
		// Update localStorage
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(trollyItems));
	}, [trollyItems]);

	const handleAddToTrolly = (id) => {
		const itemSelected = pizzas.find((pizza) => pizza.id === id);
		// Check if the recipe is already added
		if (trollyItems.find((item) => item.id === id)) {
			console.log('we have it');
			return;
		}
		// If it is not added to trolly
		setTrollyItems((item) => {
			return [...item, itemSelected];
		});
	};

	const handleEmptyTrolly = () => {
		setTrollyItems([]);
	};

	const handleModifyPizza = (modifiedPizza, id) => {
		const newPizzas = [...trollyItems];
		const thePizza = newPizzas.findIndex((pizza) => pizza.id === id);
		newPizzas[thePizza] = modifiedPizza;
		setTrollyItems(newPizzas);
	};

	const pizzaContextValue = {
		trollyItems,
		itemsInTheTrolly,
		pizzas,
		handleAddToTrolly,
		setToogleSideBar,
		toogleSideBar,
		handleEmptyTrolly,
		totalOrderPrice,
		totalOrderSize,
		handleModifyPizza,
	};
	return (
		<>
			<Router>
				<PizzaContext.Provider value={pizzaContextValue}>
					<div className="App">
						<Nav />
						<switch>
							<Route path="/" exact component={Pizza} />
							<Route path="/drinks" strict component={Drinks} />
						</switch>
						<Trolly />
						<div
							className={
								toogleSideBar
									? 'darken-background toggle-opacity'
									: 'darken-background'
							}
						></div>
					</div>
				</PizzaContext.Provider>
			</Router>
		</>
	);
}

export default App;
