import React, { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { trollyItemAnim, trollyItem } from '../animations/Animations';
import { PizzaContext } from '../App';

export default function TrollyItem({ item }) {
	const { handleModifyTrollyItem, handleDeleteTrollyItem } = useContext(
		PizzaContext
	);
	const { image, name, price, ingredients, amount } = item;
	const [quantity, setQuantity] = useState(amount);
	const [iQuantityZero, setQuantityZero] = useState(false);

	// Increase the Quantity
	const handleSetQuantityUp = () => {
		setQuantity((previousQuantity) => (previousQuantity += 1));
	};

	// Keep the item
	const handleKeepTheItem = () => {
		setQuantity((previousQuantity) => (previousQuantity += 1));
	};

	// Decrease the Quantity
	const handleSetQuantityDown = () => {
		setQuantity((previousQuantity) => {
			if (previousQuantity < 1) {
				return (previousQuantity = 0);
			} else {
				setQuantityZero(false);
				return (previousQuantity -= 1);
			}
		});
	};

	const handleChange = () => {
		return { ...item, amount: quantity };
	};

	useEffect(() => {
		handleModifyTrollyItem(handleChange(), item);
		if (quantity === 0) return setQuantityZero(true);
		if (quantity > 0) return setQuantityZero(false);
	}, [quantity]);

	return (
		<>
			<AnimatePresence exitBeforeEnter>
				<motion.div
					variants={trollyItemAnim}
					className={'trolly-item flex-gap-horizontal'}
				>
					<div className="image">
						<img src={image} alt="pizza-image"></img>
					</div>
					<AnimatePresence exitBeforeEnter>
						{iQuantityZero && (
							<motion.div
								className={'delete-item-pop-up flex-gap-horizontal'}
								variants={trollyItem}
								initial="close"
								animate="open"
								exit="close"
							>
								<h3>Do you want to delete this item?</h3>
								<button
									onClick={() => {
										handleDeleteTrollyItem(item);
									}}
									className="btn btn-red"
								>
									Delete Me
								</button>
								<button onClick={handleKeepTheItem} className="btn btn-white">
									Keep Me
								</button>
							</motion.div>
						)}
					</AnimatePresence>
					<div className="trolly-intem-info flow-content">
						<h2 className="text-300">{name}</h2>
						{ingredients.map((i, index) => {
							if (i.extra) {
								return (
									<p className="text-200 no-select" key={index}>
										Extra {i.ingredient}
									</p>
								);
							}
						})}
						<p className="text-400 no-select">
							<span>CZK </span>
							{price}
						</p>
					</div>
					<div className="trolly-item-control flow-content">
						<FontAwesomeIcon
							size={'2x'}
							icon={faPlusCircle}
							className={'icon plus'}
							onClick={handleSetQuantityUp}
						/>
						<p className="text-400 text-center no-select">{quantity}</p>
						<FontAwesomeIcon
							size={'2x'}
							icon={faMinusCircle}
							className={'icon minus'}
							onClick={handleSetQuantityDown}
						/>
					</div>
				</motion.div>
			</AnimatePresence>
		</>
	);
}
