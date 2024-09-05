import React from 'react';
import SecondaryPagesBanner from '../Leadership/components/SecondaryPagesBanner';
import MediaCards from './components/MediaCards';
import WatchVideos from './components/WatchVideos';

const Media = () => {
	const bannerData = {
		subtitle: 'Crafting business narratives in Media',
		imageSrc: `${process.env.PUBLIC_URL}/assets/img/Media-banner.webp`,
	};
	return (
		<div>
			<SecondaryPagesBanner data={bannerData} />
			<WatchVideos />
			<MediaCards />
		</div>
	);
};

export default Media;
