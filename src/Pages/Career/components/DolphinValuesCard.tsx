import { motion } from 'framer-motion';
import React from 'react';
import { fade, fadeLeft } from '../../../utils/scrollAnimations';
interface DolphinValuesCardProps {
	title: string;
	imageSrc: string;
	description: string;
}

const DolphinValuesCard: React.FC<DolphinValuesCardProps> = ({
	title,
	imageSrc,
	description,
}) => {
	return (
		<div className="dolphinValuesCard flex gap-10 pl-3">
			<div className="leftLine"></div>
			<div className="flex-grow">
				<div className="dark-gradient-text cardTitle mb-4 pt-5 md:pt-10 text-[24px] sm:text-[40px] font-extrabold">
					<div className="circleDot"></div>
					{title}
				</div>
				<div className="flex flex-col md:items-center justify-between gap-[24px] md:gap-10 pb-[20px] md:pb-10 md:flex-row">
					<div className="w-full md:w-5/12 lg:w-6/12">
						<motion.img
							src={imageSrc}
							alt=""
							className="w-full object-cover"
							variants={fade}
							initial={'hidden'}
							whileInView={'visible'}
						/>
					</div>
					<motion.div
						className="text-[16px] md:text-[20px] lg:text-2xl text-black w-full md:w-7/12 lg:w-5/12"
						variants={fadeLeft}
						initial={'hidden'}
						whileInView={'visible'}
					>
						{description}
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default DolphinValuesCard;
