import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import { useEffect, useRef } from "react";

const FeedArrow2
 = () => {
	const lottieRef = useRef(null);

	useEffect(() => {
		// Play as soon as the animation is visible
		lottieRef.current?.playOnShow();

		// Options:
		lottieRef.current?.playOnShow({
			threshold: [0.3],
		});

		// Stop playing on scroll
		// lottieRef.current?.stopPlayOnShow();
	}, [lottieRef]);
	return (
		<div className="w-full">
			<DotLottiePlayer
				ref={lottieRef}
				src={`${process.env.PUBLIC_URL}/assets/lottie/feed-2.lottie`}
				loop
				speed={1.2}
			>
				{/* <Controls /> */}
			</DotLottiePlayer>
		</div>
	);
};

export default FeedArrow2;
