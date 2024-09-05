export const fadeUp = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.4, ease: "easeInOut", delay: 0.3 },
	},
};


export const fadeLeft = {
	hidden: { opacity: 0, x: -20 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.4, ease: "easeInOut", delay: 0.3 },
	},
};

export const fadeRight = {
	hidden: { opacity: 0, x: -20 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.4, ease: "easeInOut", delay: 0.3 },
	},
};

export const fade = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { duration: 0.4, ease: "easeInOut", delay: 0.3 },
	},
};
export const zoomIn = {
	hidden: { scale: 0.3 },
	visible: {
		scale: 1,
		transition: { duration: 0.4, ease: "easeInOut" },
	},
};
