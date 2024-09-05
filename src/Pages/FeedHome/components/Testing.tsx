import React from 'react';
import CustomParagraph from '../../Farm/CustomParagraph';
import { fadeLeft, fadeRight, fadeUp } from '../../../utils/scrollAnimations';
import { motion } from 'framer-motion';

interface TestingProps {
	data: {
		mainTitle: string;
		mainDescription: string;
		leftColumnImage: string;
		rightColumnImage?: string;
		leftColumnText: string;
		rightColumnText: string | string[];
	};
}

const Testing: React.FC<TestingProps> = ({
	data: {
		mainTitle,
		mainDescription,
		leftColumnImage,
		leftColumnText,
		rightColumnImage,
		rightColumnText,
	},
}) => {
	return (
		<section className="semiMediumScreen:py-[52px] mt-32 bg-stone-950 py-20 md:py-[100px]">
			<div className="mx-auto max-w-[1156px] max-mediumScreen:px-14 max-lg:px-8 max-md:max-w-full">
				<div className="flex w-full flex-col items-start self-center">
					{mainTitle && (
						<motion.h1
							className="text-7xl font-extrabold leading-snug text-white  max-md:text-[36px] max-md:leading-tight"
							variants={fadeUp}
							initial="hidden"
							whileInView="visible"
						>
							{mainTitle}
						</motion.h1>
					)}
					{mainDescription && (
						<motion.p
							className="my-6 text-xl leading-[160%] text-white max-md:text-[16px] max-sm:my-[24px]"
							variants={fadeUp}
							initial="hidden"
							whileInView="visible"
						>
							{mainDescription}
						</motion.p>
					)}
				</div>
				<div className="w-100 h-[1px] bg-white"></div>
				<div className="mt-[40px] w-full self-center">
					<div className="max-md: flex gap-6 max-md:flex-col max-md:gap-0">
						<motion.div
							className="mb-8 flex  w-6/12 flex-col max-md:ml-0 max-md:w-full md:mb-0"
							variants={fadeLeft}
							initial="hidden"
							whileInView="visible"
						>
							<img
								loading="lazy"
								src={`${process.env.PUBLIC_URL}${leftColumnImage}`}
								className="grow object-cover"
								alt=""
							/>
							<h2 className="w-full self-center bg-custom-gradient py-10 text-center text-4xl font-extrabold text-white">
								{leftColumnText}
							</h2>
						</motion.div>
						<motion.div
							className="mb-8 flex w-6/12 flex-col max-md:w-full md:mb-0"
							variants={fadeRight}
							initial="hidden"
							whileInView="visible"
						>
							<div className="flex flex-col items-center justify-center self-stretch bg-red-950 max-md:max-w-full">
								<img
									loading="lazy"
									src={`${process.env.PUBLIC_URL}${rightColumnImage}`}
									className=""
									alt=""
								/>
							</div>
							<div
								className={`${
									rightColumnImage ? 'mt-7' : ''
								} flex grow flex-col items-start self-stretch bg-red-950 p-9 max-md:max-w-full`}
							>
								{typeof rightColumnText === 'string' ? (
									<CustomParagraph
										text={rightColumnText}
										classes="text-white text-xl"
									/>
								) : (
									<div className="custom-bullets">
										<ul>
											{rightColumnText.map(
												(item, index) => (
													<li
														key={index}
														className="text-base leading-[150%] text-white"
													>
														{item}
													</li>
												),
											)}
										</ul>
									</div>
								)}
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testing;
