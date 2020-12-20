import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowAltCircleLeft,
	faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { PizzaContext } from '../App.js';
import TrollyItem from './TrollyItem';
import { motion } from 'framer-motion';
import { burgerAnimation } from '../animations/Animations';

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

	// Prevent Scrolling
	let targetElement = document.querySelector('html');
	useEffect(() => {
		toogleSideBar
			? targetElement.classList.add('no-scroll-two')
			: targetElement.classList.remove('no-scroll-two');
	});
	//

	return (
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
					<button className="btn btn-red">ORDER NOW</button>
				</div>
			</div>
		</motion.div>
	);
}
