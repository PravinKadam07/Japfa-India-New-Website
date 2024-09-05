import React from 'react';
import ShadowText from '../../Components/ShadowText';
import CustomParagraph from './CustomParagraph';
import { fadeLeft, fadeRight, zoomIn } from '../../utils/scrollAnimations';
import { motion } from 'framer-motion';

interface BigTitleImageSectionProps {
	title?: string;
	shadowTitle?: string;
	subTitle?: string;
	image?: string;
	strongTitle?: string;
	dividerAfterText?: boolean;
	dividerBeforeText?: boolean;
	reverseOrder?: boolean;
	longText?: string;
	lessSectionSpacing?: boolean;
}

const BigTitleImageSection: React.FC<BigTitleImageSectionProps> = ({
	title,
	subTitle,
	shadowTitle,
	image,
	dividerAfterText,
	dividerBeforeText,
	reverseOrder,
	longText,
	strongTitle,
	lessSectionSpacing,
}) => {
	return (
		<section
			className={`"mx-auto ${
				lessSectionSpacing
					? 'my-[80px] max-md:my-[40px]'
					: 'my-36 max-md:my-[80px]'
			}`}
		>
			<div className="flex flex-col items-center justify-between sm:flex-row sm:gap-[9%]">
				<div
					className={`flex max-w-[566px] flex-col text-xl max-mediumScreen:px-14 max-lg:px-8 max-sm:w-full sm:w-1/2 lg:w-[50%] ${
						reverseOrder
							? 'order-1 mediumScreen:mr-[calc((100vw-1352px)/2)]'
							: 'mediumScreen:ml-[calc((100vw-1352px)/2)]'
					}`}
				>
					{title && (
						<motion.div
							className="text-3xl font-extrabold uppercase text-[#EC691F] xl:text-7xl"
							variants={fadeLeft}
							initial={'hidden'}
							whileInView={'visible'}
						>
							{title}
						</motion.div>
					)}
					{shadowTitle && (
						<motion.div
							variants={fadeLeft}
							initial="hidden"
							whileInView="visible"
						>
							<ShadowText
								text={shadowTitle}
								classes="xl:!text-[140px] semiMediumScreen:text-[200px] feedText"
							/>
						</motion.div>
					)}
					{strongTitle && (
						<motion.h3
							className="mb-10 text-4xl font-extrabold leading-tight max-sm:text-[40px] xl:text-7xl"
							variants={fadeLeft}
							initial={'hidden'}
							whileInView={'visible'}
						>
							{strongTitle}
						</motion.h3>
					)}
					{dividerBeforeText && (
						<div className="my-10 h-[2px] w-24 bg-black"></div>
					)}
					{longText && (
						<motion.div
							variants={fadeLeft}
							initial="hidden"
							whileInView="visible"
						>
							<CustomParagraph text={longText} />
						</motion.div>
					)}
					{subTitle ? (
						<motion.div
							className="mt-8 text-2xl lg:text-4xl"
							variants={fadeLeft}
							initial={'hidden'}
							whileInView={'visible'}
						>
							{subTitle}
						</motion.div>
					) : null}
					{dividerAfterText && (
						<div className="my-10 h-[2px] w-24 bg-black"></div>
					)}
				</div>
				{/* image */}
				<div className="mediumScreeen:max-w-[calc(100vw/2)] sm:w-[42%]">
					<motion.img
						src={`${process.env.PUBLIC_URL}${image}`}
						alt=""
						className="w-full"
						variants={fadeRight}
						initial="hidden"
						whileInView="visible"
					></motion.img>
				</div>
			</div>
		</section>
	);
};

export default BigTitleImageSection;
