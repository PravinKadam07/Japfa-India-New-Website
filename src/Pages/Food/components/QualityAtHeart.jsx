import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { useEffect, useRef } from "react";
import Slider from "react-slick";
import FoodQualityLottieAnimation from "../../../Components/FoodQualityLottieAnimation";
// import videoUrl from "./food-quality-scene.mp4";

const QualityAtHeart = () => {
	const playerRef = useRef(null);
	const settings = {
		className: "center",
		dots: true,
		arrows: false,
		centerMode: true,
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 1,
		speed: 500,
	};
	useEffect(() => {
		if (playerRef) playerRef.playbackRate = 2;
	}, []);

	return (
		<>
			<div
				style={{
					background:
						"linear-gradient(180deg, #CE202F 0%, #75111A 100%)",
				}}
				className="max-md:hidden"
			>
				<FoodQualityLottieAnimation />
				{/* <video width="100%" autoPlay loop  ref={playerRef} className="max-w-[1280px] mx-auto">
					<source
						src={`${process.env.PUBLIC_URL}/assets/lottie/food-quality-scene.mp4`}
						type="video/mp4"
					/>
				</video> */}
				{/* <Plyr
					ref={plyrRef}
					className="aspect-video max-h-full"
					source={{
						type: "video",
						sources: [
							{
								src: videoUrl,
							},
						],
					}}
					options={{
						hideControls: true,
					}}
				/> */}
			</div>

			<div
				style={{
					background:
						"linear-gradient(180deg, #CE202F 0%, #75111A 100%)",
				}}
				className="md:hidden overflow-x-hidden"
			>
				<img
					src={`${process.env.PUBLIC_URL}/assets/img/quality-heart-text-mobile.svg`}
					alt="Quality is at the heart of everything we do"
					className="mx-auto h-full py-12"
				/>

				<div className="pb-10">
					<Slider {...settings} className="sliderContainer max-w-full food-page-slick">
						<div className="px-[6px] py-6 ">
							<img
								src={`${process.env.PUBLIC_URL}/assets/img/quality-heart-mobile-frame1.svg`}
								alt="Japfa Best Banner"
								className="w-[100%]"
							/>
						</div>
						<div className="px-[6px] py-6">
							<img
								src={`${process.env.PUBLIC_URL}/assets/img/quality-heart-mobile-frame2.svg`}
								alt="Japfa Best Banner"
								className="w-[100%]"
							/>
						</div>
						<div className="px-[6px] py-6">
							<img
								src={`${process.env.PUBLIC_URL}/assets/img/quality-heart-mobile-frame3.svg`}
								alt="Japfa Best Banner"
								className="w-[100%]"
							/>
						</div>
						<div className="px-[6px] pb-5  pt-2">
							<img
								src={`${process.env.PUBLIC_URL}/assets/img/quality-heart-mobile-frame4.svg`}
								alt="Japfa Best Banner"
								className="w-[100%]"
							/>
						</div>
						<div className="px-[6px] py-6">
							<img
								src={`${process.env.PUBLIC_URL}/assets/img/quality-heart-mobile-frame5.svg`}
								alt="Japfa Best Banner"
								className="w-[100%]"
							/>
						</div>
						<div className="px-[6px] py-6">
							<img
								src={`${process.env.PUBLIC_URL}/assets/img/quality-heart-mobile-frame6.svg`}
								alt="Japfa Best Banner"
								className="w-[100%]"
							/>
						</div>
					</Slider>
				</div>

				<img
					src={`${process.env.PUBLIC_URL}/assets/img/quality-heart-chicken-mobile.svg`}
					alt="Quality is at the heart of everything we do"
					className="mx-auto mt-2 w-full"
				/>
			</div>
		</>
	);
};

export default QualityAtHeart;
