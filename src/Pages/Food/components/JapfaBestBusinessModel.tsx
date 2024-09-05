import { motion } from 'framer-motion';
import FoodLottieAnimation from '../../../Components/FoodLottieAnimation';
import { fadeUp } from '../../../utils/scrollAnimations';

const JapfaBestBusinessModel = () => {
	return (
		<div className="mx-auto max-w-japfaGrid max-mediumScreen:px-14 max-lg:px-8">
			<motion.h2
				className="text-5xl font-extrabold text-black lg:text-7xl"
				initial="hidden"
				whileInView="visible"
				variants={fadeUp}
			>
				JAPFA BEST Business Model
			</motion.h2>
			<div className="mt-14 lg:mt-20">
				{/* <img
					src={`${process.env.PUBLIC_URL}/assets/img/food-business-model.svg`}
					alt=""
				/> */}
				<FoodLottieAnimation />
				
			</div>
		</div>
	);
};

export default JapfaBestBusinessModel;
