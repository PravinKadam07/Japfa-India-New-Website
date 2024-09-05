import { motion } from 'framer-motion';
import React from 'react';
import { fadeLeft, fadeUp } from '../../utils/scrollAnimations';
import ContactDetails from './components/ContactDetails';
import './ReachUs.css';

const ContactDetailsSection = () => {
	const contactDetails = [
		{
			id: 1,
			iconSrc: `${process.env.PUBLIC_URL}/assets/img/call-icon.svg`,
			title: 'Give us a call',
			description: '020-3053 7800',
		},
		{
			id: 2,
			iconSrc: `${process.env.PUBLIC_URL}/assets/img/mail-icon.svg`,
			title: 'Send us an email',
			description: 'customercare.jcipl@japfa.com',
		},
		{
			id: 3,
			iconSrc: `${process.env.PUBLIC_URL}/assets/img/location-icon.svg`,
			title: 'Registered office address',
			description:
				'Plot No. 91, Sakore Nagar, Viman Nagar, Pune - 411014',
		},
	];

	return (
		<div className="reachus-contact-deails--wrapper mx-auto max-w-japfaGrid rounded-[20px] px-10 py-12 max-mediumScreen:mx-6 sm:p-20 lg:p-28">
			<motion.h2
				className="relative z-10 mb-6 text-3xl font-extrabold leading-normal text-white md:text-4xl"
				variants={fadeUp}
				initial={'hidden'}
				whileInView={'visible'}
			>
				Contact Information
			</motion.h2>
			<motion.div
				className="relative z-10 flex flex-wrap gap-[40px] sm:gap-20"
				variants={fadeLeft}
				initial={'hidden'}
				whileInView={'visible'}
			>
				{contactDetails.map((item) => (
					<ContactDetails
						key={item.id}
						description={item.description}
						iconSrc={item.iconSrc}
						title={item.title}
					/>
				))}
			</motion.div>
		</div>
	);
};

export default ContactDetailsSection;
