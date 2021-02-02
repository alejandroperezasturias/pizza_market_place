import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import './css/App.css';
import Nav from './Components/Nav';
import Pizzas from './pages/Pizzas';
import { PizzasData } from './Components/PizzasData';
// import Trolly from './Components/Trolly';
import Drinks from './pages/Drinks';
import About from './pages/About';
import Contact from './pages/Contact';
import { uid } from 'uid';
import Footer from './Components/footer';
import ScrollToTop from './animations/ScrollToTop';
const Trolly = React.lazy(() => import('./Components/Trolly'));

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
	const [itemModifier, setItemModifer] = useState();
	const [alreadyInTrolly, setAlreadyInTrolly] = useState(false);

	// Handle openning and clossing the modal. As soon as we have the right id in the path, we instantiate the item modifier with the item.
	// Check Pizzas.js to see the conditional that prevents the app from crassing with the annoying undefiened error.
	const { pathname } = useLocation();

	useEffect(() => {
		if (pathname.split('/')[2]) {
			seTogglePizzaModifier(true);
			const itemSelected = pizzas.find(
				(pizza) => pizza.id === pathname.split('/')[2].substring(0)
			);

			setItemModifer({ ...itemSelected, price: itemSelected.price + 30 });
		}
	}, [pathname]);

	// Retrieve Items from LocalStorage
	useEffect(() => {
		const itemsJson = localStorage.getItem(LOCAL_STORAGE_KEY);
		if (itemsJson != null) setTrollyItems(JSON.parse(itemsJson));
		console.log('hi app');
		if (trollyItems.length > 0) setItemsInTheTrolly(true);
	}, []);

	// Trolly modifications
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

	// Check it the item is already in the trolly
	useEffect(() => {
		if (itemModifier) {
			const inTreTrollyAlready = trollyItems.find(
				(item) =>
					JSON.stringify(itemModifier.ingredients) ===
					JSON.stringify(item.ingredients)
			);

			inTreTrollyAlready ? setAlreadyInTrolly(true) : setAlreadyInTrolly(false);
		}
	}, [itemModifier]);

	function handleAddToTrolly(item) {
		// Check if the recipe is already added
		let itemSelected = '';
		if (item) {
			itemSelected = item;
		} else {
			itemSelected = { ...itemModifier };
		}

		if (
			trollyItems.find((item) => {
				if (item.ingredients === null) return;
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

		// If it is not added to trolly. We generate a new ID as we can the same items
		// with different ingredients in the trolly
		itemSelected.id = uid(5);

		let extra_cost = 0;
		if (itemSelected.ingredients) {
			itemSelected.ingredients.forEach((item) =>
				item.extra ? (extra_cost += 30) : ''
			);
		}

		itemSelected.extra_cost = extra_cost;
		setTrollyItems((items) => {
			return [...items, itemSelected];
		});
	}

	const handleEmptyTrolly = () => {
		setTrollyItems([]);
	};

	const handleDeleteTrollyItem = (item) => {
		let newPizzas = [...trollyItems];

		const indexToSplice = newPizzas.findIndex(
			(pizza) => JSON.stringify(pizza) === JSON.stringify(item)
		);
		newPizzas.splice(indexToSplice, 1);

		setTrollyItems(newPizzas);
	};

	const handleModifyPizza = (change) => {
		setItemModifer({ ...itemModifier, ...change });
	};

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
		handleModifyTrollyItem,
		handleDeleteTrollyItem,
		itemModifier,
		seTogglePizzaModifier,
		togglePizzaModifier,
		alreadyInTrolly,
		setItemModifer,
		pathname,
	};

	return (
		<div className="app-wrapper" style={{ overflowX: 'hidden' }}>
			<PizzaContext.Provider value={pizzaContextValue}>
				<div className="App">
					{pathname === '/checkout' ? '' : <Nav />}
					<ScrollToTop />
					<Switch>
						<Route path={['/pizza/:id', '/']} exact component={Pizzas} />
						<Route path="/drinks" strict component={Drinks} />
						<Route path="/about" strict component={About} />
						<Route path="/contact" strict component={Contact} />
					</Switch>

					<Footer />
					<Suspense fallback={<div>Loading Sidebar...</div>}>
						<Trolly />
					</Suspense>
				</div>
			</PizzaContext.Provider>
		</div>
	);
}

export default App;
