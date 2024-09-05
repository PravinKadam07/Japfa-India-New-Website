import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Feed.css';
import FeedNextItem from './FeedNextItem';
import { motion } from 'framer-motion';
import { fadeUp } from '../../../utils/scrollAnimations';

const FeedNext = () => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);
	const navigate = useNavigate();
	const navigateTo = (path: string) => {
		navigate(path);
		window.scrollTo(0, 0);
	};

	const feedNextItems = [
		{
			linkPath: '/poultry',
			nextItemTitle: 'Poultry feed',
			currentPath: '/poultry',
			imageSrc: '/assets/img/poultry-card-img.webp',
		},
		{
			linkPath: '/cattle',
			nextItemTitle: 'Cattle feed',
			currentPath: '/cattle',
			imageSrc: '/assets/img/cattle-card-img.webp',
		},
		{
			linkPath: '/aqua',
			nextItemTitle: 'Aqua feed',
			currentPath: '/aqua',
			imageSrc: '/assets/img/aqua-card-img.webp',
		},
		{
			linkPath: '/swine',
			nextItemTitle: 'Swine feed',
			currentPath: '/swine',
			imageSrc: '/assets/img/swine-card-img.webp',
		},
	];

	return (
		<div className="feed-next-wrapper">
			<motion.div
				className="feed-next-title"
				variants={fadeUp}
				initial="hidden"
				whileInView="visible"
			>
				Select next
			</motion.div>

			<motion.div
				className="feed-next-block"
				variants={fadeUp}
				initial="hidden"
				whileInView="visible"
			>
				{feedNextItems.map((item, index) => (
					<React.Fragment key={index}>
						<FeedNextItem
							linkPath={item.linkPath}
							nextItemTitle={item.nextItemTitle}
							currentPath={item.currentPath}
							imageSrc={item.imageSrc}
						/>
						{index < feedNextItems.length - 1 && (
							<div className="next-item-gap"></div>
						)}
					</React.Fragment>
				))}
			</motion.div>

			<div className="feed-back">
				<div
					className="feed-back-link cursor-pointer"
					onClick={() => navigateTo('/feed')}
				>
					<img
						src={`${process.env.PUBLIC_URL}/assets/img/icons/left-arrow-orange-circle.svg`}
						alt="Back Arrow"
					/>{' '}
					Back to feed
				</div>
			</div>
		</div>
	);
};

export default FeedNext;
