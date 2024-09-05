import React from 'react';
import SecondaryPagesBanner from '../Leadership/components/SecondaryPagesBanner';
import JapfitesSection from './components/JapfitesSection';
import JobOpeningsSection from './components/JobOpeningsSection';
import DolphinValues from './components/DolphinValues';
import LifeAtJapfa from './components/LifeAtJapfa';
import JapfaCultureSection from './components/JapfaCultureSection';
import Testimonials from './components/Testimonials';

const Career = () => {
	const bannerData = {
		title: 'Building careers.',
		subtitle: 'Transforming lives',
		imageSrc: `${process.env.PUBLIC_URL}/assets/img/career-banner.webp`,
	};
	return (
		<div className="">
			<SecondaryPagesBanner data={bannerData} />
			<JapfitesSection />
			<DolphinValues />
			<JapfaCultureSection />
			<Testimonials />
			<LifeAtJapfa />
			<JobOpeningsSection />
		</div>
	);
};

export default Career;
