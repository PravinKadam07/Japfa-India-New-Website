import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { fetchDiscoverTrailblazers } from '../../../utils/fetchFromApi';
import TransformationItemsGrid from './TransformationItemsGrid';

const TransformationSection = () => {
	const [transformationItems, setTransformationItems] = React.useState([]);
	useEffect(() => {
		fetchDiscoverTrailblazers()
			.then((data) => {
				setTransformationItems(
					data.map((item: any, index: number) => ({
						id: index,
						figure: item.acf.value,
						description: item.acf.name,
					})),
				);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className="mx-auto max-w-japfaGrid  max-mediumScreen:px-14 max-lg:px-8">
			<motion.h2 className="mb-10 text-[40px] font-extrabold lg:mb-16 max-lg:text-[32px]">
				Trailblazers of transformation
			</motion.h2>
			<TransformationItemsGrid data={transformationItems} />
		</div>
	);
};

export default TransformationSection;
