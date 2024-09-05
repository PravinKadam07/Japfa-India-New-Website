import React from 'react';
import { fadeRight, fadeUp } from '../../utils/scrollAnimations';
import { motion } from 'framer-motion';

const PoultryExcellence = () => {
	return (
		<section className="relative mx-6 my-24 max-w-japfaGrid overflow-hidden rounded-[20px] bg-[#160700] max-xl:mx-6 xl:mx-auto">
			<div className="farm-poultry-excellence-bg mx-auto max-w-[960px] p-20 max-lg:p-12 xl:px-10 xl:pt-20">
				<motion.div
					className=" relative z-10 mx-auto mb-10 flex w-fit flex-col items-center justify-center text-4xl font-light leading-5 text-white md:mb-14 md:text-5xl lg:mb-20 lg:text-7xl"
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
				>
					<div className="max-md: mb-4 w-fit">
						<span className="inline">
							<img
								src={`${process.env.PUBLIC_URL}/assets/img/icon-before-heading.svg`}
								alt=""
								className="-translate-x-8 translate-y-4 max-md:w-8 max-md:-translate-x-7 max-md:translate-y-1"
							/>
						</span>
						Discover our
					</div>
					<div className="">poultry excellence</div>
				</motion.div>
				{/* chicks images */}
				<motion.div
					className="relative z-10 mb-10 grid grid-cols-1 gap-4 md:grid-cols-3"
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
				>
					<div className="col-span-1">
						<div className="flex flex-col items-center justify-center gap-6 text-2xl max-md:text-xl ">
							<img
								src={`${process.env.PUBLIC_URL}/assets/img/farm_hatching.webp`}
								alt="Hatching Eggs"
								className=" max-w-[240px] max-sm:max-w-[160px]"
							/>
							<div className="dark-gradient-text text-center text-2xl font-bold">
								Hatching eggs
							</div>
						</div>
					</div>
					<div className="col-span-1">
						<div className=" flex flex-col items-center justify-center gap-6 text-2xl max-md:text-xl">
							<img
								src={`${process.env.PUBLIC_URL}/assets/img/farm_broiler.webp`}
								alt="broiler birds"
								className=" max-w-[240px] max-sm:max-w-[160px]"
							/>
							<div className="dark-gradient-text text-center text-2xl font-bold">
								Broiler birds
							</div>
						</div>
					</div>
					<div className="col-span-1">
						<div className=" flex flex-col items-center justify-center gap-6 text-2xl max-md:text-xl">
							<img
								src={`${process.env.PUBLIC_URL}/assets/img/farm_ultra-chick.webp`}
								alt="ultra chick"
								className=" max-w-[240px] max-sm:max-w-[160px]"
							/>
							<div className="dark-gradient-text text-center text-2xl font-bold">
								JAPFA ultra chick
							</div>
						</div>
					</div>
				</motion.div>
				{/* description */}
				<motion.p
					className="relative z-10 text-center text-[20px] text-white max-sm:text-[16px]"
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
				>
					Our premium-quality JAPFA Ultra Chic, renowned for its
					superior genetic lineage, enhanced infection resistance,
					impressive body weight gain, and exceptional meat yield,
					offers farmers a highly profitable and sustainable choices.
				</motion.p>
			</div>
		</section>
	);
};

export default PoultryExcellence;
