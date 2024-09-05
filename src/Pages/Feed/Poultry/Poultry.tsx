import React from 'react';
import FeedBanner from '../components/FeedBanner';
import FeedTabs from '../components/FeedTabs';
import FeedOffering from '../components/FeedOffering';
import FeedNext from '../components/FeedNext';
import '../Feed.css';

const Poultry = () => {
	const PoultryBanner = {
		title: 'Poultry',
		bannerContent: [
			'We specialize in making the best poultry feed across the entire South-East Asian market.',
			'With over 50 years of experience in manufacturing quality feed through constant innovation, supporting farmers throughknowledge sharing on best farming practices, and bio-security management to maximize end-user profitability, we have innovated better farming practices to grow better feed and thereby satisfy end-user expectations.',
		],
		bannerImg: '/assets/img/poultry-banner-img.webp',
	};

	const PoultryTabs = {
		feedTabs: [
			{
				title: 'Pre Starter',
				description: 'Feed',
				isActive: true,
			},
			{
				title: 'Starter',
				description: 'Feed',
			},
			{
				title: 'Finisher',
				description: 'Feed',
			},
		],
		tabContent: [
			{
				title: 'Supports early growth and development',
				description: [
					'Crumbled granules for uniformity across the flock which provides nutrition for early development of internal organs and faster growth',
					'Produced with highly digestible ingredients',
					'Selected raw materials',
					'Develops healthy gut to support growth and better FCR',
					'Developed with ideal protein concept',
					'Boosts immunity resulting in lower incidence of disease outbreak & mortality',
				],
				tabImage: '/assets/img/poultry-pack1.webp',
			},
			{
				title: 'Maintains steady and overall growth',
				description: [
					'Designed with highly potential and natural growth promoters',
					'Balanced amino acids and vitamins with required energy level to maintain steady growth',
					'Feed specially designed for birds after 14 days',
					'Highly active enzymes to minimize feed cost per kg. of meat yield',
					'Faster growth and high disease resistance',
				],
				tabImage: '/assets/img/poultry-pack2.webp',
			},
			{
				title: 'Continue steady nutritional intake for better growth.',
				description: [
					'Grow out feed with higher energy',
					'High meat yield with broad breast',
					'Less shrinkage in pre-slaughter period at cutting plant',
					'Improves disease resistance power of the birds',
				],
				tabImage: '/assets/img/poultry-pack3.webp',
			},
		],
	};
	const poultryFeedOfferingImage = '/assets/img/offerings-image';
	const poultryOfferingBannerImage = '/assets/img/poultry-pack-multiple.webp';

	return (
		<main>
			<section className="feed__inner__container pt-[80px] sm:pt-[100px] lg:pt-[120px] xl:pt-[160px]">
				<div className="mx-auto max-w-japfaGrid max-mediumScreen:px-8">
					<div className="feed-wrapper">
						<FeedBanner
							bannerContent={PoultryBanner.bannerContent}
							bannerImg={PoultryBanner.bannerImg}
							title={PoultryBanner.title}
						/>
						<FeedTabs
							feedType='Poultry'
							feedTabs={PoultryTabs.feedTabs}
							tabContent={PoultryTabs.tabContent}
						/>
						<FeedOffering
							mainImg={poultryFeedOfferingImage}
							bannerImg={poultryOfferingBannerImage}
						/>
						<FeedNext />
					</div>
				</div>
			</section>
		</main>
	);
};

export default Poultry;
