import { motion } from 'framer-motion';
import { fadeUp } from '../../../utils/scrollAnimations';

const JapfaBest = () => {
	return (
		<motion.div
			className="flex flex-col items-center justify-center gap-2  text-5xl md:flex-row lg:text-7xl"
			initial="hidden"
			whileInView="visible"
			variants={fadeUp}
		>
			<div className="font-extrabold text-[#CE202F]">JAPFA BEST</div>
			<div className="font-light">brand promise</div>
		</motion.div>
	);
};

export default JapfaBest;
