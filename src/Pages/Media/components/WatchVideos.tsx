import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';
import SliderCard from './SliderCard';
import { fetchMediaVideos } from '../../../utils/fetchFromApi';
import { motion } from 'framer-motion';
import { fadeLeft } from '../../../utils/scrollAnimations';

const WatchVideos = () => {
	// const sliderCardData = [
	// 	{
	// 		id: 1,
	// 		subtitle: 'Poultry Feed Nutrition, Breeding and Poultry Health',
	// 		date: 'January 12, 2023',
	// 		imageSrc: `${process.env.PUBLIC_URL}/assets/img/media-slider-img.webp`,
	// 	},
	// 	{
	// 		id: 2,
	// 		subtitle: 'Poultry Feed Nutrition, Breeding and Poultry Health',
	// 		date: 'January 12, 2023',
	// 		imageSrc: `${process.env.PUBLIC_URL}/assets/img/media-slider-img.webp`,
	// 	},
	// 	{
	// 		id: 3,
	// 		subtitle: 'Poultry Feed Nutrition, Breeding and Poultry Health',
	// 		date: 'January 12, 2023',
	// 		imageSrc: `${process.env.PUBLIC_URL}/assets/img/media-slider-img.webp`,
	// 	},
	// 	{
	// 		id: 4,
	// 		subtitle: 'Poultry Feed Nutrition, Breeding and Poultry Health',
	// 		date: 'January 12, 2023',
	// 		imageSrc: `${process.env.PUBLIC_URL}/assets/img/media-slider-img.webp`,
	// 	},
	// 	{
	// 		id: 5,
	// 		subtitle: 'Poultry Feed Nutrition, Breeding and Poultry Health',
	// 		date: 'January 12, 2023',
	// 		imageSrc: `${process.env.PUBLIC_URL}/assets/img/media-slider-img.webp`,
	// 	},
	// 	{
	// 		id: 6,
	// 		subtitle: 'Poultry Feed Nutrition, Breeding and Poultry Health',
	// 		date: 'January 12, 2023',
	// 		imageSrc: `${process.env.PUBLIC_URL}/assets/img/media-slider-img.webp`,
	// 	},
	// 	{
	// 		id: 7,
	// 		subtitle: 'Poultry Feed Nutrition, Breeding and Poultry Health',
	// 		date: 'January 12, 2023',
	// 		imageSrc: `${process.env.PUBLIC_URL}/assets/img/media-slider-img.webp`,
	// 	},
	// 	{
	// 		id: 8,
	// 		subtitle: 'Poultry Feed Nutrition, Breeding and Poultry Health',
	// 		date: 'January 12, 2023',
	// 		imageSrc: `${process.env.PUBLIC_URL}/assets/img/media-slider-img.webp`,
	// 	},
	// ];

	const [sliderCardData, setSliderCardData] = useState([]);
	useEffect(() => {
		fetchMediaVideos()
			.then((data) => {
				setSliderCardData(data.map((item: any) => item.acf));
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
		prevArrow: <PrevArrow className="slick-prev" align="right" />,
		nextArrow: <NextArrow className="slick-next" align="right" />,
	};

	// const videos_url = [
	// 	"https://www.youtube.com/watch?v=aB94-bWXy4E",
	// 	"https://www.youtube.com/watch?v=Ab2pq14XSCs",
	// 	"https://www.youtube.com/watch?v=SH-neMsxlKE",
	// 	"https://www.youtube.com/watch?v=AzxJZ5SzJYo"
	// ]

	return (
		<div className="mx-auto mt-14 max-w-japfaGrid  max-mediumScreen:px-14 max-lg:px-8">
			<motion.h1
				className="mr-10 border-b-2 border-[#DEDEDE] pb-10 text-[40px] font-extrabold"
				variants={fadeLeft}
				initial={'hidden'}
				whileInView={'visible'}
			>
				Videos
			</motion.h1>
			<motion.div
				className="mt-12"
				variants={fadeLeft}
				initial={'hidden'}
				whileInView={'visible'}
			>
				{sliderCardData ? (
					<Slider {...settings}>
						{sliderCardData.map((d, index) => (
							<SliderCard data={d} key={index} />
						))}
					</Slider>
				) : null}
			</motion.div>
		</div>
	);
};

export default WatchVideos;
