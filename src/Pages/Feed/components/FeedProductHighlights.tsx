import { motion } from 'framer-motion';
import React from 'react';
import { fadeUp } from '../../../utils/scrollAnimations';
type FeedProductHighlightsProps = {
	productHighlights: {
		image: string;
		description: string;
	}[];
};
const FeedProductHighlights = (props: FeedProductHighlightsProps) => {
	const { productHighlights } = props;
	return (
		<section className="feed-product-highlights">
			<motion.div
				className="main-title"
				variants={fadeUp}
				initial="hidden"
				whileInView="visible"
			>
				Our Product Highlights
			</motion.div>
			<div className="product-highlights">
				{productHighlights.map((productHighlight, index) => {
					return (
						<motion.div
							className="product-highlight"
							key={index}
							variants={fadeUp}
							initial="hidden"
							whileInView="visible"
						>
							<div className="product-highlight-img">
								<img
									src={`${process.env.PUBLIC_URL}${productHighlight.image}`}
									alt=""
								/>
							</div>
							<div className="product-highlight-description">
								{productHighlight.description}
							</div>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
};

export default FeedProductHighlights;
