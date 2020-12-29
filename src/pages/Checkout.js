import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
	'pk_test_51I0T0LITd1Op6Vxb6SMbHR4RjJmo17uWxgtAdm2jUJEK2OeZ5T7tJE3rsg6JdMNwTVuBoP3weWYst4Bq8WRvZUCt00M0Bi3crg'
);



export default function Checkout() {
	const handleClick = async (event) => {
		// Get Stripe.js instance
		const stripe = await stripePromise;

		// Call your backend to create the Checkout Session
		const response = await fetch('/create-checkout-session', {
			method: 'POST',
		});

		const session = await response.json();
		console.log(session);
		// When the customer clicks on the button, redirect them to Checkout.
		const result = await stripe.redirectToCheckout({
			sessionId: session.id,
		});

		if (result.error) {
			// If `redirectToCheckout` fails due to a browser or network
			// error, display the localized error message to your customer
			// using `result.error.message`.
		}
	};

	return (
		<button role="link" onClick={handleClick}>
			Checkout
		</button>
	);
}

// export default function Checkout() {
// 	return (
// 		<Elements stripe={stripePromise}>
// 			<h1>Checkout</h1>
// 			<CheckoutForm />
// 		</Elements>
// 	);
// }
