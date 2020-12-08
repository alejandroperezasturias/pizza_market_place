import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { backDrop, modal } from '../animations/Animations';
import { Link } from 'react-router-dom';
import { PizzaContext } from '../App.js';
import chili from '../Images/chili_svg.svg';
import leaf from '../Images/vegetarian_svg.svg';

export default function PizzaDetail() {
	const { selectedItem } = useContext(PizzaContext);
	return (
		<>
			{selectedItem && (
				<AnimatePresence exitBeforeEnter>
					<motion.div
						className="backdrop"
						variants={backDrop}
						initial="close"
						animate="open"
						exit="close"
					>
						<motion.div
							variants={modal}
							className="modal bg-primary-400 flow-content"
						>
							<h2>{selectedItem.name}</h2>
							<div className={'split center-center'}>
								{selectedItem.vegetarian && (
									<div className="characteristic">
										<img src={leaf} alt="vegetarian emoji"></img>
										<p className="text-300">vegetarian</p>
									</div>
								)}
								{selectedItem.spicy && (
									<div className="characteristic">
										<img src={chili} alt="spicy emoji"></img>
										<p className="text-300">spicy</p>
									</div>
								)}
							</div>
							<div>
								{selectedItem.ingredients.map((ingredient, index) => {
									return <p key={index}>{ingredient.ingredient}</p>;
								})}
							</div>
							<h2>Etra Drinks</h2>
							<input typeof="text"></input>
							<Link to="/">
								<button className={'btn'}>Close</button>
							</Link>
						</motion.div>
					</motion.div>
				</AnimatePresence>
			)}
		</>
	);
}
