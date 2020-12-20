import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import Switch from './switch';
import { motion } from 'framer-motion';
import { backDrop, transionTitle, imageModal } from '../animations/Animations';
import { Link } from 'react-router-dom';
import { PizzaContext } from '../App.js';
import chili from '../Images/chili_svg.svg';
import leaf from '../Images/vegetarian_svg.svg';

export default function PizzaDetail() {
	const {
		handleModifyPizza,
		handleAddToTrolly,
		togglePizzaModifier,
		seTogglePizzaModifier,
		alreadyInTrolly,
		itemModifier,
	} = useContext(PizzaContext);
	// const [note, setNote] = useState();

	// Useparams from rooter to query the product info
	// const { id } = useParams();
	// let product;
	// id
	// 	? (product = pizzas.find((pizza) => pizza.id === id.substring(1)))
	// 	: (product = pizzas[0]);

	// console.log(pizzaBuilderOn.substring(1));

	// Prevent Scrolling
	let targetElement = document.querySelector('html');
	useEffect(() => {
		togglePizzaModifier
			? targetElement.classList.add('no-scroll')
			: targetElement.classList.remove('no-scroll');
	});
	//

	const handleIngredientChange = (id, ingredient, priceIncrease) => {
		const newIngredients = [...itemModifier.ingredients];
		let newPrice = itemModifier.price;
		const indexIngredient = newIngredients.findIndex((r) => r.id === id);
		newIngredients[indexIngredient] = {
			...newIngredients[indexIngredient],
			...ingredient,
		};

		handleModifyPizza({
			...itemModifier,
			ingredients: newIngredients,
			price: newPrice - priceIncrease,
		});
	};

	const handleAmountChange = (quantity) => {
		let newAmount = itemModifier.amount;
		// let newPrice = itemModifier.price;
		newAmount = newAmount - quantity;
		// if (newAmount < 1) newAmount = 1;
		newAmount = newAmount < 1 ? (newAmount = 1) : newAmount;
		// newPrice = newAmount * newPrice;
		handleModifyPizza({ ...itemModifier, amount: newAmount });
	};

	// const handleChangeNote = (text) => {
	// 	setNote(text);
	// };

	return (
		<>
			{itemModifier && (
				<motion.div
					className="backdrop"
					variants={backDrop}
					initial="close"
					animate="open"
					exit="close"
				>
					<div className={'modal-image'}>
						<motion.div className={'modal-image'} variants={imageModal}>
							<img src={itemModifier.image} alt={itemModifier.name}></img>
						</motion.div>
					</div>
					<div className="modal bg-primary-400">
						<div className="flow-content modal-wrapper">
							<Link to="/">
								<button
									onClick={() => seTogglePizzaModifier(false)}
									className={'btn pizzaDetail-button-back'}
								>
									Back To Menu
								</button>
							</Link>
							<motion.div
								variants={transionTitle}
								layoutId={`card-name-container-${itemModifier.id}`}
								className="pizzaDetail-name-wrapper xl-space"
							>
								<h2 className={'pizzaDetail-name'}>{itemModifier.name}</h2>
							</motion.div>

							<div className={'pizzaDetail-ingredients split'}>
								{itemModifier.ingredients.map((ingredient, index) => {
									return <p key={index}>{ingredient.ingredient}</p>;
								})}
							</div>
							<div className={'split'}>
								{itemModifier.vegetarian && (
									<div className="pizzaDetail-characteristic characteristic  ">
										<img src={leaf} alt="vegetarian emoji"></img>
										<p className="text-300">vegetarian</p>
									</div>
								)}
								{itemModifier.spicy && (
									<div className="pizzaDetail-characteristic characteristic  ">
										<img src={chili} alt="spicy emoji"></img>
										<p className="text-300">spicy</p>
									</div>
								)}
							</div>
							<h2 className={'text-500'}>Make It Your Own</h2>
							<div className="flow-content">
								{itemModifier.ingredients.map((ingredient, index) => {
									if (!ingredient.basic) {
										return (
											<div
												className="pizzaDetail-Extra-Ingredients"
												key={index}
											>
												<div className="split center-center">
													<p>Extra {ingredient.ingredient}?</p>
													<Switch
														handleIngredientChange={handleIngredientChange}
														id={ingredient.id}
													/>
												</div>
												<div className="test-pizza-detail">
													<p>+30CZK</p>
												</div>
											</div>
										);
									}
								})}
							</div>
							{/* <input
									onChange={(e) => handleChangeNote(e.target.value)}
									typeof="text"
								></input> */}

							<div className="pizzaDetail-quantity flex-gap-horizontal xl-space">
								<div
									onClick={() => {
										handleAmountChange(-1);
									}}
								>
									<FontAwesomeIcon
										size={'2x'}
										icon={faPlusCircle}
										className={'icon plus'}
										style={{ color: 'white' }}
									/>
								</div>
								<p className="text-400 text-center no-select">
									{itemModifier.amount}
								</p>
								<div
									onClick={() => {
										handleAmountChange(1);
									}}
								>
									<FontAwesomeIcon
										size={'2x'}
										icon={faMinusCircle}
										className={'icon minus'}
									/>
								</div>
							</div>
							<div className="pizzaDetail-buttom-price-wrapper xl-space">
								<Link to="/">
									<motion.button
										onClick={() => {
											handleAddToTrolly(itemModifier.id);
											seTogglePizzaModifier(false);
										}}
										className={
											'btn bg-primary-300 pizzaDetail-button-add no-select'
										}
									>
										{alreadyInTrolly
											? 'Already In the Trolly'
											: 'Add To Basket'}
									</motion.button>
								</Link>
								<p className="text-400 no-select">
									<span>CZK </span>
									{itemModifier.price}
								</p>
							</div>
						</div>
					</div>
				</motion.div>
			)}
		</>
	);
}
