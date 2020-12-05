import React, { useContext } from 'react';
import chili from '../Images/chili_svg.svg';
import leaf from '../Images/vegetarian_svg.svg';
import { PizzaContext } from '../App.js';

export default function Pizza({ pizza }) {
	const {
		image,
		ingredients,
		name,
		vegetarian,
		spicy,
		id,
		price,
	} = pizza;
	const { handleAddToTrolly } = useContext(PizzaContext);
	return (
		<div className={'flow-content split pizza'}>
			<div className="image flow-content ">
				<img src={image} alt="pizza-image"></img>
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
			<div className="pizza-info flow-content">
				<h2>{name}</h2>
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
					<button
						onClick={() => {
							handleAddToTrolly(id);
							
						}}
						className="btn btn-red "
					>
						I WANT
					</button>
				</div>
			</div>
		</div>
	);
}
