import { motion } from 'framer-motion';
import React from 'react';
import ReactPageScroller from 'react-page-scroller';
import { fadeLeft, fadeRight } from '../../../utils/scrollAnimations';
import { modifyPath } from '../../../utils/fetchFromApi';
interface AchievementTimelineSlideProps {
	slideData: {
		month: string;
		year: string;
		title?: string;
		description?: string;
		thumbnail: any;
	}[];
}
interface SlideCardProps {
	month: string;
	year: string;
	title?: string;
	description?: string;
	imageSrc: string;
}

const SlideCard: React.FC<SlideCardProps> = ({
	month,
	year,
	title,
	description,
	imageSrc,
}) => {
	return (
		<div className="slide-card flex h-full w-full">
			<div className="flex w-full items-start max-tabletMedium:flex-col md:gap-5 tabletMedium:my-auto tabletMedium:items-center lg:justify-between xl:gap-16">
				<div className="flex flex-col max-lg:max-w-[480px] lg:max-w-[380px] xl:max-w-[420px]">
					<div className="text-2xl font-extrabold text-[#EC691F] max-tabletMedium:text-[24px]">
						{month}
					</div>
					<div className="max-w-[255px] text-[88px] font-extrabold leading-tight text-black max-tabletMedium:mb-1 max-tabletMedium:text-[72px]">
						{year}
					</div>
					{/* title */}
					{title && (
						<div className="text-[32px] font-extrabold leading-tight text-black max-tabletMedium:text-[24px] tabletMedium:mb-[24px] lg:mb-1 lg:mt-[16px]">
							{title}
						</div>
					)}
					{/* description */}
					{description && (
						<div className="text-xl font-normal text-black max-sm:text-[16px] lg:text-[20px]">
							{description}
						</div>
					)}
				</div>
				{/* image */}
				<div className="w-full max-tabletMedium:mt-[24px] max-tabletMedium:max-h-[364px] lg:max-w-[520px] 2xl:max-w-[684px]">
					<img
						src={modifyPath(imageSrc)}
						alt={title}
						className="w-full rounded-[40px_0_0_0] max-tabletMedium:h-full max-tabletMedium:object-cover max-tabletMedium:object-center md:rounded-[60px_0_0_0]"
					/>
				</div>
			</div>
		</div>
	);
};

const AchievementTimelineSlide = ({
	slideData,
}: AchievementTimelineSlideProps) => {
	const years = [
		'1995',
		'1999',
		'2004',
		'2005',
		'2006',
		'2015',
		'2016',
		'2018',
		'2019',
		'2020',
	];

	const [currentPage, setcurrentPage] = React.useState(0);

	const handlePageChange = (number: number) => {
		setcurrentPage(number);
	};

	const handleBeforePageChange = (number: number) => {
		setcurrentPage(number);
		// console.log(number);
	};
	return (
		<div
			className="timeline-slide-wrapper mx-auto flex max-w-japfaGrid scroll-m-20 max-mediumScreen:px-14 max-lg:px-8 max-lg:pl-10 max-tabletMedium:my-[60px] max-tabletMedium:gap-20 max-sm:gap-10 tabletMedium:items-center xl:justify-between xl:gap-[120px]"
			style={{ height: '100vh' }}
		>
			<motion.ul
				className="flex list-none flex-col items-center gap-7"
				variants={fadeLeft}
				initial={'hidden'}
				whileInView={'visible'}
			>
				{years.map((item: string, index: number) => (
					<li
						key={index}
						onClick={() => handlePageChange(index)}
						className={`timelineItem cursor-pointer text-2xl  font-normal text-[#807B78] ${
							currentPage === index ? 'timelineActiveItem' : ''
						}`}
					>
						{item}
					</li>
				))}
			</motion.ul>
			{/* timeline slide card */}
			<motion.div
				className="timelineslideFetch flex h-full w-full items-center"
				variants={fadeRight}
				initial={'hidden'}
				whileInView={'visible'}
			>
				<ReactPageScroller
					pageOnChange={handlePageChange}
					onBeforePageScroll={handleBeforePageChange}
					customPageNumber={currentPage}
					containerHeight={'100%'}
					containerWidth={'100%'}
					animationTimer={500}
					blockScrollDown={true}
					blockScrollUp={true}
				>
					<SlideCard
						title={slideData[0].title && slideData[0].title}
						imageSrc={slideData[0].thumbnail.sizes['medium_large']}
						month={slideData[0].month}
						year={slideData[0].year}
						description={slideData[0].description}
					/>
					<SlideCard
						title={slideData[1].title && slideData[1].title}
						imageSrc={slideData[1].thumbnail.sizes['medium_large']}
						month={slideData[1].month}
						year={slideData[1].year}
						description={slideData[1].description}
					/>
					<SlideCard
						title={slideData[2].title && slideData[2].title}
						imageSrc={slideData[2].thumbnail.sizes['medium_large']}
						month={slideData[2].month}
						year={slideData[2].year}
						description={slideData[2].description}
					/>
					<SlideCard
						title={slideData[3].title && slideData[3].title}
						imageSrc={slideData[3].thumbnail.sizes['medium_large']}
						month={slideData[3].month}
						year={slideData[3].year}
						description={slideData[3].description}
					/>
					<SlideCard
						title={slideData[4].title && slideData[4].title}
						imageSrc={slideData[4].thumbnail.sizes['medium_large']}
						month={slideData[4].month}
						year={slideData[4].year}
						description={slideData[4].description}
					/>
					<SlideCard
						title={slideData[5].title && slideData[5].title}
						imageSrc={slideData[5].thumbnail.sizes['medium_large']}
						month={slideData[5].month}
						year={slideData[5].year}
						description={slideData[5].description}
					/>
					<SlideCard
						title={slideData[6].title && slideData[6].title}
						imageSrc={slideData[6].thumbnail.sizes['medium_large']}
						month={slideData[6].month}
						year={slideData[6].year}
						description={slideData[6].description}
					/>
					<SlideCard
						title={slideData[7].title && slideData[7].title}
						imageSrc={slideData[7].thumbnail.sizes['medium_large']}
						month={slideData[7].month}
						year={slideData[7].year}
						description={slideData[7].description}
					/>
					<SlideCard
						title={slideData[8].title && slideData[8].title}
						imageSrc={slideData[8].thumbnail.sizes['medium_large']}
						month={slideData[8].month}
						year={slideData[8].year}
						description={slideData[8].description}
					/>
					<SlideCard
						title={slideData[9].title && slideData[9].title}
						imageSrc={slideData[9].thumbnail.sizes['medium_large']}
						month={slideData[9].month}
						year={slideData[9].year}
						description={slideData[9].description}
					/>
				</ReactPageScroller>
			</motion.div>
		</div>
	);
};

export default AchievementTimelineSlide;
