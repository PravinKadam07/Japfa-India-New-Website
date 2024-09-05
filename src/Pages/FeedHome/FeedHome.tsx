import React from 'react';
import FeedsListing from './components/FeedListing/FeedsListing';
import HomeBanner from './components/HomeBanner';
import Awards from './components/Awards';
import QualityManagement from './components/QualityManagement';
import Brands from './components/Brands';
import CustomerSupport from './components/CustomerSupport';
import GetInTouch from './components/GetInTouch';
import Testing from './components/Testing';
import IndustryStandards from './components/IndustryStandards/IndustryStandards';
import './FeedHome.css';
const FeedHome = () => {
	const feedHomeBanner = {
		imageUrl: `${process.env.PUBLIC_URL}/assets/img/home-banner-img.webp`,
		title: ['JAPFA India feed solutions:', 'Nourishing excellence'],
		content:
			' For optimal health and increased productivity of superior livestock, providing the right feed tailored to their breed, geographical location, and seasonal variations is crucial. /n /n At JAPFA India, we develop customized feed formulations that address these specific needs, allowing us to unlock the full genetic potential of each breed. This targeted approach helps us achieve superior animal performance and maximize farmer returns.',
	};
	// Feed listing data
	const feedListingData = [
		{
			id: 1,
			title: 'Poultry',
			cardClass: 'poultry-card',
		},
		{
			id: 2,
			title: 'Cattle',
			cardClass: 'cattle-card',
		},
		{
			id: 3,
			title: 'Aqua',
			cardClass: 'aqua-card',
		},
		{
			id: 4,
			title: 'Swine',
			cardClass: 'swine-card',
		},
	];
	// Industry standards data
	const industryStandardColumns = [
		{
			id: 1,
			iconUrl: '/assets/img/industry-icon-1.svg',
			bgImageClass: 'industry-1',
			title: 'State of the art feed mills',
			text: 'We operate advanced, company owned state-of-the-art feed mills',
		},
		{
			id: 2,
			iconUrl: '/assets/img/industry-icon-2.svg',
			bgImageClass: 'industry-2',
			title: 'Premium Raw Material Sourcing',
			text: 'We excel in efficient sourcing of raw material and strict quality control processes',
		},
		{
			id: 3,
			iconUrl: '/assets/img/industry-icon-3.svg',
			bgImageClass: 'industry-3',
			title: 'Consistent 24/7 Quality',
			text: 'We ensure round-the-clock consistent quality and adapt to changing breed dynamics to meet evolving needs',
		},
		{
			id: 4,
			iconUrl: '/assets/img/industry-icon-4.svg',
			bgImageClass: 'industry-4',
			title: 'Global Research & Development',
			text: 'Our global R&D efforts drive innovation and excellence in our products and processes',
		},
		{
			id: 5,
			iconUrl: '/assets/img/industry-icon-5.svg',
			bgImageClass: 'industry-5',
			title: 'State-of-the-Art Laboratory',
			text: 'We have well-equipped NABL accredited laboratory for internal testing, assuring superior standards',
		},
		{
			id: 6,
			iconUrl: '/assets/img/industry-icon-6.svg',
			bgImageClass: 'industry-6',
			title: 'Certified Excellence',
			text: 'All our feed mills are ISO 9001:2015 (QMS), ISO 22000:2018(FSMS) and HACCP certified',
		},
	];
	// Testing section data
	const testingSectionData = {
		mainTitle: 'Testing Laboratory Facility for Animal Feed Community',
		mainDescription:
			'JAPFA India proudly introduced the Animal Feed and Agricultural Allied product testing facility for the Indian animal feed community. JAPFA Comfeed India Pvt. Ltd. Testing Laboratories provides world-class analytical testing of all types of animal feeds, aqua feeds, agricultural and allied products, minerals, oils and fats, water, etc.',
		leftColumnImage: '/assets/img/lab-testing1.webp',
		leftColumnText: 'Lab Testing',
		rightColumnImage: '/assets/img/lab-testing2.webp',
		rightColumnText:
			'We are equipped with world-class quality infrastructure and the finest laboratories in India accredited by NABL (as per ISO/IEC 17025:2017), ISO 9001:2015, ISO 22000:2018 and HACCP. /n/nWe are the most competent and consistent Z score prevailing lab in proficiency testing by authorized PT Providers.',
	};
	return (
		<div className="">
			<HomeBanner
				imageUrl={feedHomeBanner.imageUrl}
				title={feedHomeBanner.title}
				content={feedHomeBanner.content}
			/>
			<FeedsListing feedListingData={feedListingData} />
			<Awards />
			<QualityManagement />
			<Brands />
			<IndustryStandards
				industryStandardColumns={industryStandardColumns}
				title="We are elevating industry /n standards through..."
			/>
			<Testing data={testingSectionData} />
			<CustomerSupport />
			<GetInTouch />
		</div>
	);
};

export default FeedHome;
