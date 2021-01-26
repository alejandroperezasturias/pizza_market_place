import React, { useContext } from 'react';
import chili from '../Images/chili_svg.svg';
import leaf from '../Images/vegetarian_svg.svg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BottomRed from '../styles-material/bottomAdd';

export default function Pizza({ pizza }) {
	const { image, ingredients, name, vegetarian, spicy, id, price } = pizza;
	return (
		<div className={'flow-content split pizza'}>
			<div className="image">
				<div className="pizza-image-wrapper">
					<img src={image} alt="pizza-image"></img>
				</div>
				<div className={'split center-center pizza-characteristics-wrapper'}>
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
			<div className="pizza-info">
				<motion.h2
					className="pizza-info-name"
					layoutId={`card-name-container-${id}`}
				>
					{name}
				</motion.h2>
				<div className={'pizza-ingredients-wrapper'}>
					{ingredients.map((ingredient, index) => {
						return (
							<p className="text-300" key={index}>
								{ingredient.ingredient}
							</p>
						);
					})}
				</div>
				<p className="text-400">
					<span>CZK </span>
					{price}
				</p>
				<div className="split pizza-buttons-container">
					<Link to={`/pizza/${id}`}>
						<BottomRed />
					</Link>
				</div>
			</div>
		</div>
	);
}
