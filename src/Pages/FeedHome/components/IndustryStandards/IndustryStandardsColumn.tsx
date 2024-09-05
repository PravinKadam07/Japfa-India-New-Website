import React from 'react';
import { motion } from 'framer-motion';
import { fadeLeft } from '../../../../utils/scrollAnimations';

interface Props {
	id: number;
	iconUrl: string;
	title: string;
	text: string;
	bgImageClass: string;
	customClasses?: string;
	fourColumnLayout?: boolean;
	useRedTheme?: boolean;
}

const IndustryStandardsColumn = ({
	id,
	iconUrl,
	title,
	text,
	bgImageClass,
	customClasses,
	fourColumnLayout,
	useRedTheme,
}: Props) => {
	return (
		<motion.div
			className={`w-full p-4 max-md:p-[10px] max-sm:min-w-[90%] sm:w-6/12 ${
				fourColumnLayout ? 'xl:w-3/12' : 'lg:w-4/12'
			}`}
			variants={fadeLeft}
			initial="hidden"
			whileInView="visible"
		>
			<div
				className={`industry-column h-[340px] max-sm:h-[300px] ${bgImageClass} ${
					customClasses && customClasses
				}`}
			>
				<div
					className={`industry-column-top ${
						useRedTheme ? 'redtheme' : ''
					}`}
				>
					<img
						src={`${process.env.PUBLIC_URL}${iconUrl}`}
						alt=""
						className="industry-column-icon"
					/>

					<div className="industry-column-title">{title}</div>
					<div className={`industry-column-text ${fourColumnLayout && '!text-[16px]'}`}>{text}</div>
				</div>
			</div>
		</motion.div>
	);
};

export default IndustryStandardsColumn;
