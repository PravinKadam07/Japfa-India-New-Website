import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import { useEffect, useRef } from "react";

const FoodArrow = () => {
	const lottieRef = useRef(null);

	useEffect(() => {
		// Play as soon as the animation is visible
		lottieRef.current?.playOnShow();

		// Options:
		lottieRef.current?.playOnShow({
			threshold: [0.5],
		});
	}, [lottieRef]);
	return (
		<div className="w-full">
			<DotLottiePlayer
				ref={lottieRef}
				src={`${process.env.PUBLIC_URL}/assets/lottie/food-1.lottie`}
				
			>
				{/* <Controls /> */}
			</DotLottiePlayer>
		</div>
	);
};

export default FoodArrow;
