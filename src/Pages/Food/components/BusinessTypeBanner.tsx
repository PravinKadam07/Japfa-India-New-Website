import { fadeLeft, fadeRight, fadeUp } from '../../../utils/scrollAnimations';
import { motion } from 'framer-motion';
interface BusinessTypeBannerProps {
	imageSrc: string;
	title?: string;
	subtitle?: string;
	imageOutsideGrid?: boolean;
	imageAlign?: 'left' | 'right';
}
const BusinessTypeBanner = ({
	imageSrc,
	title,
	subtitle,
	imageOutsideGrid,
	imageAlign,
}: BusinessTypeBannerProps) => {
	return (
		<div className="my-24 xl:my-[120px]">
			{title && subtitle && (
				<div className="mx-auto mb-20 max-w-japfaGrid max-mediumScreen:px-14 max-lg:px-8">
					<div className="mb-10 flex flex-col gap-5 md:mb-20">
						<motion.div
							className="text-5xl font-extrabold text-[#1E140F] lg:text-7xl"
							initial="hidden"
							whileInView="visible"
							variants={fadeUp}
						>
							{title}
						</motion.div>
						<motion.div
							className="max-w-[725px] text-xl text-[#1E140F] md:text-2xl"
							initial="hidden"
							whileInView="visible"
							variants={fadeUp}
						>
							{subtitle}
						</motion.div>
					</div>
					{!imageOutsideGrid && (
						<div className="w-full">
							<motion.img
								src={imageSrc}
								alt=""
								className="mx-auto w-full object-contain"
								initial="hidden"
								whileInView="visible"
								variants={fadeRight}
							/>
						</div>
					)}
				</div>
			)}
			{imageOutsideGrid && imageAlign === 'right' && (
				<div className="">
					<motion.img
						src={imageSrc}
						alt=""
						className="ml-auto w-full max-w-japfaGrid object-contain"
						initial="hidden"
						whileInView="visible"
						variants={fadeRight}
					/>
				</div>
			)}
			{imageOutsideGrid && imageAlign === 'left' && (
				<div className="">
					<motion.img
						src={imageSrc}
						alt=""
						className="mr-auto w-full max-w-japfaGrid object-contain"
						initial="hidden"
						whileInView="visible"
						variants={fadeLeft}
					/>
				</div>
			)}
		</div>
	);
};

export default BusinessTypeBanner;
