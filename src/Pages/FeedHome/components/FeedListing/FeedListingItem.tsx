import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fadeLeft } from '../../../../utils/scrollAnimations';
import { motion } from 'framer-motion';
import navigateArrow from '../../../../assets/navigateArrow.svg';
interface Props {
	id: number;
	title: string;
	cardClass: string;
}
const FeedListingItem = ({ id, title, cardClass }: Props) => {
	const navigate = useNavigate();
	const [isHovered, setIsHovered] = useState(false);
	const handleCardClick = (path: any) => {
		console.log('path', path);
		// navigate to /title
		navigate(`/${path}`);
	};
	return (
		<motion.div
			className="feed-card-wrapper-parent relative col-span-4 flex  w-full items-end sm:col-span-2 lg:col-span-1"
			variants={fadeLeft}
			initial="hidden"
			whileInView="visible"
		>
			<div
				className="feed-card-wrapper flex flex-grow cursor-pointer flex-col max-md:ml-0 "
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				onClick={() => handleCardClick(`${title.toLowerCase()}`)}
			>
				<div
					className={`show-on-hover absolute left-0 top-0 h-full w-full bg-black ${
						isHovered ? 'opacity-70' : 'opacity-0'
					}`}
				></div>
				<div
					className={`${cardClass} feed-card flex w-full flex-col items-start justify-end p-8 pb-10 pl-6 pr-14`}
				>
					<div className="">
						<div className="feed-card-title-group flex flex-col-reverse items-end">
							<h3 className="z-10 text-xl font-extrabold leading-none text-[#f84]">
								Feed
							</h3>
							<h2 className="shadow-title-wrapper black-text  mb-[10px] text-5xl font-extrabold xl:text-[64px]">
								<div className="original-text text-white">
									{title}
								</div>
								<div
									className="shadow-text"
									style={{
										WebkitTextStrokeColor: 'white',
										WebkitTextStrokeWidth: '0.5px',
										left: '4px',
										top: '3px',
									}}
								>
									{title}
								</div>
							</h2>
						</div>
						<div
							className={`show-on-hover relative z-10 text-base text-white ${
								isHovered
									? 'visible opacity-100'
									: 'invisible opacity-0'
							}`}
						>
							Click to learn more
						</div>
					</div>
				</div>
			</div>
			<div
				className={`feed-card-arrow absolute bottom-3 right-0 z-10 block w-[64px] cursor-pointer md:w-[72px]`}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				onClick={() => handleCardClick(`${title.toLowerCase()}`)}
			>
				{/* <img
					src={`${process.env.PUBLIC_URL}/assets/img/listing-arrow.svg`}
					alt=""
					className="w-full"
				/> */}
				<img src={navigateArrow} />
				{/* <svg
					xmlns="http://www.w3.org/2000/svg"
					width="80"
					height="80"
					viewBox="0 0 80 80"
					fill="none"
				>
					<circle
						cx="39.8418"
						cy="39.8398"
						r="38.2018"
						fill="white"
						stroke="white"
						stroke-width="2.4036"
					/>
					<circle
						cx="40"
						cy="40"
						r="32"
						fill="url(#paint0_linear_6278_4505)"
					/>
					<path
						d="M33.2057 34.2867L33.3219 32.7293C33.371 32.0699 33.9428 31.5901 34.597 31.6594L48.201 33.0221C48.859 33.0882 49.3512 33.6747 49.2988 34.3303L48.2817 47.9682C48.2325 48.6276 47.6608 49.1074 47.0066 49.0381L45.4527 48.8821C44.7877 48.8153 44.2933 48.2108 44.357 47.5458L45.172 39.3122L34.3617 48.3831C33.8615 48.8029 33.1125 48.7277 32.6818 48.2144L31.6456 46.9795C31.2149 46.4662 31.2709 45.7156 31.7712 45.2958L42.5814 36.2249L34.3315 35.5978C33.6617 35.5482 33.1522 34.9563 33.2057 34.2867Z"
						fill="white"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_6278_4505"
							x1="72.0081"
							y1="72"
							x2="8.00811"
							y2="7.9919"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#FF2525" />
							<stop offset="1" stop-color="#FF8743" />
						</linearGradient>
					</defs>
				</svg> */}
			</div>
		</motion.div>
	);
};

export default FeedListingItem;
