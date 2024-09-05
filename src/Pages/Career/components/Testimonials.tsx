import { motion } from 'framer-motion';
import { fade } from '../../../utils/scrollAnimations';
import Carousel from './Carousel/CareerCarousel';

const Testimonials = () => {
	const sectionTitle = 'Hear from Our JAPFAITES';
	return (
		<div className="bg-[#160700] py-[100px]">
			<div className="mx-auto max-w-japfaGrid max-mediumScreen:px-14 max-lg:px-8">
				<motion.h2
					className="mb-10 max-w-[892px] text-[32px] sm:text-[40px] md:text-7xl font-extrabold not-italic leading-snug text-white"
					variants={fade}
					initial={'hidden'}
					whileInView={'visible'}
				>
					{sectionTitle}
				</motion.h2>
				<Carousel />
			</div>
		</div>
	);
};

export default Testimonials;
