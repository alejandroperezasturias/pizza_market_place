import React, { useState, useContext, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { trollyItemAnim, trollyItem } from '../animations/Animations';
import { PizzaContext } from '../App';
import IconButton from '@material-ui/core/IconButton';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import RemoveCircleRoundedIcon from '@material-ui/icons/RemoveCircleRounded';
import BottomTrollyItem from '../styles-material/bottomRemovefromTrolly';
import { uuid } from 'uuidv4';

export default function TrollyItem({ item }) {
	const {
		handleModifyTrollyItem,
		handleDeleteTrollyItem,
		toogleSideBar,
	} = useContext(PizzaContext);
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

	const handleDeletetheItem = () => {
		setQuantityZero(false);
		handleDeleteTrollyItem(item);
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
		console.log(quantity);
		if (quantity === 0) return setQuantityZero(true);
		if (quantity > 0) return setQuantityZero(false);
	}, [quantity]);

	return (
		<motion.div
			key={item}
			variants={trollyItemAnim}
			animate={toogleSideBar ? 'open' : 'close'}
			exit={{
				opacity: 0,
				x: '-300%',
				transition: { ease: 'easeIn', duration: 0.5 },
			}}
			className={'trolly-item flex-gap-horizontal'}
		>
			<div className="image">
				<img src={image} alt="pizza-image"></img>
			</div>
			<AnimatePresence>
				{iQuantityZero && (
					<motion.div
						className={'delete-item-pop-up'}
						variants={trollyItem}
						initial="close"
						animate="open"
						exit="close"
						key={item.id}
					>
						<h3>Do you want to delete this item?</h3>

						<BottomTrollyItem
							Message={'Delete Me'}
							color={'#fc6640'}
							callBack={handleDeletetheItem}
							item={item}
						/>
						<BottomTrollyItem
							Message={'Keep Me'}
							color={'#76d8f4'}
							callBack={handleKeepTheItem}
							item={''}
						/>
					</motion.div>
				)}
			</AnimatePresence>
			<div className="trolly-intem-info flow-content">
				<h2 className="text-300">{name}</h2>
				{ingredients &&
					ingredients.map((i, index) => {
						if (i.extra) {
							return (
								<p className="text-200 no-select extra-ingredient" key={index}>
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
				<IconButton
					color="primary"
					style={{ color: '#242222' }}
					aria-label="Add one more pizza"
					component="span"
					onClick={handleSetQuantityUp}
				>
					<AddCircleRoundedIcon />
				</IconButton>
				<p className="text-400 text-center no-select">{quantity}</p>
				<IconButton
					color="primary"
					style={{ color: '#242222' }}
					aria-label="Remove one pizza"
					component="span"
					onClick={handleSetQuantityDown}
				>
					<RemoveCircleRoundedIcon />
				</IconButton>
			</div>
		</motion.div>
	);
}
