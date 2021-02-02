import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import Pizza from './Pizza.js';
import { PizzaContext } from '../App.js';
import {
	quoteAnimationParent,
	quoteAnimationSibling,
} from '../animations/Animations';


export default function PizzasFavourites() {
	const { pizzas } = useContext(PizzaContext);
	const [animationStart, setAnimationStart] = useState(true);

	const turnOnAnimation = () => setAnimationStart(true);
	const turnOffAnimation = () => setAnimationStart(false);

	return (
		<div className={'pizza-section'}>
			<div className={'info'}>
				<div className={'quote'}>
					<p className="text-500">
						Pizza as it should be. Slow and mouth-watering. Only sourdough.
					</p>

					<motion.div
						variants={quoteAnimationParent}
						initial="close"
						animate={animationStart ? 'open' : 'close'}
						className="colors-quote-wrapper"
						onHoverStart={() => {
							turnOnAnimation();
						}}
						onHoverEnd={() => turnOffAnimation()}
					>
						<motion.div
							variants={quoteAnimationSibling}
							className="purple-bar"
						></motion.div>
						<motion.div
							variants={quoteAnimationSibling}
							className="orange-bar"
						></motion.div>
						<motion.div
							variants={quoteAnimationSibling}
							className="blue-bar"
						></motion.div>
						<motion.div
							variants={quoteAnimationSibling}
							className="yellow-bar"
						></motion.div>
						<motion.div
							variants={quoteAnimationSibling}
							className="green-bar"
						></motion.div>
						<motion.div
							variants={quoteAnimationSibling}
							className="blue-bar"
						></motion.div>
					</motion.div>
				</div>

				<div className="title">
					<p className={'text-900'}>All Time Favourites</p>

				
				</div>
			</div>
			<div className="pizzas flow-content">
				{pizzas.map((pizza) => {
					if (pizza.all_time_favourite && pizza.is_pizza)
						return <Pizza pizza={pizza} key={pizza.id} />;
				})}
			</div>
		</div>
	);
}
