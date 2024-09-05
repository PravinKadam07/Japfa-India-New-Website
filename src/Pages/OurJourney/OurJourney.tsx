import React, { useEffect, useState } from 'react';
import SecondaryPagesBanner from '../Leadership/components/SecondaryPagesBanner';
import AchievementTimelineSlide from './components/AchievementTimelineSlide';
import './OurJourney.css';
import OurAchievements from './components/OurAchievements';
import { fetchOurJourney } from '../../utils/fetchFromApi';
const OurJourney = () => {
	const bannerData = {
		title: 'Our journey: ',
		subtitle: 'Roadmap to success',
		imageSrc: `${process.env.PUBLIC_URL}/assets/img/discover-banner.webp`,
	};
	// const timelineData = [
	// 	{
	// 		month: 'November',
	// 		year: '1995',
	// 		title: 'Company incorporated',
	// 		imageSrc: `${process.env.PUBLIC_URL}/assets/img/our-journey-1995.webp`,
	// 	},
	// 	{
	// 		month: 'August',
	// 		year: '1999',
	// 		title: 'Supa feed mill established',
	// 		description:
	// 			'State-of-the-art feed mill eastablished at SUPA village Ahmednagar district in the state of Maharashtra',
	// 		imageSrc: `${process.env.PUBLIC_URL}/assets/img/our-journey-1999.webp`,
	// 	},
	// 	{
	// 		month: 'December',
	// 		year: '2004',
	// 		title: 'Started CGF operations',
	// 		description:
	// 			'Diversified into poultry mid stream operations by establishing contract growing farms(CGF)',
	// 		imageSrc: `${process.env.PUBLIC_URL}/assets/img/our-journey-2004.webp`,
	// 	},
	// 	{
	// 		month: 'July',
	// 		year: '2005',
	// 		title: 'Edulabad hatchery set up',
	// 		imageSrc: `${process.env.PUBLIC_URL}/assets/img/our-journey-2005.webp`,
	// 	},
	// 	{
	// 		month: 'April',
	// 		year: '2006',
	// 		title: 'Parent farm established in Shirasgoan kata, Maharashtra',
	// 		description:
	// 			'Cage free parent bird farm established in Maharashtra adhering to global best practices of bio security and animal welfare.',
	// 		imageSrc: `${process.env.PUBLIC_URL}/assets/img/our-journey-2006.webp`,
	// 	},
	// 	{
	// 		month: 'November',
	// 		year: '2015',
	// 		title: 'Setup high-tech animal health lab',
	// 		description:
	// 			'To provide an assistance and support to growing poultry operations, a state-of-the-art, high-tech animal health lab established in Pune',
	// 		imageSrc: `${process.env.PUBLIC_URL}/assets/img/our-journey-2015.webp`,
	// 	},
	// 	{
	// 		month: 'December',
	// 		year: '2016',
	// 		title: 'Established Vaishali feed mill, Bihar ',
	// 		description:
	// 			'To penetrate eastern and northen markets, JAPFA established state-of-the-art feed mill in Vaishali district, Bihar',
	// 		imageSrc: `${process.env.PUBLIC_URL}/assets/img/our-journey-2016.webp`,
	// 	},
	// 	{
	// 		month: 'October',
	// 		year: '2018',
	// 		title: 'India Head office revamped',
	// 		imageSrc: `${process.env.PUBLIC_URL}/assets/img/our-journey-2018.webp`,
	// 	},
	// 	{
	// 		month: 'May',
	// 		year: '2019',

	// 		title: 'Bhoomipooja for new feedmills in UP and  kittor',
	// 		imageSrc: `${process.env.PUBLIC_URL}/assets/img/our-journey-2019.webp`,
	// 	},
	// 	{
	// 		month: 'October',
	// 		year: '2020',
	// 		description:
	// 			'Entry in food business through retail outlets  branded best chicken and meats business. Creating a benchmark towards hygenic and fresh modern meat  store in India.',
	// 		imageSrc: `${process.env.PUBLIC_URL}/assets/img/our-journey-2019.webp`,
	// 	},
	// ];
	const [timelineData, settimelineData] = useState([]);
	useEffect(() => {
		fetchOurJourney()
			.then((res) => {
				const OurJourney = res
					.map((item: any) => ({ ...item.acf }))
					.sort((a: any, b: any) => a.year - b.year);
				settimelineData(OurJourney);
				
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<div>
			<SecondaryPagesBanner data={bannerData} />
			{timelineData.length > 0 && (
				<AchievementTimelineSlide slideData={timelineData} />
			)}
			<OurAchievements />
		</div>
	);
};

export default OurJourney;
