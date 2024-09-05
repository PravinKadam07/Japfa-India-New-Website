import { motion } from 'framer-motion';
import React from 'react';
import { fadeLeft } from '../utils/scrollAnimations';

interface ShadowTextProps {
	text: string;
	classes?: string;
	originalTextClasses?: string;
	shadowWhite?: boolean;
}

const ShadowText = ({
	text,
	classes,
	originalTextClasses,
	shadowWhite,
}: ShadowTextProps) => {
	return (
		<motion.h2
			className={`shadow-title-wrapper black-text !text-start text-8xl font-extrabold lg:text-[120px] ${classes && classes}`}
			variants={fadeLeft}
			initial={'hidden'}
			whileInView={'visible'}
		>
			<div
				className={`original-text text-inherit ${originalTextClasses && originalTextClasses}`}
			>
				{text}
			</div>
			<div className={`shadow-text ${shadowWhite ? 'shadow-white' : ''}`}>
				{text}
			</div>
		</motion.h2>
	);
};

export default ShadowText;
