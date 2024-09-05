import { motion } from 'framer-motion';
import AchievementsCard from './AchievementsCard';

const OurAchievements = () => {
	return (
		<div className="mx-auto max-w-japfaGrid max-mediumScreen:px-14 max-lg:px-8 max-sm:pb-[56px] md:pb-[80px] lg:pb-[120px]">
			<h2 className="text-5xl font-extrabold text-black max-md:text-[40px] max-sm:mb-[40px] max-sm:text-[38px] md:mb-[40px] md:text-[40px] lg:mb-[60px] lg:text-[72px]">
				Our Achievements
			</h2>
			<motion.div className="grid grid-cols-12 gap-x-6 lg:gap-x-16 max-md:gap-y-[9px]">
				<div className="col-span-12 max-md:mb-[24px] md:col-span-4">
					<AchievementsCard
						title="For JAPFA India 2019 is ‘TIME FOR EXCUTION’"
						imageSrc={`${process.env.PUBLIC_URL}/assets/img/achievement-1.webp`}
					/>
				</div>
				<div className="col-span-12 max-md:mb-[24px] md:col-span-4">
					<AchievementsCard
						title="For JAPFA India 2019 is ‘TIME FOR EXCUTION’"
						imageSrc={`${process.env.PUBLIC_URL}/assets/img/achievement-1.webp`}
					/>
				</div>
				<div className="col-span-12 max-md:mb-[24px] md:col-span-4">
					<AchievementsCard
						title="For JAPFA India 2019 is ‘TIME FOR EXCUTION’"
						imageSrc={`${process.env.PUBLIC_URL}/assets/img/achievement-1.webp`}
					/>
				</div>
			</motion.div>
		</div>
	);
};

export default OurAchievements;
