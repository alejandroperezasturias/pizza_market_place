export const burgerAnimation = {
	close: {
		opacity: 0,
		x: '-100%',
		transition: {
			duration: 0.2,
			when: 'afterChildren',
			staggerChildren: 0.09,
			staggerDirection: -1,
		},
	},
	open: {
		opacity: 1,
		x: '0%',
		transition: {
			delay: 0.1,
			duration: 0.1,
			ease: 'easeOut',
			when: 'beforeChildren',
			staggerChildren: 0.09,
		},
	},
};

export const titleAnim = {
	close: {
		opacity: 0,
		scale: 0,
		y: +50,
		transition: { y: { stiffness: 700 } },
	},
	open: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: { ease: 'easeOut', stiffness: 400 },
	},
};

export const trollyItemAnim = {
	open: {
		scale: 1,
		opacity: 1,
		transition: {
			stiffness: 1000,
			velocity: -100,
		},
	},
	close: {
		scale: 0.8,
		opacity: 0.8,
		transition: {
			y: { duration: 0.005 },
		},
	},
};

// First line

export const lineOneBurger = {
	open: { rotate: 45, translateY: -3, background: 'white' },
	close: {
		rotate: 0,
		translateY: 0,
		background: 'var(--clr-neutral-300)',
		transition: { duration: 0.1 },
	},
};

export const lineTwoBurger = {
	open: { x: '-100%', opacity: 0, background: 'white' },
	close: {
		x: '0%',
		opacity: 1,
		background: 'var(--clr-neutral-300)',
		transition: { duration: 0.1 },
	},
};

export const lineThreeBurger = {
	open: { rotate: -45, translateY: 4, background: 'white' },
	close: {
		rotate: 0,
		translateY: 0,
		background: 'var(--clr-neutral-300)',
		transition: { duration: 0.1 },
	},
};

// Nav Spn Quantity

export const spanQuantityAnimation = {
	open: { scale: [1, 1.3, 1], transition: { duration: 0.2 } },
	close: {
		scale: 1,
	},
};

// Modal Backdrop Opacity

export const backDrop = {
	open: {
		opacity: 1,
		transition: {
			duration: 0,
			ease: 'easeOut',
		},
	},
	close: {
		opacity: 0,
		transition: {
			duration: 0,
		},
	},
};

export const transionTitle = {
	open: {
		opacity: 1,
	},
};

export const imageModal = {
	open: {
		x: '0%',
		transition: { ease: 'easeOut', duration: 0.2, delay: 0.1 },
	},
	close: {
		x: '300%',
		transition: {
			duration: 0,
		},
	},
};

export const spring = {
	type: 'spring',
	stiffness: 700,
	damping: 30,
};

// Trolly Item

export const trollyItem = {
	open: {
		opacity: 1,
		x: '0%',
		transition: { ease: 'easeOut', duration: 0.2 },
	},
	close: {
		opacity: 0,
		x: '-300%',
	},
};

// Checkout

export const holdUp = {
	close: {
		y: 0,
	},
	open: {
		y: 0,
		transition: {
			delayChildren: 0.1,
			staggerChildren: 0.1,
			staggerDirection: 1,
		},
	},
};

export const letter = {
	close: {
		y: -400,
	},
	open: {
		y: 0,
		transition: {
			duration: 0.4,
			ease: 'easeOut',
			yoyo: Infinity,

			repeatDelay: 0.8,
		},
	},
};
