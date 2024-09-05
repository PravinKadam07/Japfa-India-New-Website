import { motion } from 'framer-motion';
import { fadeUp, zoomIn } from '../../../utils/scrollAnimations';
interface SectionWithOnlyImageProps {
	imageFileName: string;
	wrapperBackground?: string;
	fullHeightImage?: boolean;
}
const SectionWithOnlyImage = ({
	imageFileName,
	wrapperBackground,
	fullHeightImage,
}: SectionWithOnlyImageProps) => {
	return (
		<div
			className={
				fullHeightImage ? 'max-h-[1000px] lg:h-screen' : 'h-auto'
			}
			style={wrapperBackground ? { background: wrapperBackground } : {}}
		>
			<picture>
				<source
					media="(max-width: 768px)"
					srcSet={`${process.env.PUBLIC_URL}/assets/img/${imageFileName.replace('desktop.webp', 'tablet.webp')}`}
				/>
				<source
					media="(max-width: 690px)"
					srcSet={`${process.env.PUBLIC_URL}/assets/img/${imageFileName.replace('desktop.webp', 'mobile.webp')}`}
				/>
				<motion.img
					initial="hidden"
					whileInView="visible"
					variants={fadeUp}
					src={`${process.env.PUBLIC_URL}/assets/img/${imageFileName}`}
					alt={imageFileName}
					className={`mx-auto ${
						fullHeightImage ? 'h-full' : 'w-full'
					} xl:min-h-[540px]`}
					loading="lazy"
				/>
			</picture>
		</div>
	);
};

export default SectionWithOnlyImage;
