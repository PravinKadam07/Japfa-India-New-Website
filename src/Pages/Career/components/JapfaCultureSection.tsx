import { motion } from 'framer-motion';
import ShadowText from '../../../Components/ShadowText';
import { fade } from '../../../utils/scrollAnimations';
import IndustryStandards from '../../FeedHome/components/IndustryStandards/IndustryStandards';

const JapfaCultureSection = () => {
	const showValuesData = [
		{
			id: 1,
			iconUrl: `/assets/img/career-culture-excellence-icon.svg`,
			title: `Cultivating Excellence`,
			text: `We identify and develop programs that bring out the best in everyone`,
			bgImageClass: 'career-culture-excellence-bg',
		},
		{
			id: 2,
			iconUrl: `/assets/img/career-culture-example-icon.svg`,
			title: `Leading by example`,
			text: `We build and nurture partnerships that align with our strategic goals and values.`,
			bgImageClass: 'career-culture-example-bg',
		},
		{
			id: 3,
			iconUrl: `/assets/img/career-culture-teamwork-icon.svg`,
			title: `Fostering teamwork`,
			text: `We prioritize our customers by delivering innovative and quality products and services.`,
			bgImageClass: 'career-culture-teamwork-bg',
		},
		{
			id: 4,
			iconUrl: `/assets/img/career-culture-bestpractices-icon.svg`,
			title: `Embracing best
            practices`,
			text: `We maintain the highest ethical standards in our supplier relationships to ensure mutual growth.`,
			bgImageClass: 'career-culture-bestpractices-bg',
		},
	];
	return (
		<div className="mx-auto my-24 max-w-japfaGrid max-mediumScreen:px-14 max-lg:px-8 lg:my-[120px]">
			<div className="flex flex-col items-center">
				<motion.h3
					className="text-4xl font-extrabold text-[#EC691F] md:text-[40px] lg:text-7xl"
					variants={fade}
					initial={'hidden'}
					whileInView={'visible'}
				>
					JAPFA
					<ShadowText text="Culture" classes="md:!text-[120px] lg:!text-[200px] farmText" />
				</motion.h3>
				<motion.p
					className="text-3xl text-black md:text-[32px] lg:text-[40px]"
					variants={fade}
					initial={'hidden'}
					whileInView={'visible'}
				>
					Bringing out the best
				</motion.p>
			</div>
			{/* Culture values */}
			<IndustryStandards industryStandardColumns={showValuesData} />
		</div>
	);
};

export default JapfaCultureSection;
