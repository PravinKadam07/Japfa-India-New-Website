import { useEffect, useRef } from 'react';
import ApproachStepCard from './ApproachStepCard';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

interface ApproachStepsProps {
	cardsData: {
		id: number;
		title: string;
		description?: string;
		imageSrc?: string;
	}[];
}

const ApproachStepsGSAP = ({ cardsData }: ApproachStepsProps) => {
	const containerRef = useRef(null);
	// useEffect(() => {
	// 	const ctx = gsap.context(() => {
	// 		const tl = gsap.timeline({
	// 			scrollTrigger: {
	// 				trigger: '.approach-steps-parent',
	// 				pin: true,
	// 				start: 'top 120px',
	// 				end: 'bottom 120px',
	// 				scrub: true,
	// 				markers: true,
	// 				// @ts-ignore
	// 				ease: 'linear'
	// 			},
	// 		});
	// 		tl.to('.approach-step-card', {
	// 			y: -100,
	// 			marginBottom: 0,
	// 			stagger: 0.2,
	// 		});
	// 	});
	// 	return () => ctx.revert();
	// }, []);
	return (
		<div
			className="approach-steps-parent approach-step-card-height grid grid-cols-1 justify-center gap-[1vh]"
			ref={containerRef}
		>
			{cardsData.map((item, index) => (
				<ApproachStepCard
					key={item.id}
					title={item.title}
					description={item.description}
					imageSrc={item.imageSrc}
					index={index}
				/>
			))}
		</div>
	);
};

export default ApproachStepsGSAP;
