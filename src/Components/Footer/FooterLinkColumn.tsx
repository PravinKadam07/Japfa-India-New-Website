import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';

interface FooterLinkColumnProps {
	title: string;
	links: Array<{ title: string; path?: string; extLink?: string }>;
	classes?: string;
}

const FooterLinkColumn: React.FC<FooterLinkColumnProps> = ({
	title,
	links,
	classes,
}) => {
	const linkChunks = [links.slice(0, 4), links.slice(4)];
	const navigate = useNavigate();
	const handleLinkClick = (link: { path?: string; extLink?: string }) => {
		if (link.extLink) {
			window.open(link.extLink, '_blank', 'noopener,noreferrer');
		} else if (link.path) {
			navigate(link.path);
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	};

	return (
		<div className="footer-col">
			<div className={`footer-title ${classes && classes}`}>{title}</div>
			<div className="footer-links">
				{linkChunks.map((chunk, idx) => (
					<div key={idx} className="footer-link-row">
						{chunk.map((link) => (
							<span
								className="cursor-pointer"
								key={link.title}
								onClick={() => handleLinkClick(link)}
							>
								{link.title}
							</span>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default FooterLinkColumn;
