import React from 'react';
import ShadowText from '../../../Components/ShadowText';
import { fadeLeft, fadeRight } from '../../../utils/scrollAnimations';
import { motion } from 'framer-motion';

const JapfitesSection = () => {
	return (
		<>
			<div className="mx-auto max-w-japfaGrid max-mediumScreen:px-14 max-lg:px-8">
				<div className="my-20 grid grid-cols-12 items-center justify-between max-md:flex-col md:my-[80px] lg:my-[120px]">
					<div className="col-span-12 sm:col-span-8">
						<motion.div
							className="mb-2 max-w-[601px] text-[32px] font-light leading-tight text-[#1E140F] lg:text-[60px]"
							variants={fadeLeft}
							whileInView={'visible'}
							initial={'hidden'}
						>
							Empowering our core, Empowering
						</motion.div>
						<motion.div
							variants={fadeRight}
							initial={'hidden'}
							whileInView={'visible'}
						>
							<ShadowText
								text=" JAPFAITES..."
								classes="max-sm:!text-[60px] max-md:!text-[72px] md:text-[80px] lg:!text-[120px] farmText"
							/>
						</motion.div>
					</div>
					{/* image */}
					<div className="col-span-12 max-md:mt-8 sm:col-span-4">
						<motion.img
							src={`${process.env.PUBLIC_URL}/assets/img/career-japfites.webp`}
							alt=""
							className="w-full  object-contain"
							variants={fadeRight}
							initial={'hidden'}
							whileInView={'visible'}
						/>
					</div>
				</div>
			</div>
			{/* Mutual prosperity section */}
			<div className="flex items-center justify-between gap-10 pb-20 max-md:flex-col-reverse lg:mb-[120px]">
				<div className="mediumScreeen:max-w-[calc(100vw/2)] w-full max-w-[750px] md:w-8/12">
					<motion.img
						src={`${process.env.PUBLIC_URL}/assets/img/career-mutual-prosperity.webp`}
						alt=""
						className="w-full object-contain"
						variants={fadeLeft}
						initial={'hidden'}
						whileInView={'visible'}
					/>
				</div>
				<div className="max-w-[566px] mediumScreen:mr-[calc((100vw-1352px)/2)] md:mr-8 max-md:px-8">
					<motion.div
						className="mb-10 h-[1px] w-24 bg-black"
						variants={fadeRight}
						initial={'hidden'}
						whileInView={'visible'}
					></motion.div>
					<motion.div
						className="max-w-[566px] text-[16px] lg:text-2xl font-normal not-italic leading-tight text-black"
						variants={fadeRight}
						initial={'hidden'}
						whileInView={'visible'}
					>
						At JAPFA, Mutual Prosperity is our Guiding Principle.
						Our company's growth is intricately linked to the growth
						and development of our people.
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default JapfitesSection;
