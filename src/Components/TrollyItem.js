import React, { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { trollyItemAnim } from '../animations/Animations';
import { PizzaContext } from '../App';

export default function TrollyItem({ item }) {
	const { handleModifyPizza } = useContext(PizzaContext);
	const { image, name, price, id, amount } = item;
	const [quantity, setQuantity] = useState(amount);

	// Increase the Quantity
	const handleSetQuantityUp = () => {
		setQuantity((previousQuantity) => (previousQuantity += 1));
	};

	// Decrease the Quantity
	const handleSetQuantityDown = () => {
		setQuantity((previousQuantity) => {
			if (previousQuantity < 1) {
				return (previousQuantity = 0);
			} else {
				return (previousQuantity -= 1);
			}
		});
	};

	const handleChange = () => {
		return { ...item, amount: quantity };
	};

	useEffect(() => {
		handleModifyPizza(handleChange(), id);
	}, [quantity]);

	return (
		<motion.div
			variants={trollyItemAnim}
			className={'flow-content trolly-item'}
		>
			<div className="image">
				<img src={image} alt="pizza-image"></img>
			</div>
			<div className="trolly-intem-info flow-content">
				<h2 className="text-300">{name}</h2>
				<p className="text-400">
					<span>CZK </span>
					{price}
				</p>
			</div>
			<div className="trolly-item-control flow-content">
				<FontAwesomeIcon
					size={'lg'}
					icon={faPlusCircle}
					className={'icon plus'}
					onClick={handleSetQuantityUp}
				/>
				<p className="text-400 text-center">{amount}</p>
				<FontAwesomeIcon
					size={'lg'}
					icon={faMinusCircle}
					className={'icon minus'}
					onClick={handleSetQuantityDown}
				/>
			</div>
		</motion.div>
	);
}
