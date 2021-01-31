import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


export default function ScrollComponent({ children }) {
	const controls = useAnimation();
	const [ref, inView] = useInView({ threshold: 0.5 });

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		} else {
			controls.stop();
		}
	}, [inView, controls]);

	return (
		<motion.div
			ref={ref}
			animate={controls}
			initial="hidden"
			transition={{ duration: 0.3 }}
			variants={{
				visible: {
					opacity: 1,
					scale: 1,
					transition: {
						duration: 0.5,
						delay:0.4
					},
				},
				hidden: { opacity: 0, scale: 0.8 },
			}}
		>
			{children}
		</motion.div>
	);
}