import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import { useEffect, useRef } from "react";

const DiscoverLottieAnimation = () => {
	const lottieRef = useRef(null);

	useEffect(() => {
		// Play on scroll as soon as the animation is visible
		lottieRef.current?.playOnScroll();

		// Options:
		lottieRef.current?.playOnScroll({
			segments: [15, 700],
			threshold: [0.2, 1],
		});

		// Stop playing on scroll
		// lottieRef.current?.stopPlayOnScroll();
	}, [lottieRef]);
	return (
		<div className="relative mx-auto mb-[120px] w-full lg:w-[80%]">
			<DotLottiePlayer
				ref={lottieRef}
				src={`${process.env.PUBLIC_URL}/assets/lottie/discover-page-animation.lottie`}
				loop
			>
				{/* <Controls /> */}
			</DotLottiePlayer>
		</div>
	);
};

export default DiscoverLottieAnimation;
