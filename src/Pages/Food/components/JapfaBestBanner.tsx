import React from 'react';

const JapfaBestBanner = () => {
	return (
		<div>
			<picture>
				<img
					src={`${process.env.PUBLIC_URL}/assets/img/food-japfabest-banner-desktop.webp`}
					alt="Japfa Best Banner"
					className="w-full"
				/>
			</picture>
		</div>
	);
};

export default JapfaBestBanner;
