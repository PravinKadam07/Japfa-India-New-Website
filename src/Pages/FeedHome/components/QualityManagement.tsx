import React from 'react';
import { motion } from 'framer-motion';
import { fade, fadeUp } from '../../../utils/scrollAnimations';
import FeedArrow1 from '../../../Components/FeedArrow1';
import FeedArrow2 from '../../../Components/FeedArrow2';

const QualityManagement = () => {
	return (
		<section className="mx-auto mb-52 mt-24 max-w-japfaGrid max-mediumScreen:px-14 max-lg:px-8 max-md:mb-20 max-sm:mb-10">
			<div className="flex flex-col items-center gap-16">
				<motion.div
					className="mt-24 max-w-[400px] md:max-w-[768px] lg:max-w-[550px] xl:max-w-[768px]"
					variants={fade}
					initial="hidden"
					whileInView="visible"
				>
					<img
						src={`${process.env.PUBLIC_URL}/assets/img/japfa-quality-title.svg`}
						alt=""
					/>
				</motion.div>
				<motion.div
					className="relative hidden w-full lg:block"
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
				>
					<motion.picture
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
					>
						<img
							src={`${process.env.PUBLIC_URL}/assets/img/raw-material-receiving.webp`}
							alt="Raw material receiving"
							className="raw-material-img1 lg:min-w-[445px]"
						/>
						{/* <img
							src={`${process.env.PUBLIC_URL}/assets/img/raw-material-receiving-arrow.svg`}
							alt="arrow"
						/> */}
						<div className="raw-material-arrow1 absolute">
							<FeedArrow1 />
						</div>
					</motion.picture>

					<motion.picture
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
					>
						<img
							src={`${process.env.PUBLIC_URL}/assets/img/feed-mill-process-control.webp`}
							alt="Raw material receiving"
							className="raw-material-img2 ml-auto mt-[-30%] lg:min-w-[445px]"
						/>
						{/* <img
							src={`${process.env.PUBLIC_URL}/assets/img/feed-mill-process-control-arrow.svg`}
							alt="arrow"
							/> */}
						<div className="raw-material-arrow2 absolute">
							<FeedArrow2 />
						</div>
					</motion.picture>

					<motion.picture
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
					>
						<img
							src={`${process.env.PUBLIC_URL}/assets/img/laboratory-testing.webp`}
							alt="Raw material receiving"
							className="raw-material-img3 mx-auto lg:w-[84%]"
						/>
					</motion.picture>
				</motion.div>
				<motion.div
					className="w-full  lg:hidden "
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
				>
					<motion.picture
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
					>
						<img
							src={`${process.env.PUBLIC_URL}/assets/img/raw-material-receiving-mobile-2.png`}
							alt="Raw material receiving"
							className="mx-auto mb-5"
						/>
					</motion.picture>

					<motion.picture
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
					>
						<img
							src={`${process.env.PUBLIC_URL}/assets/img/raw-material-receiving-mobile.png`}
							alt="Raw material receiving"
							className="mx-auto mb-5"
						/>
					</motion.picture>

					<motion.picture
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
					>
						<img
							src={`${process.env.PUBLIC_URL}/assets/img/laboratory-testing-mobile.png`}
							alt="Raw material receiving"
							className="mx-auto"
						/>
					</motion.picture>
				</motion.div>
			</div>
		</section>
	);
};

export default QualityManagement;
