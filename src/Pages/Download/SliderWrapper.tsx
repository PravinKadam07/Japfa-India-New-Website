import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import PrevArrow from '../Media/components/PrevArrow';
import NextArrow from '../Media/components/NextArrow';
import { fetchNewsletters, modifyPath } from '../../utils/fetchFromApi';
import { motion } from 'framer-motion';
import { fadeLeft } from '../../utils/scrollAnimations';

const SliderWrapper = () => {
	const [sliderCardData, setSliderCardData] = useState([]);
	useEffect(() => {
		fetchNewsletters()
			.then((data) => {
				const onlyAcfObjects = data.map((item: any) => item.acf);
				const sortedData = onlyAcfObjects.sort(
					(a: any, b: any) => b.edition - a.edition,
				);
				setSliderCardData(sortedData);
			})
			.catch((error) => console.log(error));
	}, []);
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
		],
		slidesToScroll: 1,
		prevArrow: (
			<PrevArrow
				className="slick-prev"
				align="right"
				customPosition="!-bottom-24 md:-bottom-16"
			/>
		),
		nextArrow: (
			<NextArrow
				className="slick-next"
				align="right"
				customPosition="!-bottom-24 md:-bottom-16"
			/>
		),
	};

	return (
		<div className=" downloads-slider mx-auto max-w-japfaGrid py-[80px] max-mediumScreen:px-14 max-lg:px-8 max-sm:pb-[120px] lg:py-[120px]">
			<motion.h1
				className="mb-[40px] text-center text-5xl font-extrabold sm:mb-[60px] lg:mb-20 lg:text-7xl"
				variants={fadeLeft}
				initial={'hidden'}
				whileInView={'visible'}
			>
				Newsletters
			</motion.h1>
			<Slider {...settings}>
				{sliderCardData.map((item) => (
					<div
						className="relative aspect-[9/12] h-full max-h-[540px] w-full cursor-pointer"
						onClick={() => window.open(item['file'], '_blank')}
					>
						<img
							// @ts-ignore
							src={`${modifyPath(item['thumbnail_image'].toString().replace('13.200.190.169', 'japfaindia.in'))}`}
							alt=""
							className="h-full w-full object-cover"
						/>
						<div className="absolute inset-0 flex h-full items-center justify-center bg-black bg-opacity-75 text-white opacity-0 transition-opacity hover:opacity-100">
							Click to learn more
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default SliderWrapper;
