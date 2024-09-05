import { Dialog, Transition } from "@headlessui/react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { Fragment, useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { fetchHomePageBannerData, modifyPath } from "../../utils/fetchFromApi";
import "./MainBannerCarousel.css";

// const carouselItems = [
// 	{
// 		id: 1,
// 		title: "Empowering animal agriculture",
// 		content: "Packaging the concrete solution for Feed, Farm, and Food",
// 		imgSrcA: "img/banner1-a.webp",
// 		imgSrcB: "img/banner1-b.webp",
// 		buttonText: "Watch Video",
// 	},
// 	{
// 		id: 2,
// 		title: "Empowering animal agriculture",
// 		content: "Packaging the concrete solution for Feed, Farm, and Food",
// 		imgSrcA: "img/banner1-a.webp",
// 		imgSrcB: "img/banner1-b.webp",
// 		buttonText: "Watch Video",
// 	},
// 	{
// 		id: 3,
// 		title: "Empowering animal agriculture",
// 		content: "Packaging the concrete solution for Feed, Farm, and Food",
// 		imgSrcA: "img/banner1-a.webp",
// 		imgSrcB: "img/banner1-b.webp",
// 		buttonText: "Watch Video",
// 	},
// ];

const VideoBanner = () => {
	const videoOptions = undefined;
	const ref = useRef(null);

	// const plyrProps = {
	// 	source: "https://13.200.190.169/wp-content/uploads/2023/12/time_circles_-_15086-540p.mp4",
	// 	options: {
	// 		controls: [
	// 			"play",
	// 			"progress",
	// 			"current-time",
	// 			"mute",
	// 			"volume",
	// 			"fullscreen",
	// 		],
	// 		quality: {
	// 			default: 576,
	// 			options: [4320, 2880, 2160, 1440, 1080, 720, 576, 540],
	// 		},
	// 	},
	// };
	const [carouselItems, setCarouselItems] = useState([]);

	useEffect(() => {
		fetchHomePageBannerData()
			.then((data) => {
				const tempData = data.map((item, index) => ({
					id: index,
					title: item.acf["title"],
					content: item.acf["subtitle"],
					imgSrcA: item.acf["image-1"] && item.acf["image-1"],

					imgSrcB: item.acf["image-2"] && item.acf["image-2"],
					buttonText: "Watch Video",

					imageAMobile:
						item.acf["image_1_mobile"] &&
						item.acf["image_1_mobile"],
					imageBMobile:
						item.acf["image_2_mobile"] &&
						item.acf["image_2_mobile"],
				}));
				setCarouselItems(tempData);
			})
			.catch((err) => console.log(err));
	}, []);
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}
	const slideRef = useRef(null);
	const [marginLeft, setMarginLeft] = useState(0);

	useEffect(() => {
		if (slideRef.current) {
			setMarginLeft(slideRef.current.getBoundingClientRect().left);
		}
	}, [slideRef]);

	return (
		<>
			<section className="main-banner vertical-lines video-banner">
				<Carousel
					className="h-full"
					autoPlay={false}
					infiniteLoop={true}
					swipeable={false}
					interval={4000}
					showArrows={false}
					showIndicators={true}
					showStatus={false}
					showThumbs={false}
					renderArrowPrev={(onClickHandler) => (
						<div
							className="prevSlide absolute bottom-6  z-10 cursor-pointer  md:bottom-3 mediumScreen:bottom-10 2xl:bottom-16"
							style={{ left: marginLeft + 30 }}
							onClick={onClickHandler}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="60"
								height="60"
								viewBox="0 0 60 60"
								fill="none"
								className="rotate-180 cursor-pointer"
							>
								<rect
									width="60"
									height="60"
									rx="30"
									fill="white"
									fillOpacity="0.04"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M33.0103 22.3182L39.6925 29.2318C40.1025 29.6561 40.1025 30.3439 39.6925 30.7682L33.0103 37.6818C32.6003 38.1061 31.9354 38.1061 31.5254 37.6818C31.1153 37.2576 31.1153 36.5697 31.5254 36.1454L36.4151 31.0864H21.05C20.4701 31.0864 20 30.6 20 30C20 29.4 20.4701 28.9136 21.05 28.9136H36.4151L31.5254 23.8546C31.1153 23.4303 31.1153 22.7424 31.5254 22.3182C31.9354 21.8939 32.6003 21.8939 33.0103 22.3182Z"
									fill="url(#paint0_linear_10015_7206)"
								/>
								<defs>
									<linearGradient
										id="paint0_linear_10015_7206"
										x1="30"
										y1="22"
										x2="30"
										y2="38"
										gradientUnits="userSpaceOnUse"
									>
										<stop stopColor="#FFBA93" />
										<stop offset="1" stopColor="#FF9356" />
									</linearGradient>
								</defs>
							</svg>
						</div>
					)}
					renderArrowNext={(onClickHandler, hasNext, label) => (
						<div
							className="nextSlide lg: absolute bottom-6 z-10  md:bottom-3  mediumScreen:bottom-10 2xl:bottom-16"
							style={{ left: marginLeft + 230 }}
							onClick={onClickHandler}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="60"
								height="60"
								viewBox="0 0 60 60"
								fill="none"
								className="cursor-pointer"
							>
								<rect
									width="60"
									height="60"
									rx="30"
									fill="white"
									fillOpacity="0.04"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M33.0103 22.3182L39.6925 29.2318C40.1025 29.6561 40.1025 30.3439 39.6925 30.7682L33.0103 37.6818C32.6003 38.1061 31.9354 38.1061 31.5254 37.6818C31.1153 37.2576 31.1153 36.5697 31.5254 36.1454L36.4151 31.0864H21.05C20.4701 31.0864 20 30.6 20 30C20 29.4 20.4701 28.9136 21.05 28.9136H36.4151L31.5254 23.8546C31.1153 23.4303 31.1153 22.7424 31.5254 22.3182C31.9354 21.8939 32.6003 21.8939 33.0103 22.3182Z"
									fill="url(#paint0_linear_10015_7206)"
								/>
								<defs>
									<linearGradient
										id="paint0_linear_10015_7206"
										x1="30"
										y1="22"
										x2="30"
										y2="38"
										gradientUnits="userSpaceOnUse"
									>
										<stop stopColor="#FFBA93" />
										<stop offset="1" stopColor="#FF9356" />
									</linearGradient>
								</defs>
							</svg>
						</div>
					)}
				>
					<div className="videobannerslide flex flex-col items-center md:flex-row">
						<div className="h-2/6 w-full md:h-full md:w-1/2">
							<video
								src={`${process.env.PUBLIC_URL}/assets/banner-video.mp4`}
								autoPlay
								className="h-full w-full object-cover"
								muted
							></video>
						</div>
						<div className="w-full md:w-1/2">
							<div className="mx-auto flex max-w-[566px] -translate-y-7 flex-col gap-[16px] p-8 md:gap-[24px] md:p-10">
								<div
									className="animate-fade-right text-[72px]  font-bold leading-tight text-white  max-lg:text-[49px] max-md:mb-4 max-md:text-[40px] max-sm:text-[35px]"
									ref={slideRef}
								>
									Empowering animal agriculture
									<span className="textClipGradient inline-block -translate-x-2 translate-y-2 !font-extralight">
										/
									</span>
								</div>
								<p className="animate-fade-right text-2xl text-white max-md:block">
									Packaging the concrete solution for Feed,
									Farm, and Food
								</p>
								<button
									className="flex w-fit animate-fade-left items-center justify-center gap-2 bg-[#EC691F] px-6 py-5 text-white"
									onClick={openModal}
								>
									Watch Video
								</button>
							</div>
						</div>
					</div>
				</Carousel>
			</section>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black/25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<div className="">
										<button
											type="button"
											className="mb-2 ml-auto flex justify-end"
											onClick={closeModal}
										>
											<img
												src={`${process.env.PUBLIC_URL}/assets/img/icons/close-icon.svg`}
												alt=""
												width={"24px"}
												height={"24px"}
											/>
										</button>
										<Plyr
											ref={ref}
											source={{
												type: "video",
												sources: [
													{
														src: "hwclvI89bMI",
														provider: "youtube",
													},
												],
											}}
											options={{
												clickToPlay: true,
											}}
										/>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default VideoBanner;
