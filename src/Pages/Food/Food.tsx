import HomeBanner from '../FeedHome/components/HomeBanner';
import JapfaBest from './components/JapfaBestTitle';
import IndustryStandards from '../FeedHome/components/IndustryStandards/IndustryStandards';
import './Food.css';
import ProcessingCentreSection from './components/ProcessingCentreSection';
import ProductionCapacitySection from './components/ProductionCapacitySection';

import SectionWithOnlyImage from './components/SectionWithOnlyImage';
import ArrowImageTextSection from './components/ArrowImageTextSection';
import BusinessTypeBanner from './components/BusinessTypeBanner';
import JapfaBestLinkBanner from './components/JapfaBestLinkBanner';
import JapfaBestBusinessModel from './components/JapfaBestBusinessModel';
import BestStandardCarousel from './components/BestStandardCarousel';
import QualityAtHeart from './components/QualityAtHeart';

const Food = () => {
	const homeBannerData = {
		imageUrl: `${process.env.PUBLIC_URL}/assets/img/food-banner.webp`,
		title: ['Premium food solutions for', 'Indian homes and enterprises'],
		content:
			"Providing Consumers & Businesses with high quality meat that's raised in our own farms and processed in-house using state-of-the-art facilities./n/nFounded on 50 years of expertise as Asia's largest agro-industrial food company.",
	};
	const japfaBestData = [
		{
			id: 1,
			iconUrl: '/assets/img/food-quality-icon.svg',
			title: 'Highest Quality​',
			text: 'We offer high-quality meat products, ensuring a premium culinary experience for our customers​',
			bgImageClass: 'food-quality-bg',
		},
		{
			id: 2,
			iconUrl: '/assets/img/food-convenience-icon.svg',
			title: 'Convenience​',
			text: 'Your order, Your doorstep, 30-45 minutes – Enjoy your meal faster!',
			bgImageClass: 'food-convenience-bg',
		},
		{
			id: 3,
			iconUrl: '/assets/img/food-freshness-icon.svg',
			title: 'Freshness First​',
			text: 'Our Commitment to Freshness – Experience Meat at its Freshest, Delivered to your Home',
			bgImageClass: 'food-freshness-bg',
		},
		{
			id: 4,
			iconUrl: '/assets/img/food-affordable-icon.svg',
			title: 'Affordable Pricing​',
			text: 'We believe in making quality accessible to all, offering our top-quality meat at affordable prices',
			bgImageClass: 'food-affordable-bg',
		},
	];
	// Processing centre section
	const processingCentreData = {
		title: 'Introducing India’s leading cutting edge Processing centre ',
		featuresList: [
			'Production capacity (approx. 25 Tons per day)',
			'25,000 sq feet',
			'Designed in compliance with Fssai 22000 - 2018',
			'100+ workers',
			'Modern machinery imported from Netherlands, Spain, Italy, France & Germany',
		],
		imageSrc: `${process.env.PUBLIC_URL}/assets/img/food-processing-centre.webp`,
	};

	// slaughter house section data
	const slaughterHouseData = {
		title: 'Introducing India’s premier state-of-the-art Slaughterhouse',
		featuresList: [
			'Expanding from 30,000 to 60,000 birds per day',
			'Total Area: 22 Acres, Total Build Up 4.17 Acres',
			'Best in-class Machinery – Scada controlled refrigeration',
			'600 KLD Effluent treatment plant for wastewater',
			'State-of-the-art Reverse Osmosis System​',
		],
		imageSrc: `${process.env.PUBLIC_URL}/assets/img/food-slaughterhouse.webp`,
	};

	return (
		<div>
			<HomeBanner
				imageUrl={homeBannerData.imageUrl}
				title={homeBannerData.title}
				content={homeBannerData.content}
				useRedTheme={true}
			/>
			<div className="mx-auto max-w-japfaGrid py-[80px] md:py-[100px] xl:my-[120px]">
				<JapfaBest />
				<IndustryStandards
					industryStandardColumns={japfaBestData}
					useRedTheme={true}
				/>
			</div>
			<ProcessingCentreSection
				data={processingCentreData}
				useRedTheme={true}
			/>
			<ProductionCapacitySection useRedTheme={true} />
			{/* SlaughterHouseSection */}
			<ProcessingCentreSection
				data={slaughterHouseData}
				useRedTheme={true}
			/>
			{/* Japfa Best quality section banner */}
			<SectionWithOnlyImage
				imageFileName="food-japfabest-banner-desktop.webp"
				key={'japfa-best-quality'}
			/>
			{/* Quality is at the heart of everything we do */}
			<QualityAtHeart />
			{/* <SectionWithOnlyImage
				imageFileName="food-quality-at-heart-banner-desktop.webp"
				wrapperBackground="linear-gradient(180deg, #CE202F 0%, #75111A 100%)"
				fullHeightImage={true}
				key={'quality-at-heart'}
			/> */}
			{/* Savour the feast section */}
			<SectionWithOnlyImage
				imageFileName="food-savour-the-feast-desktop.webp"
				key={'savour-the-feast'}
			/>
			{/* Fresh Raw meat */}
			<ArrowImageTextSection
				title="Fresh raw meat"
				imageSrc={`${process.env.PUBLIC_URL}/assets/img/food-fresh-raw-meat.webp`}
				align="right"
			/>
			{/* Farm Fresh Eggs */}
			<ArrowImageTextSection
				title="Farm fresh eggs"
				imageSrc={`${process.env.PUBLIC_URL}/assets/img/food-farm-fresh-eggs.webp`}
				orderReverse={true}
			/>
			{/* Ready to cook */}
			<ArrowImageTextSection
				title="Ready to cook"
				imageSrc={`${process.env.PUBLIC_URL}/assets/img/food-ready-to-cook.webp`}
				align="right"
			/>
			{/* Coming soon */}
			<SectionWithOnlyImage
				imageFileName="food-coming-soon-desktop.webp"
				key={'coming-soon-banner'}
			/>
			<BestStandardCarousel />
			{/* B2B: Business to Business */}
			<BusinessTypeBanner
				imageSrc={`${process.env.PUBLIC_URL}/assets/img/food-b2b.webp`}
				title="Business-to-Business"
				subtitle="Bringing the BEST Meat to the biggest names in the business"
			/>
			{/* D2C: Direct to Consumer */}
			<BusinessTypeBanner
				imageSrc={`${process.env.PUBLIC_URL}/assets/img/food-b2c.webp`}
				title="Direct-to-Consumer"
				subtitle="Delighting consumers with fresh meat they can trust"
				imageOutsideGrid={true}
				imageAlign="right"
			/>
			{/* Retail */}
			<BusinessTypeBanner
				imageSrc={`${process.env.PUBLIC_URL}/assets/img/food-retail.webp`}
				imageOutsideGrid={true}
				imageAlign="left"
			/>

			<JapfaBestLinkBanner />
			<JapfaBestBusinessModel />
		</div>
	);
};

export default Food;
