import React from 'react';
import { motion } from 'framer-motion';
import { fade, fadeRight, fadeLeft } from '../../../utils/scrollAnimations';

const Awards = () => {
	return (
		<motion.section
			className="relative mb-24 mt-20 max-w-japfaGrid overflow-hidden max-mediumScreen:px-14 max-lg:px-8 max-md:mt-10 xl:mx-auto"
			variants={fade}
			initial="hidden"
			whileInView="visible"
		>
			<div className="awards-section rounded-[20px] bg-[#160700] max-lg:pt-20 lg:p-20 lg:pb-0 xl:px-10 xl:py-0">
				<div className="mx-auto flex flex-col items-center  justify-between gap-5 max-mobileScreen:p-4 max-mobileScreen:pb-0 xl:flex-row xl:items-end xl:pl-20 xl:pr-16">
					<div className="relative flex flex-col max-xl:pb-8 md:text-start xl:py-[11.5rem]">
						<small className="left-18 absolute bottom-5 text-[#ff8e4f] opacity-70">
							<sup>*</sup>2014, Bangkok
						</small>
						<motion.h1
							className="mb-5 text-[32px] font-normal text-white max-xl:text-center max-sm:mb-3 max-sm:text-[24px] lg:text-[40px]"
							variants={fadeLeft}
							initial="hidden"
							whileInView="visible"
						>
							We are proud, we are
						</motion.h1>
						<motion.h2
							className="mb-14 bg-custom-gradient-2 bg-clip-text text-[40px] font-extrabold leading-tight text-transparent max-xl:text-center max-sm:text-[32px] md:mb-0 lg:text-7xl"
							variants={fadeLeft}
							initial="hidden"
							whileInView="visible"
						>
							Asia's best feed mill <br />
							<span className="text-white">award winner</span>
						</motion.h2>
					</div>
					<motion.div
						className="image-bg-glow add-glow-icon add-glow-icon-awards max-w-[200px] md:max-w-[300px]"
						variants={fade}
						initial="hidden"
						whileInView="visible"
					>
						<img
							src={`${process.env.PUBLIC_URL}/assets/img/award.webp`}
							alt=""
						/>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
};

export default Awards;
