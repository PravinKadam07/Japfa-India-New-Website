import React from 'react';
import SecondaryPagesBanner from '../Leadership/components/SecondaryPagesBanner';
import ImageWithTitleDescription from './components/ImageWithTitleDescription';
import TransformationSection from './components/TransformationSection';
import GlobalFootprintSection from './components/GlobalFootprintSection';
import BusinessModel from './components/BusinessModel';

const Discover = () => {
	const bannerData = {
		subtitle: 'Global powerhouse in animal agriculture',
		imageSrc: `${process.env.PUBLIC_URL}/assets/img/discover-banner.webp`,
	};

	// First steps in india section
	const firstSteps = {
		title: 'JAPFA India',
		subtitle: 'Our first steps in India',
		description:
			'JAPFA India is a leading animal-agro company, driven by its mission to nourish an emerging India with essential proteins. For almost three decades of our existence in India now, we have been catalysing total transformation in the animal-agro industry through our commitment to sustainable animal agricultural practices./n/n By nurturing an attitude of responsible food production, combined with an integrated approach, we are changing perspectives across the entire landscape, from feed to farm to food to fork while we aim to nourish over a billion dreams.',
		imageSrc: `${process.env.PUBLIC_URL}/assets/img/discover-warehouse.webp`,
		hasCta: false,
	};
	// global legacy section data
	const globalLegacy = {
		title: 'JAPFA Global',
		subtitle: 'A global legacy of excellence',
		description:
			'1971 was the founding year of JAPFA, when it commenced operations in Indonesia with the mission to feed and nourish emerging Asia. We are headquartered in Singapore and employ a force of 40,000+ employees across an integrated network of modern animal farming, processing and distribution facilities of protein staples and packaged food in Indonesia, Vietnam, India, Myanmar, China and Bangladesh. As an industry leader, we’ve pioneered and standardized operations in livestock genetics, feed and farming tech, biosecurity and animal welfare./n/n For over half a century we’ve learnt, evolved and come to dominate the animal-agro space. Today we lead multiple protein segments by adopting an integrated industrial approach to livestock farming and food production by implementing sustainable practices across the entire value chain.',
		imageSrc: `${process.env.PUBLIC_URL}/assets/img/discover-founder.webp`,
		hasCta: true,
		ctaText: 'JAPFA global',
		ctaLink:'https://japfa.com/'
	};
	return (
		<div>
			<SecondaryPagesBanner data={bannerData} />
			<ImageWithTitleDescription
				data={firstSteps}
				customHeight="xl:h-full h-[90%] max-sm:h-auto max-sm:aspect-square max-sm:mt-[24px]"
				imageCenter={true}
				parentHeightFull={true}
				imageRadius='rounded-[80px_0_0_0]'
				addBottomSpacing={true}
				/>
			<TransformationSection />
			<ImageWithTitleDescription
				data={globalLegacy}
				customHeight={
					'h-[80%] lg:h-[85%] max-sm:aspect-square max-sm:h-auto max-sm:mt-[24px]'
				}
				parentHeightFull={true}
				imageRadius='rounded-[80px_0_0_0]'
				addBottomSpacing={true}
			/>
			<GlobalFootprintSection />
			<BusinessModel />
		</div>
	);
};

export default Discover;
