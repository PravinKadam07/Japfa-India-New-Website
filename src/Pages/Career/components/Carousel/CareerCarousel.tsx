import { useEffect, useState } from 'react';
import {
	fetchCareerTeamTestimonials,
	fetchHomePageTestimonialData,
} from '../../../../utils/fetchFromApi';
import CareerCarouselActiveCard from './CareerCarouselActiveCard';
import './CareerTestimonial.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PrevArrow from '../../../Media/components/PrevArrow';
import NextArrow from '../../../Media/components/NextArrow';

const CareerCarousel = () => {
	// const testimonialData = {
	// 	imageSrc: `${process.env.PUBLIC_URL}/assets/img/career-testimonial-image.webp`,
	// 	description:
	// 		'I am proud to be a part of this remarkable company that fosters a culture of innovation and collaboration. The supportive environment here has allowed me to thrive both personally and professionally.',
	// 	name: 'Soham Sharma',
	// 	dept: 'Feed department',
	// };
	const [autoplay, setAutoplay] = useState(true);

	const [testimonials, setTestimonials] = useState([]);
	useEffect(() => {
		fetchHomePageTestimonialData()
			.then((data: any) => {
				const testimonials = data
					.filter(
						(item: any) =>
							item.acf['testimonial-type'] === 'career',
					)
					.map((item: any, index: number) => {
						const testimonial = {
							id: index,
							imageSrc: item.acf['testimonial-profile-img'],
							description: item.acf['testimonial-statement'],
							name: item.acf['testimonial-name'],
							dept: item.acf['testimonial-designation'],
						};
						return testimonial;
					});
				setTestimonials(testimonials);
			})
			.catch((err) => console.log(err));
	}, []);

	const settings = {
		dots: false,
		infinite: true,
		autoplay: autoplay,
		autoplaySpeed: 4000,
		slidesToShow: 1,
		centerMode: true,
		slidesToScroll: 1,
		swipeToSlide: false,
		variableWidth: true,
		stopOnHover: false,
		arrows: true,
		prevArrow: (
			<PrevArrow
				className="slick-prev"
				align="right"
				customPosition="!-bottom-0"
			/>
		),
		nextArrow: (
			<NextArrow
				className="slick-next"
				align="right"
				customPosition="!-bottom-0"
			/>
		),
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: false,
					centerMode: false,
				},
			},
		],
	};

	return (
		<div className="career-page-carousel">
			<Slider {...settings}>
				{testimonials.map((testimonial, index) => (
					<CareerCarouselActiveCard data={testimonial} key={index} />
				))}
			</Slider>
		</div>
	);
};

export default CareerCarousel;
