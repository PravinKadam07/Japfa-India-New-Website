import React from 'react';
import '../FeedHome.css';
import { fadeLeft, fadeRight, fadeUp } from '../../../utils/scrollAnimations';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const GetInTouch = () => {
	const navigate = useNavigate();
	const navigateTo = (path: string) => {
		navigate(path);
		window.scrollTo(0, 0);
	};
	return (
		<div className="border-t border-solid bg-white sm:border-t-[color:var(--text-and-divider-text-secondary,#807B78)]">
			<div className="mx-auto my-20 w-full max-w-[1160px] max-mediumScreen:px-8 max-md:my-10 max-md:max-w-full">
				<div className="flex justify-between gap-5 max-md:gap-0 max-sm:flex-col">
					<motion.div
						className="w-[61%] max-w-[684px] text-7xl font-extrabold max-md:w-1/2 max-md:text-[40px] max-sm:mb-3 max-sm:w-full"
						variants={fadeLeft}
						initial="hidden"
						whileInView="visible"
					>
						Get in touch to know more
					</motion.div>
					<motion.div
						className="flex w-[39%] max-w-[566px] grow flex-col items-start max-md:w-1/2 max-sm:w-full"
						variants={fadeRight}
						initial="hidden"
						whileInView="visible"
					>
						<div className=" text-xl leading-[160%] max-md:text-[16px]">
							We are ready to address any specific questions or
							inquiries you may have, and we will respond
							promptly.
						</div>
						<motion.button
							className="mt-8 flex w-[140px]  max-w-full flex-col items-center justify-center whitespace-nowrap bg-orange-500 py-6 text-base leading-[150%] text-white max-sm:w-full"
							variants={fadeUp}
							initial="hidden"
							whileInView="visible"
							onClick={() => navigateTo('/contactus')}
						>
							Enquire now
						</motion.button>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default GetInTouch;
