import * as React from 'react';
import { motion } from 'framer-motion';
import { SVGMotionProps } from 'framer-motion';
const JourneySectionDesktop = (props: SVGMotionProps<SVGSVGElement>) => {
	const icon1 = {
		hidden: {
            strokeDashoffset: 10,
			strokeDasharray: '3 300',
		},
		visible: {
			strokeDasharray: '3 3',
			strokeDashoffset: 1,
			transition: { duration: 3, ease: 'easeOut'},
		},
	};
	const icon2 = {
		hidden: {
			pathLength: 0,
		},
		visible: {
			pathLength: 1,
			transition: { duration: 2, ease: 'easeInOut', delay: 3 },
		},
	};
	return (
		<motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
			<motion.path
				variants={icon1}
				initial="hidden"
				animate="visible"
				stroke="#6A0600"
				strokeWidth={'2px'}
				fill="none"
				d="M608 54.003C541.667 13.6696 387 -42.797 299 54.003C211 150.803 63.6667 94.3363 1 54.003"
			></motion.path>
			<motion.path
				variants={icon2}
				initial="hidden"
				animate="visible"
				strokeWidth={'2px'}
				xmlns="http://www.w3.org/2000/svg"
				d="M1 80V54.5L28.5 50"
				stroke="#6A0600"
			></motion.path>
		</motion.svg>
	);
};
export default JourneySectionDesktop;
