import CustomParagraph from '../../Farm/CustomParagraph';
import CtaWithArrow from '../../../Components/CtaWithArrow';
import { motion } from 'framer-motion';
import { fadeLeft, fadeRight } from '../../../utils/scrollAnimations';

interface ImageWithTitleDescriptionProps {
	data: {
		title: string;
		subtitle?: string;
		gradientText?: string;
		description: string;
		imageSrc?: string;
		hasCta?: boolean;
		ctaLink?: string;
		ctaText?: string;
		orderReverse?: boolean;
	};
	customHeight?: string;
	imageCenter?: boolean;
	parentHeightFull?: boolean;
	imageRadius?: string;
	addBottomSpacing?: boolean;
}
const ImageWithTitleDescription = ({
	data: {
		title,
		subtitle,
		gradientText,
		description,
		imageSrc,
		hasCta,
		ctaLink,
		ctaText,
		orderReverse,
	},
	imageRadius,
	imageCenter,
	customHeight,
	parentHeightFull,
	addBottomSpacing,
}: ImageWithTitleDescriptionProps) => {
	return (
		<div
			className={`mx-auto max-w-japfaGrid pt-[60px] max-mediumScreen:px-14 max-lg:px-8 lg:pt-[120px] ${addBottomSpacing ? 'pb-[60px] lg:pb-[120px]' : ''}`}
		>
			<div
				className={`grid grid-cols-12 items-center ${
					orderReverse && 'justify-items-start md:justify-items-end'
				}`}
			>
				<motion.div
					className={`col-span-12 sm:col-span-6 ${
						orderReverse && 'order-3 mt-7 max-sm:order-1 md:mt-0'
					} ${!imageSrc && '!max-w-7xl md:!col-span-12'}`}
					variants={fadeRight}
					initial={'hidden'}
					whileInView={'visible'}
				>
					<h3 className="mb-2 text-5xl font-extrabold lg:text-7xl">
						{title}
					</h3>

					{subtitle && (
						<h4 className=" mb-6 text-2xl lg:text-[32px]">
							{subtitle}
						</h4>
					)}
					{gradientText && (
						<h4 className="textClipGradientDark mb-6 text-3xl font-extrabold">
							{gradientText}
						</h4>
					)}
					<CustomParagraph
						text={description}
						classes="text-[20px] max-md:text-[16px] max-lg:text-[16px]"
					/>
				</motion.div>

				<div
					className={`col-span-1 hidden sm:block ${
						orderReverse && 'order-2'
					}`}
				></div>
				{imageSrc && (
					<motion.div
						className={`col-span-12 mt-12 flex h-full flex-col items-end justify-between sm:col-span-5 md:mt-0 ${
							orderReverse && 'order-1 max-sm:order-3'
						}`}
						variants={fadeLeft}
						initial={'hidden'}
						whileInView={'visible'}
					>
						<div
							className={`${parentHeightFull ? 'h-full' : 'h-auto'} sm:ml-auto" w-full`}
						>
							<img
								src={imageSrc}
								alt={title}
								className={`w-full object-cover ${imageCenter ? 'object-center' : 'object-right'} ${customHeight && customHeight} ${imageRadius && imageRadius}`}
							/>

							{hasCta && (
								<>
									<div className="mb-6 mt-8 h-[1px] w-full bg-black"></div>

									<CtaWithArrow
										ctaText="JAPFA Global"
										ctaLink={ctaLink ? ctaLink : ''}
									/>
								</>
							)}
						</div>
					</motion.div>
				)}
			</div>
		</div>
	);
};

export default ImageWithTitleDescription;
