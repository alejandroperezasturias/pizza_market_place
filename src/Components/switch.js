import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { spring } from '../animations/Animations';

export default function Switch({ handleIngredientChange, id }) {
	const [isOn, setIsOn] = useState(false);

	const toggleSwitch = () => {
		setIsOn(!isOn);
	};

	useEffect(() => {
		let priceIncrease
		isOn ? priceIncrease = -30 : priceIncrease = +30
		handleIngredientChange(id, { extra: isOn }, priceIncrease);
		console.log(`${id} -> ${isOn}`);
	}, [isOn]);

	return (
		<div>
			<div className="switch" data-ison={isOn} onClick={toggleSwitch}>
				<motion.div className="handle" layout transition={spring} />
			</div>
		</div>
	);
}
