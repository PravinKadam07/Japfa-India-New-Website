import React, { useState, Fragment, useRef } from 'react';
import { motion } from 'framer-motion';
import {
	fetchCareerLifeAtJapfa,
	fetchHomePageTestimonialData,
	modifyPath,
} from '../../utils/fetchFromApi';
import './GrowJapfaSection.css';
import { fadeLeft, fadeUp, fadeRight } from '../../utils/scrollAnimations';
import { useNavigate } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import Plyr from 'plyr-react';

const sectionData = {
	title: 'Grow with JAPFA',
	description:
		"At JAPFA India, our primary focus is on our people, and we dedicate significant effort to nurture and support our workforce. As a tight-knit community of 'JAPFA-ites,' we provide ample chances for career advancement, while also enhancing diverse skill sets and safeguarding the well-being of our employees and their families.",
};

const employeesDummy = [
	{
		id: 1,
		imgSrc: `${process.env.PUBLIC_URL}/assets/img/lifeatjapfa-home-1.webp`,
		altText: 'Employee 1',
		apiData: false,
	},
	{
		id: 2,
		imgSrc: `${process.env.PUBLIC_URL}/assets/img/lifeatjapfa-home-2.webp`,
		altText: 'Employee 2',
		apiData: false,
	},
];

const GrowJapfaSection = () => {
	const navigate = useNavigate();
	const navigateTo = (path: string) => {
		navigate(path);
		window.scrollTo(0, 0);
	};
	interface TestimonialState {
		'testimonial-name': string;
		'testimonial-profile-img': string;
		'testimonial-statement': string;
		'testimonial-designation': string;
	}
	interface lifeatjapfaState {
		id: number;
		imgSrc: string;
		altText: string;
		apiData?: boolean;
	}

	const initialState: TestimonialState = {
		'testimonial-name': 'Vijay Sharma',
		'testimonial-profile-img':
			'https://japfaindia.in/wp-content/uploads/2023/12/image-23.png',
		'testimonial-statement':
			'Well, I have supportive colleagues and a positive work environment. It’s fun coming to work each day.',
		'testimonial-designation': 'Junior Analyst',
	};

	const [testimonial, setTestimonial] =
		React.useState<TestimonialState>(initialState);
	const [lifeatjapfa, setlifeatjapfa] =
		useState<lifeatjapfaState[]>(employeesDummy);
	React.useEffect(() => {
		fetchHomePageTestimonialData()
			.then((data) => {
				const homepageTestimonial = data.find(
					(item: any) => item.acf['testimonial-type'] === 'homepage',
				);
				console.log(homepageTestimonial);
				if (homepageTestimonial) {
					setTestimonial(homepageTestimonial.acf);
				}
			})
			.catch((error) =>
				console.error('Error fetching testimonial:', error),
			);

		fetchCareerLifeAtJapfa()
			.then((data) => {
				console.log(data);
				setlifeatjapfa(
					data
						.filter(
							(item: any) => item.acf['render-at'] === 'homepage',
						)
						.map((item: any, index: number) => {
							const returnObject = {
								id: index + 1,
								imgSrc: item.acf.image,
								altText: `image${index}`,
								apiData: true,
							};
							return returnObject;
						}),
				);
				console.log(lifeatjapfa);
			})
			.catch((err) => console.log(err));
	}, []);

	const profile = {
		title: ' Come, make a difference to our initiatives and contributing to bring positive change in the world',
		buttonText: 'Read Story',
		buttonLink: '#',
		exploreText: 'Explore Openings',
		exploreLink: '#',
		profileQuote: `${testimonial['testimonial-statement']}`,
		profileName: `${testimonial['testimonial-name']}, ${testimonial['testimonial-designation']}`,
	};

	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}
	return (
		<>
			<section className="grow-japfa-top-padding grow-japfa">
				<div className="mx-auto max-w-[1156px] max-mediumScreen:px-14 max-lg:px-8">
					<div className="grow-japfa-container-fluid">
						<div className="row">
							<div className="col-12">
								<motion.div
									className="grow-japfa-title"
									variants={fadeUp}
									initial="hidden"
									whileInView="visible"
								>
									{sectionData.title}
								</motion.div>

								<motion.div
									className="grow-japfa-desc"
									variants={fadeLeft}
									initial="hidden"
									whileInView="visible"
								>
									<span>{sectionData.description}</span>
								</motion.div>

								<div className="grow-japfa-blocks">
									<motion.div
										className="grow-japfa-left"
										variants={fadeLeft}
										initial="hidden"
										whileInView="visible"
									>
										{lifeatjapfa.map((item, index) => (
											<img
												key={item.id}
												src={
													item.apiData
														? modifyPath(
																item.imgSrc,
															)
														: item.imgSrc
												}
												className="grow-japfa-img1"
												alt={item.altText}
											/>
										))}
										<div className="grow-japfa-play">
											<span>Life @ JAPFA India</span>
											<img
												src={`${process.env.PUBLIC_URL}/assets/img/icons/play.svg`}
												className="img-fluid cursor-pointer"
												alt=""
												onClick={openModal}
											/>
										</div>
									</motion.div>
									<motion.div
										className="grow-japfa-right"
										variants={fadeRight}
										initial="hidden"
										whileInView="visible"
									>
										<div className="grow-japfa-right-row gap-7">
											<div className="right-row-title">
												{profile.title}
											</div>
											<div className="right-row-footer">
												<button
													onClick={() =>
														navigateTo('/career')
													}
												>
													{profile.buttonText}
												</button>
												<div className="right-row-footer-link">
													<a
														href="https://japfaindiacareers.peoplestrong.com/home"
														target="_blank"
														className="flex items-center gap-4"
													>
														{profile.exploreText}{' '}
														<img
															src={`${process.env.PUBLIC_URL}/assets/img/icons/explore-right-arrow.svg`}
															className="img-fluid"
															alt=""
														/>
													</a>
												</div>
											</div>
										</div>
										<div className="grow-japfa-right-row">
											<div className="profile-row">
												<img
													src={`${modifyPath(
														testimonial[
															'testimonial-profile-img'
														],
													)}`}
													alt=""
													className="rounded-full"
												/>
												<span>
													{profile.profileQuote}
												</span>
											</div>
											<div className="profile-row-footer">
												{profile.profileName}
											</div>
										</div>
									</motion.div>
								</div>
							</div>
						</div>
					</div>
				</div>
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
								<Dialog.Panel className=" w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<div className="">
										<button
											type="button"
											className="mb-2 ml-auto flex justify-end"
											onClick={closeModal}
										>
											<img
												src={`${process.env.PUBLIC_URL}/assets/img/icons/close-icon.svg`}
												alt=""
												width={'24px'}
												height={'24px'}
											/>
										</button>
										<Plyr
											source={{
												type: 'video',
												sources: [
													{
														src: 'hwclvI89bMI',
														provider: 'youtube',
													},
												],
											}}
											options={{
												clickToPlay: true,
											}}
										/>
										{/* <div
											style={{
												height: '260px',
											}}
										></div> */}
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

export default GrowJapfaSection;
