import React from 'react';
import './Footer.css';

interface FooterColumnProps {
	title: string;
	description: React.ReactNode;
	desktopOnly?: boolean;
	twoLineDesc?: boolean;
}

const FooterColumn: React.FC<FooterColumnProps> = ({
	title,
	description,
	desktopOnly,
	twoLineDesc
}) => {
	return (
		<div className={`footer-col ${desktopOnly ? 'footer-desktop' : ''}`}>
			<div className="footer-title">{title}</div>
			<div
				className={`"footer-desc" ${twoLineDesc ? 'max-w-[374px]' : ''}`}
			>
				{description}
			</div>
		</div>
	);
};

export default FooterColumn;
