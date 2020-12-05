import React from 'react';
import { motion } from 'framer-motion';

const Arrow = () => {
	return (
		<svg viewBox="0 0 193 30" fill="none" xmlns="http://www.w3.org/2000/svg">
			<motion.path
				initial={{ pathLength: 0, pathOffset: 1 }}
				animate={{ pathLength: 1, pathOffset: 0 }}
				transition={{ duration: 1 }}
				d="M1.5 15C17.1667 25.1667 58.4 39.4 98 15C137.6 -9.39997 176.833 4.83336 191.5 15"
				stroke="#242222"
				stroke-width="40"
			/>
		</svg>
	);
};
export default Arrow;
