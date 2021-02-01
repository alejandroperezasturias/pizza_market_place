import React from 'react';
import { motion } from 'framer-motion';
import { cardAnimation } from '../animations/Animations';
export default function AboutCard({ name, description, image }) {
	return (
		<motion.div
			variants={cardAnimation}
			initial="close"
			animate='open'
			className={
				name === 'Matija Šetina'
					? ' bg-primary-400 about-card'
					: 'bg-primary-300  about-card'
			}
		>
			<div className={'about-card-image-wrapper'}>
				<img src={image} alt="Alejandro Rodriguez Perez Picture"></img>
			</div>
			<div className="flow-content about-info">
				<h2 className={'text-900'}>{name}</h2>
				<p className={'text-400'}>{description}</p>
			</div>
		</motion.div>
	);
}
