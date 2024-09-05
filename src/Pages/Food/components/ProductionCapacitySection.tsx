import React from 'react';
import TransformationItemsGrid from '../../Discover/components/TransformationItemsGrid';
import { motion } from 'framer-motion';
import { fadeUp } from '../../../utils/scrollAnimations';
interface Props {
	useRedTheme?: boolean;
}
const ProductionCapacitySection = ({ useRedTheme }: Props) => {
	// Production capaciy per day (Using Transformation Component from Discover page)
	const productionCapacity = [
		{
			id: 1,
			figure: '15',
			description: 'Tons of chicken',
		},
		{
			id: 2,
			figure: '3.5',
			description: 'Tons of fish and seafood',
		},
		{
			id: 3,
			figure: '1.5',
			description: 'Tons of red meat',
		},
		{
			id: 4,
			figure: '30,000',
			description: 'Eggs',
		},
		{
			id: 5,
			figure: '2,000',
			description: 'Packets of RTC',
		},
	];
	return (
		<div className={`${useRedTheme ? 'bg-[#CD202F]' : ''}`}>
			<div className="mx-auto max-w-japfaGrid py-20 max-mediumScreen:px-14 max-lg:px-8 lg:py-[120px]">
				<motion.h2
					className={`mb-10 text-[40px] font-extrabold max-md:text-[32px] lg:mb-16 ${
						useRedTheme ? 'text-white' : ''
					}`}
					initial="hidden"
					whileInView="visible"
					variants={fadeUp}
				>
					Production capacity per day
				</motion.h2>
				<TransformationItemsGrid
					data={productionCapacity}
					useRedTheme={useRedTheme}
				/>
			</div>
		</div>
	);
};

export default ProductionCapacitySection;
