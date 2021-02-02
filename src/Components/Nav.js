import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logox2.svg';
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
import TrollyBottom from '../styles-material/bottomTrolly';

export default function Nav() {
	const {
		setToogleSideBar,
		toogleSideBar,
		totalOrderPrice,
		totalOrderSize,
		pathname,
	} = useContext(PizzaContext);
	const [isOpen, setIsOpen] = useState(false);
	const [animateSpanAmount, setAnimateSpanAmount] = useState(false);

	// Prevent Scrolling
	let targetElement = document.querySelector('html');
	useEffect(() => {
		isOpen
			? targetElement.classList.add('no-scroll-two')
			: targetElement.classList.remove('no-scroll-two');
	});
	//

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
				<a
					href="https://tender-poincare-d7323f.netlify.app/"
					aria-label="acme home page"
					className="logo no-select flow-content"
					style={
						pathname === '/about' || pathname === '/contact'
							? { borderRadius: '1rem' }
							: {}
					}
				>
					<div className="logo-image-wrapper">
						<img src={logo} className={'no-select'} alt="img/logo.svg" />
					</div>
					<div className="name">
						<h1
							style={{
								fontFamily: 'var(--ff-accent)',
								fontWeight: 'var(--fw-700)',
								fontSize: 'var(--fs-900)',
							}}
						>
							The 5th Hut
						</h1>
						<h2>Slow Pizza</h2>
					</div>
				</a>
				<div className="nav-links">
					<ul>
						<div className={'pizza-drinks-wrapper'}>
							<Link
								to={'/'}
								style={
									pathname === '/'
										? {
												textDecoration: 'none',
												fontWeight: '900',
												transition: '0',
										  }
										: {
												textDecoration: 'none',
												fontWeight: 'initial',
												transition: '0',
										  }
								}
								className={'navigation-link'}
							>
								<li
									className={
										pathname === '/' ? 'navigation-link-underline-active' : ''
									}
								>
									Pizzas
								</li>
							</Link>
							<Link
								to={'/drinks'}
								style={
									pathname === '/drinks'
										? {
												textDecoration: 'none',
												fontWeight: '900',
												transition: 'all 0.25ms ease-in-out',
										  }
										: {
												textDecoration: 'none',
												fontWeight: 'initial',
												transition: 'all 0.25ms ease-in-out',
										  }
								}
								className={'navigation-link'}
							>
								<li
									className={
										pathname === '/drinks'
											? 'navigation-link-underline-active'
											: ''
									}
								>
									Drinks
								</li>
							</Link>
						</div>
						<div className={'about-contact-wrapper-visible'}>
							<Link
								to={'/about'}
								style={
									pathname === '/about'
										? {
												textDecoration: 'none',
												fontWeight: '900',
												transition: 'all 0.25ms ease-in-out',
										  }
										: {
												textDecoration: 'none',
												fontWeight: 'initial',
												transition: 'all 0.25ms ease-in-out',
										  }
								}
								className={'navigation-link'}
							>
								<li
									className={
										pathname === '/about'
											? 'navigation-link-underline-active'
											: ''
									}
								>
									About
								</li>
							</Link>
							<Link
								to={'/contact'}
								style={
									pathname === '/contact'
										? {
												textDecoration: 'none',
												fontWeight: '900',
												transition: 'all 0.25ms ease-in-out',
										  }
										: {
												textDecoration: 'none',
												fontWeight: 'initial',
												transition: 'all 0.25ms ease-in-out',
										  }
								}
								className={'navigation-link'}
							>
								<li
									className={
										pathname === '/contact'
											? 'navigation-link-underline-active'
											: ''
									}
								>
									Contact
								</li>
							</Link>
						</div>
						<motion.div
							className={'about-contact-wrapper overflow-hidden'}
							initial="close"
							animate={isOpen ? 'open' : 'close'}
							variants={burgerAnimation}
						>
							<Link to={'/about'}>
								<motion.li variants={titleAnim}>
									<p
										className={
											pathname === '/about'
												? 'burger-menu-links overflow-hidden text-600'
												: 'burger-menu-links overflow-hidden'
										}
										onClick={() => {
											setIsOpen(!isOpen);
										}}
									>
										About
									</p>
								</motion.li>
							</Link>
							<Link to={'/contact'}>
								<motion.li variants={titleAnim}>
									<p
										className={
											pathname === '/contact'
												? 'burger-menu-links overflow-hidden text-600'
												: 'burger-menu-links overflow-hidden'
										}
										onClick={() => {
											setIsOpen(!isOpen);
										}}
									>
										Contact
									</p>
								</motion.li>
							</Link>
						</motion.div>
					</ul>
				</div>
				<div
					className="trolly"
					onClick={() => setToogleSideBar(!toogleSideBar)}
				>
					<div>
						<TrollyBottom />
						<motion.span
							initial="close"
							animate={animateSpanAmount ? 'open' : 'close'}
							variants={spanQuantityAnimation}
							className="nav-order-size"
						>
							{totalOrderSize}
						</motion.span>
					</div>
					<div className={'nav-cost'}>
						<span>CZK </span>
						<span>{totalOrderPrice}</span>
					</div>
				</div>
			</nav>
		</header>
	);
}
