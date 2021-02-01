import React from 'react';
import { motion } from 'framer-motion';

import {
	quoteAnimationParent,
	aboutAnimationSibling,
} from '../animations/Animations';
import alejandroPicture from '../Images/Alejandro_Perez.svg';
import matijaSetina from '../Images/Matja_Setina.svg';
import AboutCard from '../Components/AboutCard';
// import ScrollComponent from '../animations/ScrollComponent';

export default function About() {
	return (
		<div className="about-section xl-space">
			{/* <ScrollComponent> */}
				<AboutCard
					image={alejandroPicture}
					name={'Alejandro Perez'}
					description={
						'lorem onsectetur adipisicing el uptatum beatae porro sint praesentium iust onsectetur adipisicing el uptatum beatae porro sint praese '
					}
				/>
			{/* </ScrollComponent> */}
			{/* <ScrollComponent> */}
				<AboutCard
					image={matijaSetina}
					name={'Matija Šetina'}
					description={
						'lorem onsectetur adipisicing el uptatum beatae porro sint praesentium iust onsectetur adipisicing el uptatum beatae porro sint praese '
					}
				/>
			{/* </ScrollComponent> */}

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
