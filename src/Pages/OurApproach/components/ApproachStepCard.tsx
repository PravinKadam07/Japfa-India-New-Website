import { motion } from 'framer-motion';
import { forwardRef, useState } from 'react';
import { fadeLeft, fadeUp } from '../../../utils/scrollAnimations';

interface ApproachStepCardProps {
	title: string;
	description?: string;
	imageSrc?: string;
	index: number;
}

const ApproachStepCard = forwardRef<HTMLDivElement, ApproachStepCardProps>(
	({ title, description, imageSrc, index }, ref) => {
		return (
			<div
				className={`approach-step-card col-span-1 w-full overflow-hidden rounded-[20px] step-card-${index} mb-10`}
				// @ts-expect-error
				style={{'--index': `${index}px`}}
				ref={ref}
			>
				<div
					className={`approach-step-card--inner flex justify-between gap-20 p-10 text-white max-lg:flex-col md:px-10`}
				>
					<motion.div
						className={` flex max-w-[680px] flex-col justify-start `}
						variants={fadeLeft}
						initial={'hidden'}
						whileInView={'visible'}
					>
						<h1
							className={` ${
								description && imageSrc && 'mb-[24px]'
							} text-4xl font-[800] leading-normal md:text-[40px]`}
						>
							{title}
						</h1>
						{description && (
							<p className="text-xl font-[400] md:text-[20px]">
								{description}
							</p>
						)}
					</motion.div>
					{imageSrc && (
						<div className="">
							<motion.img
								variants={fadeLeft}
								initial="hidden"
								whileInView={'visible'}
								transition={{
									duration: 0.8,
								}}

								src={imageSrc}
								alt={title}
								className="w-full min-w-[427px] max-w-[548px] rounded-[8px] max-sm:min-w-0"
							/>
						</div>
					)}
				</div>
			</div>
		);
	},
);

export default ApproachStepCard;
