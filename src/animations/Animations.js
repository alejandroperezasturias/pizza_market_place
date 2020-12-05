export const burgerAnimation = {
	close: {
		opacity: 0,
		x: '-100%',
		transition: {
			duration: 0.1,
			when: 'afterChildren',
			staggerChildren: 0.09,
			staggerDirection: -1,
		},
	},
	open: {
		opacity: 1,
		x: '0%',
		transition: {
			duration: 0.2,
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
	open: { rotate: 45, background: 'white' },
	close: {
		rotate: 0,
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
