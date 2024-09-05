import { motion } from 'framer-motion';
import { fadeLeft } from '../../../utils/scrollAnimations';
import '../MissionVision.css';

const GuidingPhilosophy = () => {
	return (
		<motion.div className="relative mx-auto max-w-japfaGrid max-mediumScreen:mx-14 max-lg:mx-8"
			variants={fadeLeft}
			initial={'hidden'}
			whileInView={'visible'}
			>
			<picture>
				<source
					media="(max-width: 552px)"
					srcSet={`${process.env.PUBLIC_URL}/assets/img/mv-guiding-philosophy-mobile.webp`}
				/>
				<source
					media="(max-width: 767px)"
					srcSet={`${process.env.PUBLIC_URL}/assets/img/mv-guiding-philosophy-tablet.webp`}
				/>
				<source
					media="(min-width: 768px)"
					srcSet={`${process.env.PUBLIC_URL}/assets/img/mv-guiding-philosophy-desktop.webp`}
				/>
				<img
					src={`${process.env.PUBLIC_URL}/assets/img/mv-guiding-philosophy-desktop.webp`}
					alt="Make Good. Always."
					className="w-full"
				/>
			</picture>
		</motion.div>
	);
};

export default GuidingPhilosophy;
