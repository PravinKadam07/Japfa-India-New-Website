import React from 'react';
import { fadeLeft, fadeRight } from '../../../utils/scrollAnimations';
import { motion } from 'framer-motion';

const CustomerSupport = () => {
	return (
		<div className="mx-auto max-w-[1160px] py-10 max-mediumScreen:px-14 max-lg:px-8 lg:py-24">
			<div className="flex items-center justify-between gap-5  max-md:items-center max-md:gap-3 max-sm:flex-col">
				<motion.div
					className="w-[61%]	max-w-[529px] max-lg:w-1/2 max-md:max-w-[278px] max-sm:w-full max-sm:max-w-none"
					variants={fadeLeft}
					initial="hidden"
					whileInView="visible"
				>
					<img
						loading="lazy"
						src={`${process.env.PUBLIC_URL}/assets/img/247-customer-support.svg`}
						className="w-full items-center justify-center overflow-hidden object-cover object-center max-md:mt-7"
						alt=""
					/>
				</motion.div>
				<motion.div
					className="my-auto w-[39%] max-w-[566px] text-xl text-black max-md:w-1/2 max-sm:w-full"
					variants={fadeRight}
					initial="hidden"
					whileInView="visible"
				>
					A 24/7 customer support channel by JAPFA India is our
					commitment to our customers, to assist them with any
					questions, concerns, or farm issues. This can include
					support via phone, email, farm visit, or other channels.
					<br />
					<br />
					We have adequate technical service personnel across
					geographies to support our partners in times of disease
					outbreak, to disseminate farming practices and for knowledge
					sharing.
				</motion.div>
			</div>
		</div>
	);
};

export default CustomerSupport;
