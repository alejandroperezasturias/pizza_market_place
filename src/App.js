import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import './css/App.css';
import Nav from './Components/Nav';
import Pizzas from './pages/Pizzas';
import { PizzasData } from './Components/PizzasData';
import Trolly from './Components/Trolly';
import Drinks from './pages/Drinks';
import About from './pages/About';
import Contact from './pages/Contact';
import { uid } from 'uid';
export const PizzaContext = React.createContext({});
const LOCAL_STORAGE_KEY = 'the_5ht_hut_trolly';

function App() {
	const [pizzas] = useState(PizzasData);
	const [trollyItems, setTrollyItems] = useState([]);
	const [itemsInTheTrolly, setItemsInTheTrolly] = useState(false);
	const [totalOrderPrice, setTotalOrderPrice] = useState(0);
	const [totalOrderSize, setTotalOrderSize] = useState(0);
	const [toogleSideBar, setToogleSideBar] = useState(false);
	const [togglePizzaModifier, seTogglePizzaModifier] = useState(false);
	const [pizzaBuilderOn, setPizzaBuilderOn] = useState();
	const [itemModifier, setItemModifer] = useState();
	const [pizzaSelectedID, setPizzaSelectedID] = useState();
	const [alreadyInTrolly, setAlreadyInTrolly] = useState(false);

	const handleAddToItemModifier = (id) => {
		seTogglePizzaModifier(true);
		const itemSelected = pizzas.find((pizza) => pizza.id === id);
		setItemModifer({ ...itemSelected, price: itemSelected.price + 30 });
	};

	const { pathname } = useLocation();

	useEffect(() => {
		if (pathname.split('/')[2]) {
			seTogglePizzaModifier(true);
			const itemSelected = pizzas.find(
				(pizza) => pizza.id === pathname.split('/')[2].substring(1)
			);
			setItemModifer({ ...itemSelected });
		}
		console.log(pathname);
	}, [pathname]);

	// On Click I want
	// We filledUp the selectedItem with the selected Pizza And we add the pizza to the Middleman
	// We passed selectedItem to the Modal
	// Any changes in the Modal will be pushed to the Middleman List
	// On Click Add to Basket
	// We look for the item in the middleman array, is the pizza already in trolly? If not! then add it.
	// I need to make the previous methodoogy better as different pizzas witth different extra should be allowed in the trolly

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

	const handleAddToTrolly = () => {
		const itemSelected = { ...itemModifier };
		// Check if the recipe is already added

		if (
			trollyItems.find((item) => {
				if (
					itemSelected.name === item.name &&
					JSON.stringify(item.ingredients) ===
						JSON.stringify(itemSelected.ingredients)
				) {
					return true;
				} else {
					return false;
				}
			})
		) {
			return;
		}

		// If it is not added to trolly
		itemSelected.id = uid(5);
		setTrollyItems((items) => {
			return [...items, itemSelected];
		});
	};

	const handleEmptyTrolly = () => {
		setTrollyItems([]);
	};

	const handleDeleteTrollyItem = (item) => {
		const newPizzas = [...trollyItems];

		const indexToSplice = newPizzas.findIndex(
			(pizza) => JSON.stringify(pizza) === JSON.stringify(item)
		);

		newPizzas.splice(indexToSplice, 1);
		setTrollyItems(newPizzas);
	};

	const handleModifyPizza = (change) => {
		setItemModifer({ ...itemModifier, ...change });
	};

	useEffect(() => {
		const inTreTrollyAlready = trollyItems.find(
			(item) =>
				JSON.stringify(itemModifier.ingredients) ===
				JSON.stringify(item.ingredients)
		);

		inTreTrollyAlready ? setAlreadyInTrolly(true) : setAlreadyInTrolly(false);
	}, [itemModifier]);

	useEffect(() => {
		console.log(itemModifier);
	}, [itemModifier]);

	const handleModifyTrollyItem = (modifiedPizza, item) => {
		const newPizzas = [...trollyItems];
		const thePizza = newPizzas.findIndex(
			(pizza) => JSON.stringify(pizza) === JSON.stringify(item)
		);
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
		pizzaBuilderOn,
		setPizzaBuilderOn,
		handleAddToItemModifier,
		handleModifyTrollyItem,
		handleDeleteTrollyItem,
		itemModifier,
		seTogglePizzaModifier,
		togglePizzaModifier,
		alreadyInTrolly,
		setItemModifer,
		setPizzaSelectedID,
		pathname,
	};

	return (
		<>
			<PizzaContext.Provider value={pizzaContextValue}>
				<div className="App">
					<Nav />

					<Switch>
						<Route path={['/pizza/:id', '/']} exact component={Pizzas} />
						<Route path="/drinks" strict component={Drinks} />
						<Route path="/about" strict component={About} />
						<Route path="/contact" strict component={Contact} />
					</Switch>

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
		</>
	);
}

export default App;
