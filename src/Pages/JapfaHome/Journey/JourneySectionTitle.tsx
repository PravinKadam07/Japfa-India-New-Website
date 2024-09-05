import React from 'react';
import ShadowText from '../../../Components/ShadowText';

const JourneySectionTitle = () => {
	return (
		<div className="mx-auto max-w-[1224px] max-xl:px-14 max-md:px-8">
			<div className="text-center xl:w-[80%] mx-auto z-10">
				<picture className="w-full">
					<source
						srcSet={`${process.env.PUBLIC_URL}/assets/img/journey-title-mobile.svg`}
						type="image/webp"
						media="(max-width: 767px)"
					/>
					<img
						loading="lazy"
						src={`${process.env.PUBLIC_URL}/assets/img/journey-title-desktop.svg`}
						alt=""
						className="w-full"
					/>
				</picture>
				{/* subtitle */}
				<picture className="">
					<source
						srcSet={`${process.env.PUBLIC_URL}/assets/img/journey-subtitle-mobile.svg`}
						type="image/webp"
						media="(max-width: 767px)"
					/>
					<img
						loading="lazy"
						src={`${process.env.PUBLIC_URL}/assets/img/journey-subtitle-desktop.svg`}
						alt=""
						className="mx-auto mt-5 w-full max-w-[841px]"
					/>
				</picture>
			</div>
		</div>
	);
};

export default JourneySectionTitle;
