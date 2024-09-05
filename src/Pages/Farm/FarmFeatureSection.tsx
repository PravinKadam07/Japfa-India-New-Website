import React from 'react';
import ShadowText from '../../Components/ShadowText';
import CustomParagraph from './CustomParagraph';
import CtaWithArrow from '../../Components/CtaWithArrow';
import { fadeLeft, fadeRight, fadeUp } from '../../utils/scrollAnimations';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface FarmFeatureSectionProps {
	mainTitle: string;
	productHighlightsData: {
		image: string;
		description: string;
	}[];
	mainImage: string;
	mainDescription: string;
	hasCta?: boolean;
	ctaText?: string;
	ctaLink?: string;
}

const FarmFeatureSection = ({
	hasCta,
	ctaText,
	mainTitle,
	productHighlightsData,
	mainImage,
	mainDescription,
	ctaLink
}: FarmFeatureSectionProps) => {
	const navigate = useNavigate();
	const navigateTo = (path: string) => {
		navigate(path);
		window.scrollTo(0, 0);
	};
	return (
		<div className="mx-auto max-w-japfaGrid max-mediumScreen:px-14 max-lg:px-8">
			<motion.div
				variants={fadeUp}
				initial="hidden"
				whileInView="visible"
			>
				<ShadowText
					text={mainTitle}
					classes="mb-8 !text-5xl lg:!text-[72px] !text-[60px] farmText"
				/>
			</motion.div>

			<div className="feed-product-highlights">
				<div className="product-highlights">
					{productHighlightsData.map((productHighlight, index) => {
						return (
							<motion.div
								className="product-highlight"
								key={index}
								variants={fadeLeft}
								initial="hidden"
								whileInView="visible"
							>
								<div className="product-highlight-img !min-w-[81px] !max-w-[81px] xl:!min-w-[116px] xl:!max-w-[116px] ">
									<img
										src={`${process.env.PUBLIC_URL}${productHighlight.image}`}
										alt=""
										className="w-full object-contain"
									/>
								</div>
								<div className="product-highlight-description">
									{productHighlight.description}
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
			<div className="mb-32 mt-7 flex items-center justify-between gap-8 max-sm:flex-col sm:items-stretch lg:items-center mediumScreen:max-w-[1274px]">
				<div className="w-1/2 max-w-[566px] max-sm:w-full">
					<motion.img
						src={`${process.env.PUBLIC_URL}${mainImage}`}
						alt=""
						className="w-full sm:h-full lg:h-auto"
						variants={fadeLeft}
						initial="hidden"
						whileInView="visible"
					/>
				</div>
				<motion.div
					className="w-1/2 max-w-[566px] text-xl max-sm:w-11/12"
					variants={fadeRight}
					initial="hidden"
					whileInView="visible"
				>
					<CustomParagraph text={mainDescription} />
					{hasCta && (
						<>
							<div className="mb-6 mt-[40px] h-[1px] w-full bg-black max-sm:mt-12"></div>
							<CtaWithArrow ctaText={ctaText!} ctaLink={ctaLink!} />
						</>
					)}
				</motion.div>
			</div>
		</div>
	);
};

export default FarmFeatureSection;
