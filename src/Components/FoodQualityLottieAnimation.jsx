import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import { useEffect, useRef } from "react";

const FoodQualityLottieAnimation = () => {
	const lottieRef = useRef(null);

	useEffect(() => {
		// Play on scroll as soon as the animation is visible
		lottieRef.current?.playOnShow();

		// Options:
		lottieRef.current?.playOnShow({
			// positionCallback: (position) => console.log(position),
			threshold: [0.6],
		});

		// Stop playing on scroll
		
		// lottieRef.current?.stopPlayOnScroll();
	}, [lottieRef]);
	return (
		<div className="relative w-full lg:aspect-video">
			<DotLottiePlayer
				className="h-full w-full"
				ref={lottieRef}
				src={`${process.env.PUBLIC_URL}/assets/lottie/chicken2.lottie`}
				speed={1}
			>
				{/* <Controls /> */}
			</DotLottiePlayer>
		</div>
	);
};

export default FoodQualityLottieAnimation;
