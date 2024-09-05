import React from 'react';
import { fadeLeft, fadeRight } from '../../../utils/scrollAnimations';
import { motion } from 'framer-motion';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const JobOpeningsSection = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const closeModal = () => {
		setIsOpen(false);
	};
	const openModal = () => {
		setIsOpen(true);
	};
	return (
		<div className="my-20 flex items-center justify-between	 gap-10 max-mediumScreen:gap-3 max-sm:flex-col md:my-[120px]">
			{/* image */}
			<div className="mediumScreeen:max-w-[calc(100vw/2)] h-full max-sm:w-full sm:max-w-[calc(100vw/2.4)]">
				<motion.img
					src={`${process.env.PUBLIC_URL}/assets/img/career-openings.webp`}
					alt=""
					className="h-full w-full object-cover"
					initial="hidden"
					variants={fadeLeft}
					whileInView="visible"
				/>
			</div>
			{/* right column  */}
			<motion.div
				className=" w-1/2 max-mediumScreen:pr-8 max-sm:w-full max-sm:pl-8 mediumScreen:mr-[calc((100vw-1352px)/2)]"
				variants={fadeRight}
				initial="hidden"
				whileInView={'visible'}
			>
				<h2 className=" mb-6 text-4xl font-extrabold text-black  max-md:mb-4 max-sm:mt-8 lg:text-7xl">
					Explore Open Positions
				</h2>
				<p className="mb-6 text-xl">
					Join Our Leading Team - Explore Current Job Openings
				</p>
				<div className="flex flex-wrap items-center gap-6 max-md:items-start max-md:gap-4">
					<div className="">
						<a
							href="https://japfaindiacareers.peoplestrong.com/home"
							target="_blank"
						>
							<button className="bg-[#EC691F] p-3 text-white md:px-6 md:py-5">
								Explore job openings
							</button>
						</a>
					</div>

					<div className="  !border !border-[#EC691F] bg-transparent">
						<button
							className="p-3 md:px-6 md:py-5 "
							onClick={openModal}
						>
							Apply Now
						</button>
					</div>
					<Transition appear show={isOpen} as={Fragment}>
						<Dialog
							as="div"
							className="relative z-10"
							onClose={closeModal}
						>
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0"
								enterTo="opacity-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								<div className="jobForm-custom-backdrop fixed inset-0 bg-black/30" />
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
										<Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white p-[40px] text-left align-middle shadow-xl transition-all max-sm:max-w-md lg:max-w-[764px]">
											<div className="flex items-center gap-[24px] max-md:flex-col max-sm:flex-col lg:flex-row">
												<label
													htmlFor=""
													className="mb-6 flex w-full flex-col gap-2 max-md:mb-[0px] max-sm:mb-[0] lg:w-6/12"
												>
													<span className="text-base font-normal leading-6 text-black">
														Name <sup>*</sup>
													</span>
													<input
														type="text"
														name="name"
														id="name"
														className="form-input h-[48px] rounded border border-solid border-[#DDD] px-[20px]"
														placeholder="Full name"
													/>
												</label>
												<label
													htmlFor=""
													className="mb-6 flex w-full flex-col gap-2 lg:w-6/12"
												>
													<span className="text-base font-normal leading-6 text-black">
														Contact number{' '}
														<sup>*</sup>
													</span>
													<input
														type="text"
														name="name"
														id="name"
														className="form-input h-[48px] rounded border border-solid border-[#DDD] px-[20px]"
														placeholder="0123456789"
													/>
												</label>
											</div>
											<div className="flex items-center gap-[24px] max-md:flex-col max-sm:flex-col lg:flex-row">
												<label
													htmlFor=""
													className="mb-6 flex w-full flex-col gap-2 max-md:mb-[0px] max-sm:mb-[0px] lg:w-6/12"
												>
													<span className="text-base font-normal leading-6 text-black">
														Location <sup>*</sup>
													</span>
													<select className="form-select h-[48px] rounded border border-solid border-[#DDD] px-[20px] text-[#ddd]">
														<option
															value=""
															selected
														>
															Select Department
														</option>
														<option value="1">
															Option 1
														</option>
														<option value="2">
															Option 2
														</option>
														<option value="3">
															Option 3
														</option>
													</select>
												</label>
												<label
													htmlFor=""
													className="mb-6 flex w-full flex-col gap-2 lg:w-6/12"
												>
													<span className="text-base font-normal leading-6 text-black">
														Email <sup>*</sup>
													</span>
													<input
														type="email"
														name="name"
														id="name"
														className="form-input h-[48px] rounded border border-solid border-[#DDD] px-[20px]"
														placeholder="abc123@gmail.com"
													/>
												</label>
											</div>
											<div className="flex items-center gap-[24px] lg:flex-row">
												<label
													htmlFor=""
													className="mb-6 flex flex-col gap-2 max-md:w-full max-sm:w-full lg:w-6/12 lg:max-w-[330px]"
												>
													<input
														type="text"
														name="name"
														id="name"
														className="jobForm-uploadFile form-input  h-[48px] rounded border border-solid border-[#DDD] pl-[50px] pr-[20px] lg:max-w-[330px]"
														placeholder="Upload resume"
													/>
													<span className="lg:text-[16px] lg:text-[#ACACAC]">
														File formate : Word,
														PDF, JPEG{' '}
													</span>
												</label>
											</div>
											<div className="items-left flex flex-col">
												<label
													htmlFor=""
													className="mb-[40px] flex w-full flex-col gap-2"
												>
													<span>Message</span>
													<textarea
														name="message"
														id="message"
														className="form-textarea resize-none rounded border border-solid border-[#DDD] px-[20px]"
														placeholder="Upto 1000 words"
														rows={4}
													></textarea>
												</label>
												<button
													className="max-w-[116px] bg-[#EC691F] px-[32px] py-[20px] text-[16px] text-[#FFFFFF]"
													onClick={closeModal}
												>
													Submit
												</button>
											</div>
										</Dialog.Panel>
									</Transition.Child>
								</div>
							</div>
						</Dialog>
					</Transition>
				</div>
			</motion.div>
		</div>
	);
};

export default JobOpeningsSection;
