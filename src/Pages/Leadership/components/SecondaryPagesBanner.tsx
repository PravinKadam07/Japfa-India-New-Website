import { motion } from 'framer-motion';
import React from 'react';
import { fadeLeft, fadeRight } from '../../../utils/scrollAnimations';

interface SecondaryPagesBannerProps {
	data: {
		title?: string;
		subtitle?: string;
		imageSrc: string;
	};
}

const SecondaryPagesBanner = ({
	data: { title, subtitle, imageSrc },
}: SecondaryPagesBannerProps) => {
	return (
		<section
			style={{ height: '100%' }}
			className=" bg-[#160700] py-[60px] ps-8 lg:ps-14 xl:py-[80px] "
		>
			<div className="mx-auto flex justify-between gap-5 max-sm:flex-col max-sm:items-center lg:gap-8">
				<motion.div
					className="my-auto text-5xl font-bold leading-[120%] text-white sm:w-[60%] md:w-[60%] lg:text-[48px] xl:text-[72px] semiMediumScreen:text-[84px]"
					variants={fadeLeft}
					initial="hidden"
					whileInView={'visible'}
				>
					{title && title}

					<div className="inline-block">
						{subtitle}
						
					</div>
				</motion.div>
				<div className="mt-14 text-end max-sm:mt-[23px] max-sm:self-end sm:w-[40%] md:mt-0 md:w-[40%] md:max-w-[262px] lg:max-w-[431px] mediumScreen:max-w-[546px]">
					<motion.img
						src={imageSrc}
						className="ml-auto w-full max-sm:max-h-[350px]"
						alt=""
						variants={fadeRight}
						initial={'hidden'}
						whileInView={'visible'}
					/>
				</div>
			</div>
		</section>
	);
};

export default SecondaryPagesBanner;
