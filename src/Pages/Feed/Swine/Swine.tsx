import React from 'react';
import FeedBanner from '../components/FeedBanner';
import FeedTabs from '../components/FeedTabs';
import FeedOffering from '../components/FeedOffering';
import FeedNext from '../components/FeedNext';
import '../Feed.css';

const Swine = () => {
	const SwineBanner = {
		title: 'Swine',
		bannerContent: [
			'Our swine feed provides balanced nutrition fundamental for pig growth, reproductive success, health, and longevity. It is a product of our leading experience from best global practices and indigenous applications.',
		],
		bannerImg: '/assets/img/swine-banner-img.webp',
	};

	const SwineTabs = {
		topTabs: true,

		feedTabs: [
			{
				title: 'Piglet',
				description: '',
				isActive: true,
			},
			{
				title: 'Grower',
				description: '',
			},
			{
				title: 'Swine',
				description: '',
			},
			{
				title: 'Breeder',
				description: '',
			},
			{
				title: 'Lactation',
				description: '',
			},
			{
				title: 'Concentrated',
				description: '',
			},
		],
		tabContent: [
			{
				title: 'For a young piglet, you need JAPFA Starter Feed. After all, with a stronger foundation, you get better livestock.',
				description: [
					'Highly digestible',
					'Lowest fibre diet',
					'Enhances digestive enzymes',
					'Early gut development',
				],
				tabImage: '/assets/img/swine-pack1.webp',
			},
			{
				title: 'Balanced growth for a growing pig can only be achieved in a qualitative way with Grower Feed from JAPFA India. It is:',
				description: [
					'Highly digestible',
					'Boosts immunity to fight diseases',
					'Supports faster absorption',
					'Adequate NE & CP',
				],
				tabImage: '/assets/img/swine-pack2.webp',
			},
			{
				title: 'A full-grown adult pig/swine needs a pellet that prolongs its life in the most natural way possible. With the Finisher Feed from JAPFA India, your pig gets higher:',
				description: [
					'Growth rate',
					'Dressing',
					'Back fat thickness',
					'Digestibility',
					'Feed Efficiency',
					'Immunity & Livability',
				],
				tabImage: '/assets/img/swine-pack3.webp',
			},
			{
				title: 'Our Gilt/Sow feed helps the adult pigs with the energy to have the capacity to breed stronger off-springs.',
				description: [
					'Enhances conception rate',
					'Good litter size',
					'Facilitates foetus growth',
					'Better weight ratio at birth',
					'Better health during pregnancy',
				],
				tabImage: '/assets/img/swine-pack4.webp',
			},
			{
				title: 'Our Lactation Feed is perfect for helping young piglets get natural nutrition from their mothers.',
				description: [
					'Provides balanced nutrients',
					'Boosted piglet immunity',
					"Improves the sow's productivity and longevity",
					'High energy',
					'High protein',
					'High vitamin & mineral',
				],
				tabImage: '/assets/img/swine-pack5.webp',
			},
			{
				title: 'Our specialty for pigs is 40% Concentrate. Its uniqueness lies in:',
				description: [
					'Produced in meal form',
					'Contains vitamins and minerals',
					'Provides critical amino acids',
					'Carefully tested materials with stringent supervision',
					'Customized mixing for flexible formulation or different age groups',
				],
				tabImage: '/assets/img/swine-pack6.webp',
			},
		],
	};

	const SwineOfferingBannerImage = '/assets/img/swine-pack-multiple.webp';	

	return (
		<main>
			<section className="feed__inner__container pt-[80px] sm:pt-[100px] lg:pt-[120px] xl:pt-[160px]">
				<div className="mx-auto max-w-japfaGrid max-mediumScreen:px-8">

					<div className="feed-wrapper">
						<FeedBanner
							title={SwineBanner.title}
							bannerContent={SwineBanner.bannerContent}
							bannerImg={SwineBanner.bannerImg}
						/>
						<FeedTabs
							feedType="Swine"
							feedTabs={SwineTabs.feedTabs}
							tabContent={SwineTabs.tabContent}
							topTabs={SwineTabs.topTabs}
						/>

						<FeedOffering bannerImg={SwineOfferingBannerImage} />
						<FeedNext />
					</div>
				</div>
			</section>
		</main>
	);
};

export default Swine;
