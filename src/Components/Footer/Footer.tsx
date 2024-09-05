import React from 'react';
import FooterColumn from './FooterColumn';
import FooterLinkColumn from './FooterLinkColumn';
import FooterBottom from './FooterBottom';
import './Footer.css';

const Footer: React.FC = () => {
	return (
		<footer>
			<div className="footer-blocks">
				<div className="mx-auto max-w-japfaGrid  pt-20 max-mediumScreen:px-14 max-md:px-8 lg:pb-10">
					<div className="footer-container max-lg:flex-col ">
						{/* Mobile Row */}
						<div className="footer-row flex-col">
							<FooterColumn
								title="About JAPFA"
								description="JAPFA is a leading agro industrial company with focus on animal protein products."
								twoLineDesc={true}
							/>
							<FooterColumn
								title="Address"
								description="Plot No. 91, Sakore Nagar, Viman Nagar, Pune - 411014"
								twoLineDesc={true}
							/>
							<FooterColumn
								title="Contact"
								description={
									<>
										Email -{' '}
										<a href="mailto:customercare.jcipl@japfa.com">
											customercare.jcipl@japfa.com
										</a>
										<br />
										Phone -{' '}
										<a href="tel:+91 9953160066">
											+91 96077 77008
										</a>
									</>
								}
							/>
						</div>

						{/* Additional Rows */}
						<div className="footer-row flex-col">
							<FooterLinkColumn
								title="Quick Links"
								links={[
									{ title: 'Home', path: '/' },
									{ title: 'Career', path: '/career' },
									{ title: 'Media', path: '/media' },
									{
										title: 'Sustainability',
										path: '/sustainability',
									},
									{ title: 'About Us', path: '/discover' },
									{ title: 'Contact Us', path: '/contactus' },
									{ title: 'Downloads', path: '/downloads' },
									{ title: 'Approach', path: '/ourapproach' },
								]}
								classes="footer-title-light"
							/>
							<FooterLinkColumn
								title="Business"
								links={[
									{ title: 'Feed', path: '/feed' },
									{ title: 'Farm', path: '/farm' },
									{ title: 'Food', path: '/food' },
								]}
								classes="footer-title-light"
							/>
							<FooterLinkColumn
								title="External links"
								links={[
									{
										title: 'JAPFA Global',
										extLink: 'https://japfa.com',
									},
									{
										title: 'JAPFA BEST',
										extLink: 'https://japfabest.in',
									},
									{
										title: 'Employees',
										extLink:
											'https://japfaindia.peoplestrong.com//altLogin.jsf',
									},
								]}
								classes="footer-title-light"
							/>
						</div>
					</div>
				</div>
			</div>

			<FooterBottom />
		</footer>
	);
};

export default Footer;
