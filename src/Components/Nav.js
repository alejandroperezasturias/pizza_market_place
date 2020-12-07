import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logox2.svg';
import '../css/nav.css';
import { PizzaContext } from '../App.js';
import { motion } from 'framer-motion';
import {
	burgerAnimation,
	titleAnim,
	lineOneBurger,
	lineThreeBurger,
	lineTwoBurger,
	spanQuantityAnimation,
} from '../animations/Animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
	const {
		setToogleSideBar,
		toogleSideBar,
		totalOrderPrice,
		totalOrderSize,
	} = useContext(PizzaContext);
	const [isOpen, setIsOpen] = useState(false);
	const [animateSpanAmount, setAnimateSpanAmount] = useState(false);

	useEffect(() => {
		setAnimateSpanAmount(!animateSpanAmount);
		setTimeout(() => {
			setAnimateSpanAmount(false);
		}, 100);
	}, [totalOrderSize]);

	return (
		<header className="header">
			<nav className="nav">
				<div
					className="burger flow-content"
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				>
					<motion.div
						initial="close"
						animate={isOpen ? 'open' : 'close'}
						variants={lineOneBurger}
					></motion.div>
					<motion.div
						initial="close"
						animate={isOpen ? 'open' : 'close'}
						variants={lineTwoBurger}
					></motion.div>
					<motion.div
						initial="close"
						animate={isOpen ? 'open' : 'close'}
						variants={lineThreeBurger}
					></motion.div>
				</div>
				<a href="" aria-label="pizza-page" className="logo flow-content">
					<div>
						<img src={logo} alt="img/logo.svg" />
					</div>
				</a>
				<div
					className="nav-links"
					onClick={() => {
						return toogleSideBar ? setToogleSideBar(false) : '';
					}}
				>
					<ul>
						<div className={'pizza-drinks-wrapper'}>
							<Link to={'/'} style={{ textDecoration: 'none' }}>
								<li>
									<a>Pizza</a>
								</li>
							</Link>
							<Link to={'/drinks'} style={{ textDecoration: 'none' }}>
								<li>
									<a>Drinks</a>
								</li>
							</Link>
						</div>
						<div className={'about-contact-wrapper-visible'}>
							<li>
								<a className="overflow-hidden">About</a>
							</li>
							<li>
								<a>Contact</a>
							</li>
						</div>
						<motion.div
							className={'about-contact-wrapper overflow-hidden'}
							initial="close"
							animate={isOpen ? 'open' : 'close'}
							variants={burgerAnimation}
						>
							<motion.li variants={titleAnim}>
								<a className="overflow-hidden">About</a>
							</motion.li>
							<motion.li variants={titleAnim}>
								<a>Contact</a>
							</motion.li>
						</motion.div>
					</ul>
				</div>
				<div
					className="trolly"
					onClick={() => setToogleSideBar(!toogleSideBar)}
				>
					<div>
						<FontAwesomeIcon
							size={'lg'}
							icon={faShoppingCart}
							className={'icon'}
						/>
						<motion.span
							initial="close"
							animate={animateSpanAmount ? 'open' : 'close'}
							variants={spanQuantityAnimation}
							className="nav-order-size"
						>
							{totalOrderSize}
						</motion.span>
					</div>

					<span>CZK{totalOrderPrice}</span>
				</div>
			</nav>
		</header>
	);
}
