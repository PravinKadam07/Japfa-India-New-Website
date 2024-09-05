import React from 'react';
import { motion } from 'framer-motion';
import { fadeLeft, fadeRight } from '../../../utils/scrollAnimations';

const Brands = () => {
	return (
		<section className="mx-auto max-w-japfaGrid max-mediumScreen:px-14 max-lg:px-8 max-md:py-24">
			<div className="brands-section overflow-hidden rounded-[20px] bg-[#160700] px-10 py-[4.7rem] lg:px-28">
				<div className="mx-auto flex flex-col items-center justify-between gap-5 lg:flex-row">
					<div className="flex flex-col max-lg:max-w-[430px] max-lg:text-center">
						<motion.h1
							className="mb-6 text-[32px] font-normal text-white max-sm:text-[24px] lg:max-w-[450px]"
							variants={fadeLeft}
							initial="hidden"
							whileInView="visible"
						>
							 Our feed mills across the country manufacture top-quality feed under
						</motion.h1>
						<motion.h2
							className="bg-custom-gradient-2 bg-clip-text text-[40px] font-extrabold text-transparent lg:text-7xl "
							variants={fadeRight}
							initial="hidden"
							whileInView="visible"
						>
							JAPFA Brands
						</motion.h2>
					</div>
					<motion.div
						className="image-bg-glow max-w-[340px] xl:max-w-[477px]"
						variants={fadeRight}
						initial="hidden"
						whileInView="visible"
					>
						<img
							src={`${process.env.PUBLIC_URL}/assets/img/brands.svg`}
							alt=""
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Brands;
