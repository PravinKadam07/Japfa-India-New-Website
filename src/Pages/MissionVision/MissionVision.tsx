import React from 'react';
import SecondaryPagesBanner from '../Leadership/components/SecondaryPagesBanner';
import ImageWithTitleDescription from '../Discover/components/ImageWithTitleDescription';
import GuidingPhilosophy from './components/GuidingPhilosophy';
import IndustryStandards from '../FeedHome/components/IndustryStandards/IndustryStandards';
import './MissionVision.css';

const MissionVision = () => {
	const bannerData = {
		title: 'Charting Our Course: Mission, Purpose, and Values',
		imageSrc: `${process.env.PUBLIC_URL}/assets/img/mv-banner.webp`,
	};
	// Mission
	const missionData = {
		title: 'Mission',
		gradientText:
			'Responsible provider of Nutritious, Healthy and Affordable animal protein products in India',
		description:
			'Our mission is in perfect alignment with our purpose and reflects in in every thought, action and belief at JAPFA.',
		imageSrc: `${process.env.PUBLIC_URL}/assets/img/mv-mission.webp`,
		hasCta: false,
		orderReverse: false,
	};
	// Purpose
	const purposeData = {
		title: 'Purpose',
		gradientText: 'Nourish Emerging India with essential proteins',
		description:
			'Our purpose is rooted in our commitment to enhancing the well-being of all, making it accessible for everyone.',
		imageSrc: `${process.env.PUBLIC_URL}/assets/img/mv-purpose.webp`,
		hasCta: false,
		orderReverse: true,
	};

	// Values
	const valuesData = {
		title: 'Values',
		description:
			'At JAPFA India, we foster sustainable, growth-oriented relationships built on the pillars of trust and integrity. <gradient> Growing Towards Mutual Prosperity</gradient> is the vision which we practice and uphold with Japfa’s various stakeholder groups. This commitment is the foundation of our culture and responsibility.',
	};
	const showValuesData = [
		{
			id: 1,
			iconUrl: `/assets/img/mv-values-excellence.svg`,
			title: `Shareholder Excellence`,
			text: `Consistently deliver superior investment returns, fostering trust and confidence in our financial performance.`,
			bgImageClass: 'shareholder-excellence-bg',
		},
		{
			id: 2,
			iconUrl: `/assets/img/mv-values-partnership.svg`,
			title: `Strategic Business Partnerships`,
			text: `We prioritize a spirit of cooperation, reinforcing each other's core competencies to create mutual success.`,
			bgImageClass: 'business-partnership-bg',
		},
		{
			id: 3,
			iconUrl: `/assets/img/mv-values-customer-centric.svg`,
			title: `Customer-Centric Focus`,
			text: `We are dedicated to delivering top-quality products and services at competitive prices.`,
			bgImageClass: 'customer-centric-bg',
		},
		{
			id: 4,
			iconUrl: `/assets/img/mv-values-supplier-relationships.svg`,
			title: `Ethical Supplier Relationships`,
			text: `We adhere to fair and ethical business dealings, fostering integrity and trust.`,
			bgImageClass: 'supplier-relationship-bg',
		},
		{
			id: 5,
			iconUrl: `/assets/img/mv-values-employee-empowerment.svg`,
			title: `Employee Empowerment`,
			text: `We identify and develop programs that unlock the potential and bring out the best in everyone.`,
			bgImageClass: 'employee-empowerment-bg',
		},
		{
			id: 6,
			iconUrl: `/assets/img/mv-values-commitment.svg`,
			title: `Community Commitment`,
			text: `We pledge to remain a responsible corporate citizen, actively contributing to the well-being of the areas in which we operate`,
			bgImageClass: 'community-commitment-bg',
		},
	];
	return (
		<div>
			<SecondaryPagesBanner data={bannerData} />
			{/* Purpose */}
			<ImageWithTitleDescription
				data={purposeData}
				customHeight="xl:h-full max-sm:h-auto"
			/>
			{/* Mission */}
			<ImageWithTitleDescription data={missionData} addBottomSpacing={true} />
			{/* Make Good Always */}
			<GuidingPhilosophy />
			{/* Values title */}
			<ImageWithTitleDescription data={valuesData} />
			{/* Values Grid */}
			<div className="mb-[120px] max-mediumScreen:px-6">
				<IndustryStandards industryStandardColumns={showValuesData} />
			</div>
		</div>
	);
};

export default MissionVision;
