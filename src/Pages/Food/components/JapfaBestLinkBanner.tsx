import React from 'react';
import '../Food.css';
import { motion } from 'framer-motion';
import { fadeLeft, zoomIn } from '../../../utils/scrollAnimations';
const JapfaBestLinkBanner = () => {
	return (
		<div className="mx-auto my-24 max-w-japfaGrid max-mediumScreen:px-14 max-lg:px-8 xl:my-[100px]">
			<div
				className="japfaBestLinkbanner rounded-[20px] p-11"
				style={{
					backgroundSize: 'cover',
					backgroundPosition: 'center center',
				}}
			>
				<div className="flex items-center justify-center gap-24 max-md:flex-col">
					<div className="flex flex-col">
						<div className="explore-text-icon relative mb-2 text-[24px] sm:text-[32px] md:text-[40px] font-light text-white">
							Explore
						</div>
						<div className="">
							<motion.a
								href="https://japfabest.in/home"
								target="_blank"
								rel="noreferrer"
								className="w-fit text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white"
								initial="hidden"
								whileInView="visible"
								variants={fadeLeft}
							>
								JAPFABEST.in
							</motion.a>
						</div>
					</div>
					<div className="">
						<motion.img
							src={`${process.env.PUBLIC_URL}/assets/img/japfa-best-link-qr.svg`}
							alt=""
							initial="hidden"
							whileInView="visible"
							variants={zoomIn}
							className='max-md:max-w-[300px] w-full'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JapfaBestLinkBanner;
