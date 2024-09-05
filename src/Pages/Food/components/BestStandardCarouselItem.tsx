import { motion } from 'framer-motion';
import { fade } from '../../../utils/scrollAnimations';

interface CarouselItemProps {
	imgSrc: string;
	title: string;
	description: string;
}
const BestStandardCarouselItem = ({
	imgSrc,
	title,
	description,
}: CarouselItemProps) => {
	return (
		<div className="flex w-full flex-col bg-[#A3222D] text-white md:flex-row min-h-[480px] md:min-h-[400px]">
			{/* Image */}
			<div className="w-full md:w-[40%]">
				<motion.img
					src={imgSrc}
					alt=""
					className="h-full max-h-[440px] object-cover object-top max-md:aspect-video"
					initial="hidden"
					whileInView="visible"
					variants={fade}
				/>
			</div>
			{/* content block */}
			<div className="flex min-h-[312px] w-full flex-col gap-6 px-[24px] pb-[65px] pt-[32px] max-sm:gap-3 md:w-[60%] lg:p-[60px] lg:pb-[95px]">
				<motion.h3
					className="text-[24px] sm:text-[32px] font-extrabold max-sm:leading-tight  lg:text-[40px]"
					initial="hidden"
					whileInView="visible"
					variants={fade}
				>
					{title}
				</motion.h3>
				<motion.p
					className="text-[16px] sm:text-xl"
					initial="hidden"
					whileInView="visible"
					variants={fade}
				>
					{description}
				</motion.p>
			</div>
		</div>
	);
};

export default BestStandardCarouselItem;
