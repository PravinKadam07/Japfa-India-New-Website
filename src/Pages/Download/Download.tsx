import React from 'react';
import SecondaryPagesBanner from '../Leadership/components/SecondaryPagesBanner';
import SliderWrapper from './SliderWrapper';

const Download = () => {
	const bannerData = {
		subtitle: 'Downloads that matters',
		imageSrc: `${process.env.PUBLIC_URL}/assets/img/download-banner-img.webp`,
	};
	return (
		<div>
			<SecondaryPagesBanner data={bannerData} />
			<SliderWrapper />
		</div>
	);
};

export default Download;
