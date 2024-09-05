import { motion } from 'framer-motion';
import React from 'react';
import { fadeLeft, fadeRight, fadeUp } from '../../../utils/scrollAnimations';
interface ProcessingCentreSectionProps {
	data: {
		title: string;
		imageSrc: string;
		featuresList: string[];
	};
	useRedTheme?: boolean;
}
const ProcessingCentreSection = ({
	data: { title, imageSrc, featuresList },
	useRedTheme,
}: ProcessingCentreSectionProps) => {
	return (
		<div className="max-custom:px-6 mx-auto my-24 max-w-japfaGrid max-mediumScreen:px-14 max-lg:px-8 lg:my-[120px]">
			<motion.h2
				className="text-7xl  font-extrabold leading-snug text-black max-xl:text-[64px]  max-lg:text-[42px] max-md:text-[36px] max-md:leading-tight"
				initial="hidden"
				whileInView="visible"
				variants={fadeUp}
			>
				{title}
			</motion.h2>
			{/* ---- */}
			<div className="mt-16 flex max-w-[1280px] items-center justify-between gap-6 max-sm:flex-col">
				<div className="max-w-[566px] max-md:w-5/12 max-sm:w-full">
					<motion.img
						src={imageSrc}
						alt=""
						initial="hidden"
						whileInView="visible"
						variants={fadeLeft}
					/>
				</div>
				<div
					className={`custom-bullets mt-3 max-w-[566px] max-md:w-7/12 max-sm:w-full ${
						useRedTheme ? 'red-bullets' : ''
					}`}
				>
					<ul className='max-sm:!gap-5'>
						{featuresList.map((feature, index) => (
							<motion.li
								key={index}
								className=""
								initial="hidden"
								whileInView="visible"
								variants={fadeRight}
							>
								{feature}
							</motion.li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ProcessingCentreSection;
