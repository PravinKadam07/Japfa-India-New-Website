import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Feed.css';
import { motion } from 'framer-motion';
import { fadeUp, zoomIn } from '../../../utils/scrollAnimations';
type FeedOfferingProps = {
	mainImg?: string;
	bannerImg?: string;
};
const FeedOffering = (props: FeedOfferingProps) => {
	const location = useLocation();
	const isSwinePage = location.pathname.includes('/swine');
	return (
		<div className="feed-offering-wrapper">
			{/* <img
				src={`${process.env.PUBLIC_URL}/assets/img/offerings-image.svg`}
				alt=""
			/> */}
			<motion.div
				className="feed-offering-banner"
				variants={fadeUp}
				initial="hidden"
				whileInView="visible"
			>
				<div className="sub-title">Offering</div>
				<div className="main-title">Precise Nutrition</div>
				{props.bannerImg && (
					<img
						src={`${process.env.PUBLIC_URL}${props.bannerImg}`}
						alt=""
						style={isSwinePage ? { transform: 'scale(1.25)' } : {}}
					/>
				)}
			</motion.div>
			{props.mainImg && (
				<motion.picture
					variants={zoomIn}
					initial="hidden"
					whileInView="visible"
				>
					<source
						media="(max-width: 768px)"
						srcSet={`${process.env.PUBLIC_URL}${props.mainImg}-mobile.svg`}
					/>
					<img
						src={`${process.env.PUBLIC_URL}${props.mainImg}.svg`}
						alt=""
						className="!max-w-[1014px]"
					/>
				</motion.picture>
			)}
		</div>
	);
};

export default FeedOffering;
