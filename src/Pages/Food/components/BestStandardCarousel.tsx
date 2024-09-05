import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import BestStandardCarouselItem from './BestStandardCarouselItem';
import { fadeUp } from '../../../utils/scrollAnimations';
import { motion } from 'framer-motion';

const BestStandardCarousel = () => {
	const carouselData = [
		{
			imgSrc: `${process.env.PUBLIC_URL}/assets/img/food-carousel-1.webp`,
			title: 'Bio Secure farms',
			description: `State of the art sanitation, animal management, feed management, facility maintenance, manure handling to ensure no cross contamination that's often seen in wet markets`,
		},
		{
			imgSrc: `${process.env.PUBLIC_URL}/assets/img/food-carousel-2.webp`,
			title: 'Temperature-controlled Delivery',
			description: `To preserve the freshness, texture and flavour of every cut and ensuring that our products reach in optimal condition to your table`,
		},
		{
			imgSrc: `${process.env.PUBLIC_URL}/assets/img/food-carousel-3.webp`,
			title: 'High-quality Nutritious Feed',
			description: `We take extra care in providing our chickens with the best, in-house-produced feed. This diet ensures highest quality in our meat products`,
		},
	];
	return (
		<div className="bg-[#CE202F] py-[80px] lg:py-[120px]">
			<div className="mx-auto max-w-japfaGrid max-mediumScreen:px-14 max-md:px-8">
				<motion.h2
					className="mb-[60px] max-w-[1338px] text-7xl  font-extrabold leading-snug text-white max-xl:text-[64px]  max-lg:text-[42px] max-md:text-[36px] max-md:leading-tight max-sm:mb-[40px]"
					initial="hidden"
					whileInView="visible"
					variants={fadeUp}
				>
					Setting the BEST standards for meat in India
				</motion.h2>
				{carouselData.length > 0 && (
					<Carousel
						autoPlay={true}
						infiniteLoop={true}
						interval={2000}
						transitionTime={500}
						showArrows={false}
						showStatus={false}
						showThumbs={false}
						showIndicators={false}
						stopOnHover={false}
						swipeable={false}
						className="relative w-full overflow-visible"
						renderArrowPrev={(onClickHandler, hasPrev, label) => (
							<div
								className="prevSlide absolute bottom-[5%] left-[24px] z-10  cursor-pointer  md:bottom-[20%] md:left-[44%] xl:bottom-[20%]"
								onClick={onClickHandler}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="50"
									height="50"
									viewBox="0 0 50 50"
									fill="none"
									className="rotate-180"
								>
									<rect
										width="50"
										height="50"
										rx="25"
										fill="white"
										fill-opacity="0.2"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M26.3181 16.7366C26.7098 16.3449 27.3449 16.3449 27.7366 16.7366L35.6045 24.6045C35.9962 24.9962 35.9962 25.6312 35.6045 26.0229L27.7366 33.8908C27.3449 34.2825 26.7098 34.2825 26.3181 33.8908C25.9264 33.4991 25.9264 32.864 26.3181 32.4723L32.4737 26.3167L15.1048 26.3167C14.5508 26.3167 14.1018 25.8677 14.1018 25.3137C14.1018 24.7598 14.5508 24.3107 15.1048 24.3107L32.4737 24.3107L26.3181 18.1551C25.9264 17.7634 25.9264 17.1283 26.3181 16.7366Z"
										fill="white"
									/>
								</svg>
							</div>
						)}
						renderArrowNext={(onClickHandler, hasNext, label) => (
							<div
								className="nextSlide absolute bottom-[5%] left-[94px] z-10 cursor-pointer md:bottom-[20%] md:left-[59%] xl:bottom-[20%] xl:left-[54%]"
								onClick={onClickHandler}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="50"
									height="50"
									viewBox="0 0 50 50"
									fill="none"
								>
									<rect
										width="50"
										height="50"
										rx="25"
										fill="white"
										fill-opacity="0.2"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M26.3181 16.7366C26.7098 16.3449 27.3449 16.3449 27.7366 16.7366L35.6045 24.6045C35.9962 24.9962 35.9962 25.6312 35.6045 26.0229L27.7366 33.8908C27.3449 34.2825 26.7098 34.2825 26.3181 33.8908C25.9264 33.4991 25.9264 32.864 26.3181 32.4723L32.4737 26.3167L15.1048 26.3167C14.5508 26.3167 14.1018 25.8677 14.1018 25.3137C14.1018 24.7598 14.5508 24.3107 15.1048 24.3107L32.4737 24.3107L26.3181 18.1551C25.9264 17.7634 25.9264 17.1283 26.3181 16.7366Z"
										fill="white"
									/>
								</svg>
							</div>
						)}
					>
						{carouselData.map((item, index) => (
							<BestStandardCarouselItem
								key={index}
								imgSrc={item.imgSrc}
								title={item.title}
								description={item.description}
							/>
						))}
					</Carousel>
				)}
			</div>
		</div>
	);
};

export default BestStandardCarousel;
