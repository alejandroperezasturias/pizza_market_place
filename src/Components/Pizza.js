import React, { useContext } from 'react';
import chili from '../Images/chili_svg.svg';
import leaf from '../Images/vegetarian_svg.svg';
import { motion } from 'framer-motion';
import { PizzaContext } from '../App.js';
import { Link } from 'react-router-dom';

export default function Pizza({ pizza }) {
	const { image, ingredients, name, vegetarian, spicy, id, price } = pizza;
	const { handleAddToItemModifier, setPizzaSelectedID } = useContext(
		PizzaContext
	);
	return (
		<motion.div className={'flow-content split pizza'}>
			<div className="image flow-content ">
				<div>
					<img src={image} alt="pizza-image"></img>
				</div>
				<div className={'split center-center'}>
					{vegetarian && (
						<div className="characteristic">
							<img src={leaf} alt="vegetarian emoji"></img>
							<p className="text-300">vegetarian</p>
						</div>
					)}
					{spicy && (
						<div className="characteristic">
							<img src={chili} alt="spicy emoji"></img>
							<p className="text-300">spicy</p>
						</div>
					)}
				</div>
			</div>
			<motion.div className="pizza-info flow-content">
				<motion.div
					layoutId={`card-name-container-${id}`}
					className="pizza-name"
				>
					<h2>{name}</h2>
				</motion.div>
				<div className={'pizza-ingredients-wrapper'}>
					{ingredients.map((ingredient, index) => {
						return <p key={index}>{ingredient.ingredient}</p>;
					})}
				</div>
				<p className="text-400">
					<span>CZK </span>
					{price}
				</p>
				<div className="split pizza-buttons-container">
					<Link to={`/pizza/:${id}`}>
						<button
							onClick={() => {
								handleAddToItemModifier(id);
								setPizzaSelectedID(id);
							}}
							className="btn btn-red "
						>
							I WANT
						</button>
					</Link>
				</div>
			</motion.div>
		</motion.div>
	);
}
