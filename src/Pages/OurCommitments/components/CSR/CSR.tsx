import CSRSec from './CSRSec';
import { useState, useEffect } from 'react';
import { fetchCommitmentsCsr } from '../../../../utils/fetchFromApi';
import { motion } from 'framer-motion';
import { fadeLeft, fadeUp } from '../../../../utils/scrollAnimations';

type CsrDataType = {
	title: string;
	desc: string;
	items: string[];
};
const CSR = () => {
	// const items = [
	// 	{
	// 		title: 'Empowering ‘Genext’ with computers',
	// 		desc: 'Donating computers to school computer lab in Ajnuj',
	// 		items: ['CSR11', 'CSR12'],
	// 	},
	// 	{
	// 		title: 'Safety at ground zero',
	// 		desc: 'Celebrating safety week and increasing awarness with employees',
	// 		items: ['CSR21', 'CSR22', 'CSR23'],
	// 	},
	// 	{
	// 		title: 'One Earth- Planting a sense of responsibilty',
	// 		desc: 'Tree plantation drive for over 200 saplings',
	// 		items: ['CSR31', 'CSR32'],
	// 	},
	// 	{
	// 		title: 'Nurturing minds, building values',
	// 		desc: 'Inculcating environmental values among ‘GeNext’',
	// 		items: ['CSR41', 'CSR42'],
	// 	},
	// 	{
	// 		title: 'Health and hygiene first',
	// 		desc: 'Built and inaugurated toilets for a school in Supa',
	// 		items: ['CSR51', 'CSR52'],
	// 	},
	// ];

	const [csrItems, setCsrItems] = useState([]);

	useEffect(() => {
		fetchCommitmentsCsr()
			.then((data) => {
				setCsrItems(
					data.map((item: any, index: number) => ({
						title: item.acf.title,
						desc: item.acf.description,
						items: [
							item.acf.image_1 && item.acf.image_1,
							item.acf.image_2 && item.acf.image_2,
							item.acf.image_3 && item.acf.image_3,
						].filter(Boolean),
					})),
				);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<section className="bg-[#1E140F] text-white">
			<div className="mx-auto max-w-japfaGrid py-[120px] max-mediumScreen:px-14 max-md:py-[80px] max-sm:px-[24px]">
				<motion.h2
					className="xl:md-[80px] mb-[40px] text-[32px] font-extrabold md:mb-[60px] md:text-[40px] xl:text-[72px]"
					variants={fadeUp}
					initial={'hidden'}
					whileInView={'visible'}
				>
					CSR & Sustainability stories
				</motion.h2>
				<div className="flex flex-col gap-[40px] md:gap-[80px] xl:gap-[120px]">
					{csrItems.map((item, index) => {
						return <CSRSec key={index} data={item} index={index} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default CSR;
