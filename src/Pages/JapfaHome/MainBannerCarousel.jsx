import { Dialog, Transition } from "@headlessui/react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
// import ReactPlayer from "react-player";
import { Fragment, useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { fetchHomePageBannerData, modifyPath } from "../../utils/fetchFromApi";
import "./MainBannerCarousel.css";
import VideoBanner from "./VideoBanner";

// import VideoBanner from "./VideoBanner";

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

const MainBannerCarousel = () => {
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
	const [autoplay, setAutoplay] = useState(true);

	useEffect(() => {
		fetchHomePageBannerData()
			.then((data) => {
				const tempData = data.map((item, index) => ({
				
					id: index,
					title: item.acf["title"],
					content: item.acf["subtitle"],
					imgSrcA: item.acf["image-1"]
						? item.acf["image-1"]
						: `${process.env.PUBLIC_URL}/assets/img/banner1-a.webp`,
					imgSrcB: item.acf["image-2"]
						? item.acf["image-2"]
						: `${process.env.PUBLIC_URL}/assets/img/banner1-b.webp`,
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
		setAutoplay(true);
	}

	function openModal() {
		setIsOpen(true);
		setAutoplay(false);
	}

	return (
		<>
			<section className="main-banner vertical-lines reduceBgOpacity">
				{carouselItems.length > 0 && (
					<Carousel
						autoPlay={autoplay}
						infiniteLoop={true}
						swipeable={false}
						interval={5000}
						showIndicators={true}
						showStatus={false}
						showThumbs={false}
						stopOnHover={false}
						renderArrowPrev={(onClickHandler) => (
							<div
								className="prevSlide absolute bottom-6 left-[10%] z-10 cursor-pointer sm:left-[20%] md:bottom-3 md:left-[65%] lg:left-[70%] mediumScreen:bottom-10 2xl:bottom-16"
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
											<stop
												offset="1"
												stopColor="#FF9356"
											/>
										</linearGradient>
									</defs>
								</svg>
							</div>
						)}
						renderArrowNext={(onClickHandler, hasNext, label) => (
							<div
								className="nextSlide absolute bottom-6 right-[10%] z-10 sm:right-[20%] md:bottom-3 md:left-[90%] mediumScreen:bottom-10 2xl:bottom-16"
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
											<stop
												offset="1"
												stopColor="#FF9356"
											/>
										</linearGradient>
									</defs>
								</svg>
							</div>
						)}
					>
						{carouselItems.map((item) => (
							<div
								className="item h-full pt-14 max-md:pt-5"
								key={item.id}
							>
								<div className="flex h-full flex-col gap-16 max-md:gap-0 md:justify-between">
									{" "}
									{/* slider row 1 */}
									<div className="flex items-center justify-end gap-10 max-md:flex-col max-md:items-end">
										<div className="flex w-7/12 flex-col max-lg:w-6/12 max-md:w-full max-md:items-center max-md:px-8">
											<div className="max-w-[980px] animate-fade-right text-[72px] font-bold leading-tight  text-white max-xl:text-[72px] max-lg:pl-6 max-lg:text-[49px] max-md:mb-4 max-md:pl-0 max-md:text-center max-md:text-[40px] max-sm:text-[35px] semiMediumScreen:text-[88px]">
												{item.title}{" "}
												{/* <span className="textClipGradient inline-block -translate-x-2 translate-y-2 !font-extralight">
													/
												</span> */}
											</div>
											<p className="hidden animate-fade-right text-center text-2xl text-white max-md:block">
												{item.content}
											</p>
										</div>

										<div className="w-4/12 max-[1920px]:max-w-[460px] max-lg:w-5/12 max-md:w-8/12 max-sm:w-10/12">
											<img
												src={`${modifyPath(item.imgSrcA)}`}
												alt=""
												className="h-[200px] animate-fade-left rounded-[40px_0px_0px_0px] object-cover sm:h-[250px] md:h-[280px] md:rounded-[80px_0px_0px_80px] xl:h-[320px]"
											/>
										</div>
									</div>
									{/* slider row 2 */}
									<div className="flex justify-start gap-16 max-md:flex-col">
										<div className="flex w-7/12 max-md:w-full">
											<picture className="w-full">
												{item.imageBMobile && (
													<source
														media="(max-width: 767px)"
														srcSet={`${modifyPath(item.imageBMobile)}`}
													/>
												)}
												<img
													src={`${modifyPath(item.imgSrcB)}`}
													alt=""
													className="h-[240px] animate-fade-right object-cover sm:h-[290px]  md:h-[320px] lg:h-full"
												/>
											</picture>
										</div>
										<div className="flex w-4/12 max-md:w-full">
											<div className="mx-auto flex flex-col gap-8 pb-[90px] text-white max-md:-translate-y-4 max-md:transform">
												<p className="animate-fade-left text-[32px] max-lg:text-2xl max-md:hidden">
													{item.content}
												</p>
												<button
													className="watchVideoButton flex w-fit animate-fade-left items-center justify-center gap-2 bg-[#EC691F] px-6 py-5"
													onClick={openModal}
												>
													{item.buttonText}
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
						{/* <div className="videobannerslide flex flex-col items-center md:flex-row">
							<div className="h-2/6 w-full md:h-full md:w-1/2">
								<video
									src={`https://www.japfaindia.com/Japfa-India-Corporate-Video-Trailer.mp4`}
									autoPlay
									className="h-full w-full object-cover"
									loop
									muted
								></video>
							</div>
							<div className="w-full md:w-1/2">
								<div className="mx-auto flex max-w-[566px] -translate-y-7 flex-col gap-[16px] p-8 md:gap-[24px] md:p-10">
									<div className="animate-fade-right text-[72px]  font-bold leading-tight text-white  max-lg:text-[49px] max-md:mb-4 max-md:text-[40px] max-sm:text-[35px]">
										Empowering animal agriculture
									</div>
									<p className="animate-fade-right text-2xl text-white max-md:block">
										Packaging the concrete solution for
										Feed, Farm, and Food
									</p>
									<button
										className="flex w-fit animate-fade-left items-center justify-center gap-2 bg-[#EC691F] px-6 py-5 text-white"
										onClick={openModal}
									>
										Watch Video
									</button>
								</div>
							</div>
						</div> */}
					</Carousel>
				)}
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

export default MainBannerCarousel;
