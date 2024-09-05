import { motion } from 'framer-motion';
import DiscoverLottieAnimation from '../../../Components/DiscoverLottieAnimation';
import { fadeUp } from '../../../utils/scrollAnimations';
import CustomParagraph from '../../Farm/CustomParagraph';

const BusinessModel = () => {
	const title = 'Business Model';
	const subtitle = 'Blueprint for growth and experience';
	const description =
		'1971 was the founding year of JAPFA, when it commenced operations in Indonesia with the mission to feed and nourish emerging Asia. We are headquartered in Singapore and employ a force of 40,000+ employees across an integrated network of modern animal farming, processing and distribution facilities of protein staples and packaged food in Indonesia, Vietnam, India, Myanmar, China and Bangladesh. As an industry leader, we’ve pioneered and standardized operations in livestock genetics, feed and farming tech, biosecurity and animal welfare./n/nFor over half a century we’ve learnt, evolved and come to dominate the animal-agro space. Today we lead multiple protein segments by adopting an integrated industrial approach to livestock farming and food production by implementing sustainable practices across the entire value chain.';
	return (
		<div className="mx-auto my-[80px] lg:my-[120px] max-w-japfaGrid max-mediumScreen:px-14 max-lg:px-8">
			<motion.div
				className=""
				variants={fadeUp}
				initial={'hidden'}
				whileInView={'visible'}
			>
				<h3 className="mb-2  text-5xl font-extrabold lg:text-7xl">
					{title}
				</h3>

				<h4 className=" mb-6 text-2xl lg:text-[32px]">{subtitle}</h4>
				<div className="">
					<CustomParagraph text={description} classes="text-[20px] max-lg:text-[16px]" />
				</div>
			</motion.div>
			{/* <motion.div className="mx-auto"
				variants={fadeLeft}
				initial={'hidden'}
				whileInView={'visible'}
				>
				<img
					src={`${process.env.PUBLIC_URL}/assets/img/discover-business-model.svg`}
					alt=""
					className="mt-8 w-11/12"
				/>
			</motion.div> */}
			<DiscoverLottieAnimation />
		</div>
	);
};

export default BusinessModel;
