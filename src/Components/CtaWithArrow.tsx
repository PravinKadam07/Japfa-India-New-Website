import React from 'react';
interface CtaWithArrowProps {
	ctaText: string;
	ctaLink: string;
}
const CtaWithArrow = ({ ctaText, ctaLink }: CtaWithArrowProps) => {
	return (
		<div className="section-cta">
			<div className="cta-block" onClick={() => window.open(ctaLink)}>
				<span>{ctaText}</span>{' '}
				<img
					src={`${process.env.PUBLIC_URL}/assets/img/icons/next-arrow-circle.svg`}
					alt=""
				/>
			</div>
		</div>
	);
};

export default CtaWithArrow;
