import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface FeedNextItemsProps {
	linkPath: string;
	nextItemTitle: string;
	currentPath: string;
	imageSrc: string;
}

const FeedNextItems: React.FC<FeedNextItemsProps> = ({
	linkPath,
	nextItemTitle,
	currentPath,
	imageSrc,
}) => {
	const location = useLocation();
	const activePath = `${currentPath}`;
	return (
		<>
			<Link
				to={`${linkPath}`}
				className={`next-item ${
					location.pathname === activePath ? 'active' : ''
				}`}
			>
				<div className="next-item-img">
					<img
						src={`${process.env.PUBLIC_URL}${imageSrc}`}
						alt={currentPath}
					/>
				</div>
				<div className="next-item-title">{nextItemTitle}</div>
			</Link>
		</>
	);
};

export default FeedNextItems;
