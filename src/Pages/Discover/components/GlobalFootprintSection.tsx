import { motion } from 'framer-motion';
import { fadeLeft } from '../../../utils/scrollAnimations';
import {
	fetchDiscoverGlobalFootprints,
	modifyPath,
} from '../../../utils/fetchFromApi';
import '../Discover.css';
import { useEffect, useState } from 'react';

const GlobalFootprintSection = () => {
	const [mobileImage, setMobileImage] = useState('');
	const [desktopImage, setDesktopImage] = useState('');

	useEffect(() => {
		fetchDiscoverGlobalFootprints()
			.then((data) => {
				setMobileImage(data[0].acf['mobile-image']);
				setDesktopImage(data[0].acf['banner']);
			})
			.catch((error) => console.log(error));
	}, []);
	return (
		<motion.div
			className="mx-auto max-w-japfaGrid max-mediumScreen:px-14 max-lg:px-8"
			variants={fadeLeft}
			initial={'hidden'}
			whileInView={'visible'}
		>
			<picture className="w-full">
				<source
					srcSet={`${modifyPath(mobileImage)}`}
					type="image/webp"
					media="(max-width: 767px)"
				/>
				<img
					loading="lazy"
					src={`${modifyPath(desktopImage)}`}
					alt=""
					className="w-full"
				/>
			</picture>
		</motion.div>
	);
};

export default GlobalFootprintSection;
