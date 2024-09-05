import React from 'react';
import arrowpath from '../../../utils/FoodPageArrowpath';
import { motion } from 'framer-motion';
import { fadeLeft } from '../../../utils/scrollAnimations';
import ArrowLottieAnimation from '../../../Components/HomeArrow1';
import FoodArrow from '../../../Components/FoodArrow';
interface ArrowImageTextSectionProps {
	title: string;
	imageSrc: string;
	orderReverse?: boolean;
	align?: 'left' | 'right';
}

const SvgArrow = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="192"
			height="149"
			viewBox="0 0 192 149"
			fill="none"
		>
			<path d={arrowpath} fill="#C62818" />
		</svg>
	);
};

const ArrowImageTextSection = ({
	title,
	imageSrc,
	orderReverse,
	align,
}: ArrowImageTextSectionProps) => {
	return (
		<div
			className={`my-20 max-w-[1274px] px-14 max-lg:px-8 xl:my-[100px] ${
				align === 'left'
					? 'ml-0 mr-auto'
					: align === 'right'
						? 'ml-auto mr-0'
						: 'mx-auto'
			}`}
		>
			<div className="flex justify-between max-md:flex-col max-md:gap-6">
				<div
					className={`flex w-full max-w-[375px] flex-col md:w-5/12  ${
						orderReverse ? 'items-start md:order-1' : 'items-center'
					}`}
				>
					<motion.h3
						className=" mb-3 text-[40px] font-extrabold text-black lg:text-7xl"
						initial="hidden"
						whileInView="visible"
						variants={fadeLeft}
					>
						{title}
					</motion.h3>
					<div
						className={`max-md:hidden ${
							orderReverse ? '-scale-x-100 transform' : 'mx-auto'
						}`}
					>
						<motion.div
							variants={fadeLeft}
							whileInView={'visible'}
							initial={'hidden'}
						>
							<FoodArrow />
						</motion.div>
					</div>
				</div>
				{/* image */}
				<div className=" w-full md:w-7/12">
					<motion.div
						initial="hidden"
						whileInView="visible"
						variants={fadeLeft}
					>
						<img
							src={imageSrc}
							alt=""
							className={`"w-11/12 object-contain" max-h-[506px] ${
								orderReverse ? 'mr-auto' : 'ml-auto'
							}`}
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default ArrowImageTextSection;
