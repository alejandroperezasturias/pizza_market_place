import React, { useContext, useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import RemoveCircleRoundedIcon from '@material-ui/icons/RemoveCircleRounded';
import Switch from './switch';
import { motion } from 'framer-motion';
import { backDrop, transionTitle, imageModal } from '../animations/Animations';
import { Link } from 'react-router-dom';
import { PizzaContext } from '../App.js';
import chili from '../Images/chili_svg.svg';
import leaf from '../Images/vegetarian.svg';
import ToTheTrollyNow from '../styles-material/bottomToTrolly';
import BottomBack from '../styles-material/bottomBack';

export default function PizzaDetail() {
	const {
		handleModifyPizza,
		togglePizzaModifier,
		seTogglePizzaModifier,
		itemModifier,
		setItemModifer,
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
	let targetElement2 = document.querySelector('.app-wrapper');
	useEffect(() => {
		if (togglePizzaModifier) {
			targetElement.classList.add('no-scroll');
			targetElement2.classList.add('no-scroll');
		} else {
			targetElement.classList.remove('no-scroll');
			targetElement2.classList.remove('no-scroll');
		}
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

		newAmount = newAmount - quantity;

		newAmount = newAmount < 1 ? (newAmount = 1) : newAmount;

		handleModifyPizza({ ...itemModifier, amount: newAmount });
	};

	// const handleChangeNote = (text) => {
	// 	setNote(text);
	// };

	return (
		<>
			{itemModifier && (
				<div
					className="modal-backdrop"
					variants={backDrop}
					initial="close"
					animate="open"
					exit="close"
				>
					<div className={'modal-image'}>
						<motion.div variants={imageModal}>
							<img src={itemModifier.image} alt={itemModifier.name}></img>
						</motion.div>
					</div>

					<div className="modal bg-primary-400">
						<div className="flow-content modal-wrapper">
							<div className="modal-bottomBack-wrapper">
								<Link
									to="/"
									onClick={() => {
										seTogglePizzaModifier(false);
										setItemModifer(undefined);
									}}
								>
									<BottomBack />
								</Link>
							</div>
							<div className="modal-intro-wrapper flow-content">
								<div className="modal-name-wrapper xl-space">
									<motion.h2
										variants={transionTitle}
										layoutId={`card-name-container-${itemModifier.id}`}
										className={'modal-name'}
									>
										{itemModifier.name}
									</motion.h2>
								</div>
								<div className={'modal-ingredients'}>
									{itemModifier.ingredients.map((ingredient, index) => {
										return (
											<p className="text-300" key={index}>
												{ingredient.ingredient}
											</p>
										);
									})}
								</div>
								<div className={'modal-ingredients'}>
									{itemModifier.vegetarian && (
										<div className="modal-characteristic characteristic  ">
											<img src={leaf} alt="vegetarian emoji"></img>
											<p className="text-300">vegetarian</p>
										</div>
									)}
									{itemModifier.spicy && (
										<div className="modal-characteristic characteristic  ">
											<img src={chili} alt="spicy emoji"></img>
											<p className="text-300">spicy</p>
										</div>
									)}
								</div>
							</div>
							<div className="modal-Extra-Ingredients-wrapper flow-content">
								<h2 className={'text-500'}>Make It Your Own</h2>
								{itemModifier.ingredients.map((ingredient, index) => {
									if (!ingredient.basic) {
										return (
											<div className="modal-Extra-Ingredients" key={index}>
												<div className="modal-Switch-container">
													<p className="text-300">
														Extra {ingredient.ingredient}?
													</p>
													<Switch
														handleIngredientChange={handleIngredientChange}
														id={ingredient.id}
													/>
												</div>
												<div className="test-pizza-detail">
													<p className="text-300">CZK 30</p>
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

							<div className="modal-quantity flex-gap-horizontal xl-space">
								<div
									onClick={() => {
										handleAmountChange(-1);
									}}
								>
									<IconButton
										color="primary"
										style={{ color: 'white' }}
										aria-label="Add one pizza"
										component="span"
										// "default","inherit","large","small"
									>
										<AddCircleRoundedIcon fontSize="large" />
									</IconButton>
								</div>
								<p className="text-400 text-center no-select">
									{itemModifier.amount}
								</p>
								<div
									onClick={() => {
										handleAmountChange(1);
									}}
								>
									<IconButton
										color="primary"
										style={{ color: 'white' }}
										aria-label="Remove one  pizza"
										component="span"
									>
										<RemoveCircleRoundedIcon fontSize="default" />
									</IconButton>
								</div>
							</div>
							<div className="modal-buttom-price-wrapper xl-space">
								<Link to="/">
									<ToTheTrollyNow />
								</Link>
								<p className="text-300 no-select">
									<span>CZK </span>
									{itemModifier.price}
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
