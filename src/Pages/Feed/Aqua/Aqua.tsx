import React from 'react';
import FeedBanner from '../components/FeedBanner';
import FeedTabs from '../components/FeedTabs';
import FeedNext from '../components/FeedNext';
import '../Feed.css';

const Aqua = () => {
	const AquaBanner = {
		title: 'Aqua',
		bannerContent: [
			'Our best-in-class aqua feed satiates the needs of fishes in our bid to ‘make good always’. Our premium sinking fish feed is available in baby and adult fish pellet formats.',
			'These quantities are only brought to sale after a rigorous process of field trials is conducted under different water and farming conditions.',
			'Our expertise in the industry comes from being a leader in other major South-East Asian markets.',
		],
		bannerImg: '/assets/img/aqua-banner-img.webp',
	};

	const AquaTabs = {
		feedTabs: [
			{
				title: 'Baby',
				description: 'Feed Pellet',
				isActive: true,
			},
			{
				title: 'Adult',
				description: 'Fish Pellet',
			},
		],
		tabContent: [
			{
				title: '',
				description: [
					'Best suited for sustainable pond-fish production',
					'Highly digestible ingredients',
				],
				tabImage: '/assets/img/aqua-pack1.webp',
			},
			{
				title: '',
				description: [
					'Produced under international supervision and state-of-the-art mill technology',
					'Has supplemental vitamins, amino acids, minerals, & PUFA',
				],
				tabImage: '/assets/img/aqua-pack2.webp',
			},
		],
	};

	return (
		<main>
			<section className="feed__inner__container pt-[80px] sm:pt-[100px] lg:pt-[120px] xl:pt-[160px]">
				<div className="mx-auto max-w-japfaGrid max-mediumScreen:px-8">
					<div className="feed-wrapper">
						<FeedBanner
							title={AquaBanner.title}
							bannerContent={AquaBanner.bannerContent}
							bannerImg={AquaBanner.bannerImg}
						/>
						<FeedTabs
							feedTabs={AquaTabs.feedTabs}
							tabContent={AquaTabs.tabContent}
							tabsComponent={true}
							feedType="Aqua"
						/>

						<FeedNext />
					</div>
				</div>
			</section>
		</main>
	);
};

export default Aqua;
