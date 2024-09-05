import { motion } from 'framer-motion';
import React from 'react';
import ShadowText from '../../../Components/ShadowText';
import { fadeLeft, fadeRight } from '../../../utils/scrollAnimations';

interface ApproachStepDisplayProps {
	imageSrc: string;
	stepCount: string;
	stepTitle: string;
	orderReverse?: boolean;
	imgMaxWidth: string;
	sectionType: string;
}

const ApproachStepDisplay: React.FC<ApproachStepDisplayProps> = ({
	imageSrc,
	stepCount,
	stepTitle,
	orderReverse,
	imgMaxWidth,
	sectionType,
}) => {
	// console.log(`${stepTitle} ${orderReverse}`)
	return (
		<div
			className={`relative mx-auto mb-16 flex max-w-japfaGrid flex-col justify-between gap-[60px] max-mediumScreen:px-8 max-sm:gap-[24px] md:flex-row lg:mb-20 ${orderReverse ? 'max-md:flex-col-reverse' : ''} ${sectionType === 'quality' && 'md:items-center'}`}
		>
			<motion.div
				className={`max-md:mb-20 max-sm:mb-0 md:mb-0 ${
					orderReverse
						? 'order-1 text-end max-md:right-5 max-md:top-5 max-sm:right-auto max-sm:top-auto'
						: ''
				} max-md:absolute max-sm:relative ${sectionType === 'quality' && 'md:-translate-y-14 md:!transform'} ${sectionType === 'tech' && 'md:translate-y-14 md:!transform'}`}
				variants={fadeLeft}
				initial={'hidden'}
				whileInView={'visible'}
			>
				<h1 className="text-[32px] leading-tight md:text-7xl text-[#FF8743]">
					{stepCount}
				</h1>
				<ShadowText
					text={stepTitle}
					classes={`!text-[48px] sm:!text-6xl lg:!text-[72px] xl:!text-[88px] ${orderReverse ? '!text-end' : ''} farmText`}
				/>
			</motion.div>

			<motion.div
				className={` `}
				variants={fadeRight}
				initial={'hidden'}
				whileInView={'visible'}
			>
				<img
					src={imageSrc}
					alt=""
					className={`${sectionType === 'quality' && 'max-w-[800px]'} object-contain  ${orderReverse ? 'max-md:ml-0' : 'max-md:ml-auto'} max-md:mt-10 max-md:w-9/12 max-sm:mt-0 max-sm:w-full md:w-full ${sectionType === 'infra' && 'lg:translate-x-24 lg:scale-125 lg:!transform'}`}
				/>
			</motion.div>
		</div>
	);
};

export default ApproachStepDisplay;
