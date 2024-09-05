import React from 'react';
import FeedBanner from '../components/FeedBanner';
import FeedTabs from '../components/FeedTabs';
import FeedOffering from '../components/FeedOffering';
import FeedNext from '../components/FeedNext';
import '../Feed.css';
import FeedProductHighlights from '../components/FeedProductHighlights';

const Cattle = () => {
	const CattleBanner = {
		title: 'Cattle',
		bannerContent: [
			'Following JAPFA vision of ‘Growing Towards Mutual Prosperity’ we have designed cattle feed products in such a way that it helps dairy farmers to generate additional income by improving quantity and quality of milk at farm.',
			'We have launched cattle feed in Maharashtra region, after conducting several on-farm field trials for more than 6 months. Before launching these products for commercial sales, our products are successfully certified by BIS.',
			'The JAPFA Group has its own state-of-the-art cattle farms with highest productivity per animal in China. It manages more than 1 Lac animals in these farms.',
		],
		bannerImg: '/assets/img/cattle-banner-img.webp',
	};

	const CattleTabs = {
		mainImage: '/assets/img/cattle-pack1.webp',
		feedTabs: [
			{
				title: 'Ultrafeed Super Premium',
				description: 'Cattle Feed Pellet',
				isActive: true,
			},
			{
				title: 'Comfeed Premium Cattle',
				description: 'Cattle Feed Pellet',
			},
			{
				title: 'Benefeed Premium Cattle',
				description: 'Cattle Feed Pellet',
			},
		],
		tabContent: [
			{
				title: '',
				description: [
					'Specifically designed for high yielding cows and buffaloes',
					'Highly dense feed with more digestibility',
					'Increases milk yield and quality',
				],
				tabImage: '/assets/img/cattle-pack1.webp',
			},
			{
				title: '',
				description: [
					'Designed for medium to high yielding cows and buffaloes',
					'Maintains good health of cows and buffaloes',
				],
				tabImage: '/assets/img/cattle-pack2.webp',
			},
			{
				title: '',
				description: [
					'Product designed for cows and buffaloes having average milk yield',
					'Cost-effective product',
				],
				tabImage: '/assets/img/cattle-pack3.webp',
			},
		],
	};
	const productHighlights = [
		{
			image: '/assets/img/cattle-icon1.svg',
			description: 'Modernized Cattle Feed Production',
		},
		{
			image: '/assets/img/cattle-icon2.svg',
			description: 'Cost-Effective Solution for Enhanced Profits',
		},
		{
			image: '/assets/img/cattle-icon3.svg',
			description: 'Enriched with Essential Vitamins and Minerals',
		},
	];
	const cattleOfferingBannerImage = '/assets/img/cattle-pack-multiple.webp';

	return (
		<main>
			<section className="feed__inner__container pt-[80px] sm:pt-[100px] lg:pt-[120px] xl:pt-[160px]">
				<div className="mx-auto max-w-japfaGrid max-mediumScreen:px-8">
					<div className="feed-wrapper">
						<FeedBanner
							title={CattleBanner.title}
							bannerContent={CattleBanner.bannerContent}
							bannerImg={CattleBanner.bannerImg}
						/>
						<FeedProductHighlights
							productHighlights={productHighlights}
						/>
						<FeedTabs
							feedType="Cattle"
							feedTabs={CattleTabs.feedTabs}
							tabContent={CattleTabs.tabContent}
						/>
						<FeedOffering bannerImg={cattleOfferingBannerImage} />
						<FeedNext />
					</div>
				</div>
			</section>
		</main>
	);
};

export default Cattle;
