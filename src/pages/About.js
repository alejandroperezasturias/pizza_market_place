import React from 'react';
import { motion } from 'framer-motion';
import {
	quoteAnimationParent,
	aboutAnimationSibling,
} from '../animations/Animations';

export default function About() {
	return (
		<div className="about-section">
			<h1>About</h1>
			<div style={{ minHeight: '50rem' }}></div>
			<motion.div
				variants={quoteAnimationParent}
				initial="close"
				animate={'open'}
				className="colors-about-wrapper"
			>
				<motion.div
					variants={aboutAnimationSibling}
					className="purple-bar"
				></motion.div>
				<motion.div
					variants={aboutAnimationSibling}
					className="orange-bar"
				></motion.div>
				<motion.div
					variants={aboutAnimationSibling}
					className="blue-bar"
				></motion.div>
				<motion.div
					variants={aboutAnimationSibling}
					className="yellow-bar"
				></motion.div>
				<motion.div
					variants={aboutAnimationSibling}
					className="green-bar"
				></motion.div>
				<motion.div
					variants={aboutAnimationSibling}
					className="blue-bar"
				></motion.div>
			</motion.div>
		</div>
	);
}
