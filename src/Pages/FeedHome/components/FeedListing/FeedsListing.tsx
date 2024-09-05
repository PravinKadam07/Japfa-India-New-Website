import React from 'react';
import '../../FeedHome.css';
import FeedListingItem from './FeedListingItem';
import { motion } from 'framer-motion';
import { fadeUp } from '../../../../utils/scrollAnimations';
interface FeedListingProps {
	feedListingData: {
		id: number;
		title: string;
		cardClass: string;
	}[];
}

const FeedsListing = ({ feedListingData }: FeedListingProps) => {
	return (
		<section className="mx-auto max-w-japfaGrid px-2 py-32 max-mediumScreen:px-14 max-lg:px-8 max-md:py-[80px]">
			<motion.div
				className="add-heading-icon mx-auto w-fit border-b-2 border-b-stone-900 text-center text-5xl text-stone-900 max-md:text-[48px] max-md:leading-none max-sm:text-[32px] md:text-7xl"
				variants={fadeUp}
				initial="hidden"
				whileInView="visible"
			>
				Tailored feeds for <br /> flourishing livestock
			</motion.div>
			<div className="mt-[100px] w-full max-md:mt-10 max-md:max-w-full">
				<div className="grid grid-cols-4 max-md:justify-items-center">
					{feedListingData.map((feed) => (
						<FeedListingItem key={feed.id} {...feed} />
					))}
				</div>
			</div>
		</section>
	);
};

export default FeedsListing;
