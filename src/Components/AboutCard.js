import React from 'react';
// import { motion,  useViewportScroll,useTransform } from 'framer-motion';
import {
	aboutCardAnimation,
} from '../animations/Animations';

export default function AboutCard({name, description, image}) {
    // const { scrollYProgress } = useViewportScroll();
	// const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

	// useEffect(() => {
	// 	console.log(scrollYProgress);
	// }, [scrollYProgress]);
    return (
        
            <div
				variants={aboutCardAnimation}
				initial="close"
				animate="open"
				className="split about-card center-center"
			>
				<div>
					<img
                
						src={image}
						alt="Alejandro Rodriguez Perez Picture"
					></img>
				</div>
				<div className="flow-content about-info">
					<h2 className={'text-900'}>{name}</h2>
					<p className={'text-500'}>
						{description}
					</p>
				</div>
			</div>
        
    )
}
