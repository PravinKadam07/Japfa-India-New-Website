import React from 'react';
import SecondaryPagesBanner from '../Leadership/components/SecondaryPagesBanner';
import ContactFormSection from './ContactFormSection';
import ContactDetailsSection from './ContactDetailsSection';
import OurPresenceSection from './OurPresenceSection';

const ReachUs = () => {
	const bannerdata = {
		subtitle: 'Let’s talk. You’re up',
		imageSrc: `${process.env.PUBLIC_URL}/assets/img/reach-us-banner-image.webp`,
	};
	return (
		<>
			<SecondaryPagesBanner data={bannerdata} />
			<ContactFormSection />
			<ContactDetailsSection />
			<OurPresenceSection />
		</>
	);
};

export default ReachUs;
