import React, { useContext, useEffect, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import { PizzaContext } from '../App.js';
import TrollyItem from './TrollyItem';
import { motion, AnimatePresence } from 'framer-motion';
import { burgerAnimation, holdUp, letter } from '../animations/Animations';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import OrderNow from '../styles-material/bottomOrder';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
	'pk_test_51I0T0LITd1Op6Vxb6SMbHR4RjJmo17uWxgtAdm2jUJEK2OeZ5T7tJE3rsg6JdMNwTVuBoP3weWYst4Bq8WRvZUCt00M0Bi3crg'
);

export default function Trolly() {
	const {
		trollyItems,
		itemsInTheTrolly,
		toogleSideBar,
		setToogleSideBar,
		handleEmptyTrolly,
		totalOrderPrice,
		totalOrderSize,
	} = useContext(PizzaContext);

	const [order, setOrder] = useState([]);
	const [loadingCheckout, setLoadingCheckout] = useState(false);

	// Prevent Scrolling
	let targetElement = document.querySelector('html');
	useEffect(() => {
		toogleSideBar || loadingCheckout
			? targetElement.classList.add('no-scroll-two')
			: targetElement.classList.remove('no-scroll-two');
	});
	//

	useEffect(() => {
		let order_items = trollyItems.map((item) => {
			return {
				id: item.name,
				amount: item.price * 100,
				quantity: item.amount,
				name: item.name,
				currency: 'czk',
				extra_cost: item.extra_cost,
			};
		});
		setOrder(order_items);

		// Fancy fancy
		return () => {
			setOrder([]);
		};
	}, [trollyItems]);

	const handleClick = async (event) => {
		// Get Stripe.js instance
		setLoadingCheckout(true);
		const stripe = await stripePromise;
		let id;
		// Call your backend to create the Checkout Session
		// const response = await fetch('/create-checkout-session', {
		// 	method: 'POST',
		// });
		try {
			await axios({
				method: 'POST',
				url: 'http://localhost:8080/create-checkout-session',
				data: order,
			})
				.then((response) => {
					id = response.data.id;
				})
				.catch((e) => {
					console.log(e.response.data.message);
				});
		} catch (error) {
			console.log(error);
		}

		// When the customer clicks on the button, redirect them to Checkout.
		const result = await stripe.redirectToCheckout({
			sessionId: id,
		});

		setLoadingCheckout(false);

		if (result.error) {
			// If `redirectToCheckout` fails due to a browser or network
			// error, display the localized error message to your customer
			// using `result.error.message`
			console.error(result.error.message);
		}
	};

	return (
		<>
			<motion.div
				variants={burgerAnimation}
				initial="close"
				animate={toogleSideBar ? 'open' : 'close'}
				className="trolly-side-bar flow-content"
			>
				<div className={'trolly-header'}>
					<IconButton
						color="primary"
						style={{ color: '#242222' }}
						aria-label="Close Trolly"
						component="span"
						size="medium"
						onClick={() => setToogleSideBar(!toogleSideBar)}
					>
						<ArrowBackIosRoundedIcon fontSize="large" />
					</IconButton>
					{itemsInTheTrolly && (
						<div
							className="trolly-main-buttom-wrapper"
							onClick={() => {
								setToogleSideBar(!toogleSideBar);
								handleClick();
							}}
						>
							<OrderNow />
						</div>
					)}
					<IconButton
						color="primary"
						style={{ color: '#242222' }}
						aria-label="Empty Trolly"
						component="span"
						size="medium"
						onClick={handleEmptyTrolly}
					>
						<DeleteRoundedIcon fontSize="large" />
					</IconButton>
				</div>
				<div className="trolly-list">
					<AnimatePresence>
						{itemsInTheTrolly &&
							trollyItems.map((item) => {
								console.log(item.id);
								return <TrollyItem key={item.id} item={item} />;
							})}
					</AnimatePresence>
				</div>
				<div
					className={
						itemsInTheTrolly
							? 'order-now toggle-opacity flow-content '
							: 'order-now flow-content '
					}
				>
					<div className="order-total-info">
						<p className="text-300">
							{totalOrderSize}
							<span> Items</span>
						</p>
						<p className="text-400">
							<span>CZK </span>
							{totalOrderPrice}
						</p>
					</div>
				</div>
			</motion.div>
			<div
				className="backdrop"
				style={toogleSideBar ? { display: 'block' } : { display: 'none' }}
				onClick={() => {
					setToogleSideBar(!toogleSideBar);
				}}
			></div>
			{loadingCheckout && (
				<div className="modal-backdrop checkout flow-content">
					<motion.div
						variants={holdUp}
						initial="close"
						animate="open"
						style={{ overflow: 'hidden', display: 'flex' }}
					>
						<motion.h1 variants={letter}>L</motion.h1>
						<motion.h1 variants={letter}>o</motion.h1>
						<motion.h1 variants={letter}>a</motion.h1>
						<motion.h1 variants={letter}>d</motion.h1>
						<motion.h1 variants={letter}>i</motion.h1>
						<motion.h1 variants={letter}>n</motion.h1>
						<motion.h1 variants={letter}>g</motion.h1>
					</motion.div>
				</div>
			)}
		</>
	);
}
