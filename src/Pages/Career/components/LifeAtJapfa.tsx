import { motion } from 'framer-motion';
import { fadeLeft, fadeRight } from '../../../utils/scrollAnimations';
import LifeAtJapfaGallery from './LifeAtJapfaGallery';

const LifeAtJapfa = () => {
	return (
		<div id="lifeAtJapfa" className="mt-[80px] md:mt-24 lg:mt-[120px]">
			<div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-10">
				<div className="max-mediumScreen:px-8 mediumScreen:ml-[calc((100vw-1352px)/2)] md:translate-x-24 lg:translate-x-32">
					<motion.img
						src={`${process.env.PUBLIC_URL}/assets/img/lifeatjapfa-text.svg`}
						alt=""
						className=""
						variants={fadeLeft}
						initial={'hidden'}
						whileInView={'visible'}
					/>
				</div>
				<div className="mediumScreeen:max-w-[calc(100vw/2)]">
					<motion.img
						src={`${process.env.PUBLIC_URL}/assets/img/lifeatjapfa.webp`}
						alt=""
						variants={fadeRight}
						initial={'hidden'}
						whileInView={'visible'}
					/>
				</div>
			</div>
			<LifeAtJapfaGallery />
		</div>
	);
};

export default LifeAtJapfa;
