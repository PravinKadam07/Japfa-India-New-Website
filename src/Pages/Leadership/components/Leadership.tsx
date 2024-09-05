import { Dialog, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import React, { Fragment } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import ShadowText from '../../../Components/ShadowText';
import { fadeLeft, fadeUp } from '../../../utils/scrollAnimations';
import CustomParagraph from '../../Farm/CustomParagraph';
import LeadershipMemberCard from './LeadershipMemberCard';
import { modifyPath } from '../../../utils/fetchFromApi';

interface LeadershipMembersProps {
	leadershipMembers: {
		id: number;
		img: string;
		name: string;
		about: string;
		description: string;
	}[];
}

const Leadership = ({ leadershipMembers }: LeadershipMembersProps) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [activeIndex, setActiveIndex] = React.useState(0);

	const toggleModal = (index: number, openStatus: boolean) => {
		setIsOpen(openStatus);
		setActiveIndex(index);
	};
	const closeModal = () => setIsOpen(false);

	return (
		<>
			<section className="relative">
				<div className="mx-auto max-w-japfaGrid max-mediumScreen:px-14 max-sm:px-8">
					<motion.p
						className="text- text-[48px] font-normal max-sm:text-[24px] lg:text-[72px]"
						variants={fadeUp}
						initial={'hidden'}
						whileInView={'visible'}
					>
						Our
					</motion.p>
					<ShadowText
						text="Leadership"
						classes="mb-[24px] sm:mb-[40px] lg:mb-[80px] max-sm:text-[52px] text-5xl lg:text-[166px] farmText"
					/>

					<motion.div
						className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6"
						variants={fadeLeft}
						initial={'hidden'}
						whileInView={'visible'}
					>
						{leadershipMembers.map((item, index) => (
							<LeadershipMemberCard
								key={item.id}
								id={index}
								about={item.about}
								imageSrc={`${modifyPath(item.img)}`}
								name={item.name}
								handleModal={toggleModal}
							/>
						))}
					</motion.div>
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
									<Dialog.Panel className="flex h-full max-h-[80vh] w-full max-w-[1280px] transform flex-col overflow-hidden rounded-2xl bg-white p-6 pb-12 text-left align-middle shadow-xl transition-all">
										<button
											type="button"
											className="ml-auto inline-flex justify-center rounded-md border border-transparent text-3xl font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
											onClick={closeModal}
										>
											<img
												src={`${process.env.PUBLIC_URL}assets/img/icons/close-icon.svg`}
												alt=""
												width={'24px'}
												height={'24px'}
											/>
										</button>
										<div className=" relative mx-3 flex items-start justify-between overflow-y-auto max-md:flex-col max-sm:mx-4 lg:mx-14">
											{/* profile image */}
											<div className="w-5/12 max-w-[444px] max-md:mb-6 max-md:w-6/12 md:sticky md:top-0">
												<img
													src={modifyPath(
														leadershipMembers[
															activeIndex
														].img,
													)}
													alt=""
													className="w-[95%]"
												/>
											</div>

											{/* details */}
											<div className="h-full w-6/12 max-w-[684px] max-md:w-full">
												<div className="sticky top-0 bg-white">
													<h2 className="textClipGradientDark text-[40px] font-bold leading-snug max-lg:text-[32px] max-sm:mb-2 max-sm:leading-tight">
														{
															leadershipMembers[
																activeIndex
															].name
														}
													</h2>
													<p className="text-[20px] md:text-2xl">
														{
															leadershipMembers[
																activeIndex
															].about
														}
													</p>
													<div className="my-6 h-[1px] w-full bg-[#00000033]"></div>
												</div>
												<CustomParagraph
													text={
														leadershipMembers[
															activeIndex
														].description
													}
												/>
											</div>
										</div>
									</Dialog.Panel>
								</Transition.Child>
							</div>
						</div>
					</Dialog>
				</Transition>
			</section>
		</>
	);
};

export default Leadership;
