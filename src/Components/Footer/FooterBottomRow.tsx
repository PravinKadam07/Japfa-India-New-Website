import React from 'react';
import './Footer.css';

const FooterBottomRow: React.FC = () => {
	const socialLinks = [
		{
			href: 'https://www.facebook.com/JAPFAIndia/',
			src: `${process.env.PUBLIC_URL}/assets/img/icons/facebook.svg`,
			alt: `Facebook`,
		},
		{
			href: `https://www.linkedin.com/company/japfa-comfeed-india-pvt-ltd/`,
			src: `${process.env.PUBLIC_URL}/assets/img/icons/linkedin.svg`,
			alt: `LinkedIn`,
		},
		{
			href: `https://www.youtube.com/@japfaindia4324`,
			src: `${process.env.PUBLIC_URL}/assets/img/icons/youtube.svg`,
			alt: `YouTube`,
		},
		// {
		// 	href: `#`,
		// 	src: `${process.env.PUBLIC_URL}/assets/img/icons/twitter.svg`,
		// 	alt: `Twitter`,
		// },
	];

	return (
		<div className="footer-bottom-row">
			<div className="footer-bottom-col">
				<span>Find us on</span>
				<ul>
					{socialLinks.map((link, index) => (
						<li key={index}>
							<a href={link.href}>
								<img src={link.src} alt={link.alt} />
							</a>
						</li>
					))}
				</ul>
			</div>
			<div className="footer-bottom-col">
				<a href="/suppliers">Supplier</a>
				<span>|</span>
				<a href="/policy">Policy</a>
			</div>
			<div className="footer-bottom-col">
				<span>All images are for illustration purposes only</span>
			<span>|</span>
				<span>Copyright @JAPFA India 2024</span>
			</div>
		</div>
	);
};

export default FooterBottomRow;
