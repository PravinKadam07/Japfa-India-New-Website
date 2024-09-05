import { motion } from 'framer-motion';
import React from 'react';
import { fadeLeft, fadeRight } from '../../utils/scrollAnimations';
import ContactForm from './components/ContactForm';

const ContactFormSection = () => {
	return (
		<div className="mx-auto flex max-w-japfaGrid justify-between py-[80px] max-mediumScreen:px-14 max-lg:px-8 max-md:flex-col lg:py-[120px]">
			<motion.div className="w-full md:w-4/12"
				variants={fadeLeft}
				initial={'hidden'}
				whileInView={'visible'}
				>
				<h3 className="mb-6 max-w-[425px] text-5xl font-extrabold not-italic text-black lg:text-7xl">
					Connect with us
				</h3>
				<p className="max-w-[447px] text-xl font-normal not-italic leading-8 text-black">
					Your gateway to seamless communication with JAPFA India.
					Reach out for inquiries or potential collaborations.
				</p>
			</motion.div>
			<motion.div className="w-full max-md:mt-12 md:w-7/12"
				variants={fadeRight}
				initial={'hidden'}
				whileInView={'visible'}
				>
				<ContactForm />
			</motion.div>
		</div>
	);
};

export default ContactFormSection;
