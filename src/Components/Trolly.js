import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowAltCircleLeft,
	faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { PizzaContext } from '../App.js';
import TrollyItem from './TrollyItem';
import { motion } from 'framer-motion';
import { burgerAnimation, holdUp, letter } from '../animations/Animations';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

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
		let order_item = trollyItems.map((item) => {
			return {
				id: item.name,
				amount: item.price * 100,
				quantity: item.amount,
				name: item.name,
				currency: 'czk',
				extra_cost: item.extra_cost,
			};
		});
		setOrder(order_item);

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
			// using `result.error.message`.
			console.log(result.error.message);
		}
	};

	return (
		<>
			<motion.div
				initial="close"
				animate={toogleSideBar ? 'open' : 'close'}
				variants={burgerAnimation}
				className="trolly-side-bar"
			>
				<div className={'trolly-header trolly-width-padding'}>
					<FontAwesomeIcon
						size={'lg'}
						icon={faArrowAltCircleLeft}
						className={'icon'}
						onClick={() => setToogleSideBar(!toogleSideBar)}
					/>
					<h2 className={'text-600'}>My Cart</h2>
					<FontAwesomeIcon
						size={'lg'}
						icon={faTrash}
						className={'icon bin'}
						onClick={handleEmptyTrolly}
					/>
				</div>
				<div className="trolly-list">
					{itemsInTheTrolly &&
						trollyItems.map((item) => {
							return <TrollyItem key={item.id} item={item} />;
						})}
				</div>
				<div
					className={
						itemsInTheTrolly
							? 'order-now toggle-opacity flow-content'
							: 'order-now flow-content'
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
					<div className="trolly-main-buttom-wrapper">
						<button
							role="link"
							onClick={() => {
								setToogleSideBar(!toogleSideBar);
								handleClick();
							}}
							className="btn btn-red"
						>
							ORDER NOW
						</button>
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
						<motion.h1 variants={letter}>g </motion.h1>
						<motion.h1 variants={letter}> C</motion.h1>
						<motion.h1 variants={letter}>h</motion.h1>
						<motion.h1 variants={letter}>e</motion.h1>
						<motion.h1 variants={letter}>c</motion.h1>
						<motion.h1 variants={letter}>k</motion.h1>
						<motion.h1 variants={letter}>o</motion.h1>
						<motion.h1 variants={letter}>u</motion.h1>
						<motion.h1 variants={letter}>t</motion.h1>
					</motion.div>
				</div>
			)}
		</>
	);
}
