import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import {
	fetchCareerLifeAtJapfa,
	modifyPath,
} from '../../../utils/fetchFromApi';

const LifeAtJapfaGallery = () => {
	// const imagesForGallery = [
	// 	'/assets/img/career-slider-11.webp',
	// 	'/assets/img/career-slider-12.webp',
	// 	'/assets/img/career-slider-13.webp',
	// 	'/assets/img/career-slider-14.webp',
	// 	'/assets/img/career-slider-15.webp',
	// ];
	// const imagesForGallery2 = [
	// 	'/assets/img/career-slider-21.webp',
	// 	'/assets/img/career-slider-22.webp',
	// 	'/assets/img/career-slider-23.webp',
	// 	'/assets/img/career-slider-24.webp',
	// 	'/assets/img/career-slider-25.webp',
	// 	'/assets/img/career-slider-26.webp',
	// ];
	const [imagesForGallery, setImagesForGallery] = useState([]);

	useEffect(() => {
		fetchCareerLifeAtJapfa()
			.then((data) => {
				setImagesForGallery(
					data.map((item: any, index: number) => item.acf.image),
				);
				// console.log(imagesForGallery);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<div className="mt-24 lg:mt-[120px]">
			<Marquee
				speed={60}
				pauseOnClick={true}
				className="my-3 h-80 overflow-hidden max-md:h-60"
			>
				{imagesForGallery.map(
					(item, index) =>
						index <= imagesForGallery.length / 2 && (
							<img
								key={index}
								src={`${modifyPath(item)}`}
								alt=""
								className="mx-2 h-full rounded-[12px] object-cover"
							/>
						),
				)}
			</Marquee>
			<Marquee
				speed={80}
				pauseOnClick={true}
				className="my-3 h-80 overflow-hidden max-md:h-60"
			>
				{imagesForGallery.map(
					(item, index) =>
						index > imagesForGallery.length / 2 && (
							<img
								key={index}
								src={`${modifyPath(item)}`}
								alt=""
								className="mx-2 h-full rounded-[12px] object-cover"
							/>
						),
				)}
			</Marquee>
		</div>
	);
};

export default LifeAtJapfaGallery;
