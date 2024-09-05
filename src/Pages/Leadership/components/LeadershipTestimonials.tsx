import CareerCarouselActiveCard from '../../Career/components/Carousel/CareerCarouselActiveCard';
import { Carousel } from 'react-responsive-carousel';
import '../Leadership.css';
import { useEffect, useState } from 'react';
import { fetchLeadershipTestimonials } from '../../../utils/fetchFromApi';

const LeadershipTestimonials = () => {
	const [testimonials, setTestimonials] = useState([]);

	useEffect(() => {
		fetchLeadershipTestimonials()
			.then((data) => {
				setTestimonials(
					data.map((item: any) => ({
						imageSrc: item.acf['profile_image'],
						description: item.acf['statement'],
						name: item.acf.name,
						dept: item.acf.designation,
					})),
				);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<section className="py-[80px] max-mediumScreen:px-14 max-sm:px-8 lg:py-[120px] ">
			<div className="mx-auto max-w-japfaGrid  justify-between rounded-[10px] bg-[#1D0900] p-5 pb-28 text-white max-lg:flex-col max-lg:gap-8 max-sm:py-[40px] md:flex md:px-8 md:py-12 lg:gap-8 lg:px-12 lg:py-24 lg:py-[60px] xl:gap-12 xl:p-24 xl:py-[60px]">
				<p className="mb-8 w-full text-[32px] font-light leading-[140%] md:mb-0 md:text-[40px] lg:w-[35%] lg:text-[48px] xl:mt-[32px] xl:text-[72px]">
					What our leadership has to say
				</p>

				<div className="relative my-auto flex flex-col items-end  gap-6 max-lg:w-full lg:w-[60%]">
					{testimonials.length > 0 && (
						<Carousel
							autoPlay={true}
							interval={3000}
							infiniteLoop={true}
							swipeable={false}
							showArrows={false}
							showStatus={false}
							showThumbs={false}
							showIndicators={false}
							stopOnHover={true}
							className="relative w-full overflow-visible"
							renderArrowPrev={(
								onClickHandler,
								hasPrev,
								label,
							) => (
								<div
									className="prevSlide absolute bottom-0 right-[5rem] z-10"
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
							renderArrowNext={(
								onClickHandler,
								hasNext,
								label,
							) => (
								<div
									className="nextSlide absolute bottom-0 right-[0.25rem] z-10"
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
							{testimonials.map((testimonial, index) => (
								<CareerCarouselActiveCard data={testimonial} />
							))}
						</Carousel>
					)}
				</div>
			</div>
		</section>
	);
};

export default LeadershipTestimonials;
