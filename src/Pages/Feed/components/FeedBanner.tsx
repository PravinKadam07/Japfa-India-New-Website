import React from 'react';
import '../Feed.css';
import ShadowText from '../../../Components/ShadowText';
type FeedBannerProps = {
	bannerContent: string[];
	bannerImg: string;
	title: string;
};
const FeedBanner = (props: FeedBannerProps) => {
	return (
		<div className="feed-banner">
			<div className="feed-banner-content">
				{/* <div className="demo-title">
						<div className="original-text">Cattle</div>
						<div className="shadow-text">Cattle</div>
					</div> */}
				<div className="banner-title flex animate-fade-right flex-col items-end gap-2">
					<ShadowText
						text={props.title}
						classes="max-sm:!text-5xl xl:!text-[166px] feedText"
					/>
					<div className="text-[40px] text-[#EC691F] lg:text-[60px]">
						Feed
					</div>
				</div>
				<div className="banner-text animate-fade-right">
					{/* map array with <p> */}
					{props.bannerContent.map((item, index) => (
						<p key={index}>{item}</p>
					))}
				</div>
			</div>
			<div className="img-block animate-fade-left">
				<img
					src={`${process.env.PUBLIC_URL}${props.bannerImg}`}
					alt=""
				/>
			</div>

			<div className="banner-title__mobile flex flex-col items-end gap-2">
				<ShadowText
					text={props.title}
					classes="text-[60px] md:!text-[120px] mediumScreen:!text-[166px]"
				/>
				<div className="text-[40px] text-[#EC691F] lg:text-[60px]">
					Feed
				</div>
			</div>
		</div>
	);
};

export default FeedBanner;
